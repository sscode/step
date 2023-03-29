import { useLayoutEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import CameraBlock from "../components/Camera/CameraBlock";
import LoadingOverlay from "../UI/LoadingOverlay";


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
        flex: 1,
        padding: 24,
    }
})