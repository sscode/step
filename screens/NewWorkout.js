import { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import CameraBlock from "../components/Camera/CameraBlock";


<<<<<<< HEAD
function NewWorkout({navigation}){
=======
function NewWorkout({ navigation }) {
>>>>>>> repo2/main

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'New Workout',
<<<<<<< HEAD
            headerRight: () => {},
            headerLeft: () => {},
=======
            headerRight: () => { },
            headerLeft: () => { },
>>>>>>> repo2/main
        })
    }, [navigation])

    const closeHandler = () => {
        navigation.goBack();
    }

    return (
<<<<<<< HEAD
    <View style={styles.container}>
        <CameraBlock close={closeHandler}/>
    </View>)
=======
        <View style={styles.container}>
            <CameraBlock close={closeHandler} />
        </View>)
>>>>>>> repo2/main
}

export default NewWorkout;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    }
})