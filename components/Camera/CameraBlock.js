import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useContext, useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import Button from '../../UI/Button';
import { GlobalStyles } from '../../constants/styles';
import {RNS3} from 'react-native-aws3';
import LoadingOverlay from '../../UI/LoadingOverlay';
import { makeid } from '../../util/random';
import { storeWorkout } from '../../util/firebase/http';
import { workoutContext } from '../../store/workoutContext';
import uploadCloudinary from '../../util/images/cloudinary';



export default function CameraBlock({close}){
    const [hasPermission, setHasPermission] = useState(null);
    const [newTaken, setNewTaken] = useState(false);
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [imageName, setImageName] = useState("");
    const cameraRef = useRef(null);
    const [type, setType] = useState(CameraType.back);
    const [fetching, setFetching] = useState(false);

    const workoutCtx = useContext(workoutContext)

    
    
    // if (!permission)
    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })
        ()
    }, []);

    const takePicture = async () => {
        if(cameraRef){
            try {
                const data1 = await cameraRef.current.takePictureAsync();
                const data = await ImageManipulator.manipulateAsync(
                    data1.uri,
                    [{ resize: { width: 300 } }],
                    { compress: 0.7, format: 'jpeg' }
                  );
                setImageName(data.uri.slice(data.uri.length - 26, data.uri.length - 4))
                setImage(data.uri);
                // const blob = await data.blob()
                console.log(data)
                setImageFile(data);
                setNewTaken(true);
            } catch (error) {
                console.log(error);

            }
        }
    }



    const savePicture = async () => {
        if(image){
            try {
                await MediaLibrary.saveToLibraryAsync(image);
                // setImage(null);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: .7,
        });
        setImage(result.assets[0].uri);
        setImageName(result.assets[0].fileName)
        setImageFile(result.assets[0])
    }

    const uploadImage = (asset) => {

        setFetching(true);

        {newTaken ? savePicture() : null}

        const file = {
            uri: asset.uri,
            name: imageName,
            type: 'image/jpg'
        }

        //cloudinary
        const cloudURL = uploadCloudinary(file, setFetching)
        newWorkoutMaker(cloudURL)
        close();

        const options = {
            keyPrefix: 'ergphotos/',
            bucket: 'ergphotos',
            region: 'us-west-2',
            accessKey: 'AKIAWDF35LFWWTNSW4MU',
            secretKey: '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',
            successActionStatus: 201
        }
        
        // // console.log(file)
        // RNS3.put(file, options)
        // .progress(event => {
        //     console.log(`percent: ${event.percent}`);
        //     console.log(event)
        // })
        // .then(response => {
        //     console.log("RESPONSE: ", response.body.postResponse.location)

        //     newWorkoutMaker(response.body.postResponse.location)
        //     setFetching(false);
        //     close()
        //     if(response.status !== 201)
        //         throw new Error('Failed to upload image to S3');
        // })
    }

    
    const newWorkoutMaker = async (imgURL) => {
        const data = {
            name: makeid(6),
            imgURL: imgURL,
            date: new Date (),
            userID: '55832'
        }
        const wId = await storeWorkout(data)
    
        //add to context
        workoutCtx.addWorkout({...data, id: wId})
    }

    if(!hasPermission){
        return <Text>No access to camera</Text>
    }

    if(fetching){
        return <LoadingOverlay />
      }
  
    return (
      <View style={styles.contrainer}>
        {image ?
            <View style={styles.imageContainer}>
                <Image 
                style={styles.camera}
                source={{uri: image}} />
            </View>
            :
            <Camera 
            ref={cameraRef}
            style={styles.camera}
            type={type}
            >
            </Camera>
        }
        <View style={styles.buttonContainer}>
            {!image ? 
            <>
                <Button
                mode='half'
                onPress={pickImage}
                >Select Old</Button>
                <Button
                mode='half'
                onPress={takePicture}
                >Capture New</Button>
            
            </>
            : 
                <>
                <Button 
                mode='half'
                onPress={() => setImage(null)}
                >Retake</Button>
                <Button 
                mode='flat'
                onPress={() => uploadImage(imageFile)}
                >Upload</Button>
                </>
            }
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        marginBottom: 24,
    },
    imageContainer: {
        // flex: 1,
        height: '80%',
    },
    camera: {
        flex: 1,
        backgroundColor: 'red',
    },
    text: {
        color: 'white',
    },
    buttonContainer: {
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})