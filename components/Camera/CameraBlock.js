import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Button from '../../UI/Button';
import { GlobalStyles } from '../../constants/styles';

export default function CameraBlock({close}){
    const [hasPermission, setHasPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    
    // if (!permission)
    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })
        ()
    }, []);

    const savePicture = async () => {
        if(image){
            try {
                await MediaLibrary.saveToLibraryAsync(image);
                setImage(null);
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
          quality: 1,
        });
        setImage(result.assets[0].uri);

        const file = {
            uri: result.assets[0].uri,
            name: result.assets[0].fileName,
            type: 'image/jpg'
        }
        setImageFile(file);
    }

    const uploadImage = () => {

        const data = new FormData();
        data.append('file', imageFile);
        data.append('upload_preset', 'erg_photos_preset');
        data.append('cloud_name', 'dfvcq2b');

        fetch('https://api.cloudinary.com/v1_1/dfvcq2b/image/upload', {
            method: 'post',
            body: data
        }).then(
            res => res.json()
        ).then(
            data => {
                console.log(data.url);
            }
        )
        close()
    }

    if(!hasPermission){
        return <Text>No access to camera</Text>
    }
  
    return (
      <View style={styles.contrainer}>
        {image ? 
            <Image 
            style={styles.camera}
            source={{uri: image}} />
        : null}
        <View tyle={styles.buttonContainer}>
            {!image ? 
                <Button
                mode='half'
                onPress={pickImage}
                >Select</Button>
            : 
                <Button 
                mode='flat'
                onPress={uploadImage}
                >Upload</Button>
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
    camera: {
        flex: 1,
        // backgroundColor: 'red',
    },
    text: {
        color: 'white',
    },
    buttonContainer: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    }
    // button:{
    //     width: 100,
    //     color: 'black',
    // }
})