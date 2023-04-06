import { useLayoutEffect } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import CameraBlock from "../../components/Camera/CameraBlock";
import LoadingOverlay from "../../UI/LoadingOverlay";


function NewWorkoutScreen({ navigation }) {

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
        <ImageBackground source={require('../../assets/bg-workout.png')}
        style={styles.image}
        >
        <View style={styles.container}>
            <CameraBlock close={closeHandler} />
        </View>
        </ImageBackground>
        )
}

export default NewWorkoutScreen;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        padding: 24,
    }
})