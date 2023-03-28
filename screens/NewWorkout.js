import { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import CameraBlock from "../components/Camera/CameraBlock";


function NewWorkout({ navigation }) {

    //remove header

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'New Workout',
            headerRight: () => { },
            headerLeft: () => { },
        })
    }, [navigation])

    const closeHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <CameraBlock close={closeHandler} />
        </View>)
}

export default NewWorkout;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    }
})