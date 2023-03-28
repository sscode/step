import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useContext, useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import Button from '../../UI/Button';
import { GlobalStyles } from '../../constants/styles';
import LoadingOverlay from '../../UI/LoadingOverlay';
import { storeWorkout } from '../../util/firebase/http';
import { workoutContext } from '../../store/workoutContext';
import uploadCloudinary from '../../util/images/cloudinary';
<<<<<<< HEAD
import {Dimensions} from 'react-native';
=======
import { Dimensions } from 'react-native';
>>>>>>> repo2/main
import clean from '../../util/dataFormats/clean';
import WorkoutInput from './WorkoutInputs';
import { userContext } from '../../store/userContext';

const windowWidth = Dimensions.get('window').width;


<<<<<<< HEAD
export default function CameraBlock({close}){
=======
export default function CameraBlock({ close }) {
>>>>>>> repo2/main
    const [hasPermission, setHasPermission] = useState(null);
    const [newTaken, setNewTaken] = useState(false);
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [imageName, setImageName] = useState("");
    const cameraRef = useRef(null);
    const [type, setType] = useState(CameraType.back);
    const [fetching, setFetching] = useState(false);
    const [ergText, setErgText] = useState(null);
    const [imgURL, setImgURL] = useState(null);
    const [date, setDate] = useState(null);
    const [name, setName] = useState(null);

    // if (!permission)
    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })
<<<<<<< HEAD
        ()
    }, []);

    const takePicture = async () => {
        if(cameraRef){
=======
            ()
    }, []);

    const takePicture = async () => {
        if (cameraRef) {
>>>>>>> repo2/main
            try {
                const data1 = await cameraRef.current.takePictureAsync();
                const data = await ImageManipulator.manipulateAsync(
                    data1.uri,
                    [{ resize: { width: 300 } }],
                    { compress: 0.7, format: 'jpeg' }
<<<<<<< HEAD
                  );
=======
                );
>>>>>>> repo2/main
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
<<<<<<< HEAD
        if(image){
=======
        if (image) {
>>>>>>> repo2/main
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
<<<<<<< HEAD
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: .7,
=======
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: .7,
>>>>>>> repo2/main
        });
        setImage(result.assets[0].uri);
        setImageName(result.assets[0].fileName)
        setImageFile(result.assets[0])
    }

    const uploadImage = async (asset) => {
        setFetching(true);

<<<<<<< HEAD
        {newTaken ? savePicture() : null}
=======
        { newTaken ? savePicture() : null }
>>>>>>> repo2/main

        const file = {
            uri: asset.uri,
            name: imageName,
            type: 'image/jpg'
        }

        //cloudinary
        const cloudURL = await uploadCloudinary(file)
        setImgURL(cloudURL)
        textract(file)
        // const options = {
        //     keyPrefix: 'ergphotos/',
        //     bucket: 'ergphotos',
        //     region: 'us-west-2',
        //     accessKey: 'AKIAWDF35LFWWTNSW4MU',
        //     secretKey: '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',
        //     successActionStatus: 201
        // }
<<<<<<< HEAD
        
=======

>>>>>>> repo2/main
        // // console.log(file)
        // RNS3.put(file, options)
        // .progress(event => {
        //     console.log(`percent: ${event.percent}`);
        //     console.log(event)
        // })
        // .then(response => {
        //     console.log("RESPONSE: ", response.body.postResponse.location)

        //     newWorkoutMaker(response.body.postResponse.location)
<<<<<<< HEAD
            // setFetching(false);
=======
        // setFetching(false);
>>>>>>> repo2/main
        //     close()
        //     if(response.status !== 201)
        //         throw new Error('Failed to upload image to S3');
        // })
    }

    async function textract(imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);
        const headers = {
<<<<<<< HEAD
        'Content-Type': 'multipart/form-data',
        };
        const req = fetch('https://erg.stusim.repl.co/get-text', {
        method: 'POST',
        body: formData,
        headers: headers,
        })
        .then((response) => response.json())
        .then((data) => {
            setErgText(data)
        })
        .catch(error => {
            // handle error
            console.log("error", error);
        });
    };

    useEffect(() => {
        if(ergText){
=======
            'Content-Type': 'multipart/form-data',
        };
        const req = fetch('https://erg.stusim.repl.co/get-text', {
            method: 'POST',
            body: formData,
            headers: headers,
        })
            .then((response) => response.json())
            .then((data) => {
                setErgText(data)
            })
            .catch(error => {
                // handle error
                console.log("error", error);
            });
    };

    useEffect(() => {
        if (ergText) {
>>>>>>> repo2/main
            //cleanup workout here
            const cleanText = clean(ergText)
            newWorkoutMaker(imgURL, cleanText)
            setFetching(false);
            close();
        }
    }, [ergText])

    const userCtx = useContext(userContext)
    const workoutCtx = useContext(workoutContext)
<<<<<<< HEAD
    
=======

>>>>>>> repo2/main
    const newWorkoutMaker = async (imgURL, ergText) => {

        const data = {
            name: name,
            imgURL: imgURL,
            date: date,
            ergData: ergText,
            userID: userCtx.user[0].uid,
        }
        const wId = await storeWorkout(data)
<<<<<<< HEAD
    
        //add to context
        workoutCtx.addWorkout({...data, id: wId})
    }

    if(!name){
        return <WorkoutInput close={close} setName={setName} setDate={setDate} />
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
            <View style={[styles.imageContainer]}>
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
=======

        //add to context
        workoutCtx.addWorkout({ ...data, id: wId })
    }

    if (!name) {
        return <WorkoutInput close={close} setName={setName} setDate={setDate} />
    }

    if (!hasPermission) {
        return <Text>No access to camera</Text>
    }

    if (fetching) {
        return <LoadingOverlay />
    }

    return (
        <View style={styles.contrainer}>
            {image ?
                <View style={[styles.imageContainer]}>
                    <Image
                        style={styles.camera}
                        source={{ uri: image }} />
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
>>>>>>> repo2/main
        </View>
    );
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        marginBottom: 24,
        alignItems: 'center',
    },
    imageContainer: {
        // flex: 1,
        height: windowWidth * .8,
        width: windowWidth * .8,
    },
    camera: {
        // flex: 1,
        backgroundColor: 'red',
        width: windowWidth * .8,
        height: windowWidth * .8,
    },
    text: {
        color: 'white',
    },
    buttonContainer: {
        marginTop: 24,
        flexDirection: 'row',
        width: '100%',
        // alignItems: 'center',
        justifyContent: 'space-around',
    }
})