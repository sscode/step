import { useLayoutEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { workoutContext } from "../store/workoutContext";
import IconButton from "../UI/IconButton";
import { deleteWorkout } from "../util/firebase/http";
import { useContext } from "react";
import { GlobalStyles } from "../constants/styles";


function EditWorkout({route, navigation}){

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Edit Workout',
            headerRight: () => {},
            headerLeft: () => {},
            headerBackVisible: true,
        })
    }, [navigation])

    const closeHandler = () => {
        navigation.goBack();
    }

    const workoutCtx = useContext(workoutContext)
    function deleteHandler(){
        deleteWorkout(route.params?.id)
        workoutCtx.deleteWorkout(route.params?.id)
        closeHandler()
    }

    const editing = route.params?.name;

    return (
    <View style={styles.container}>
        <Text>Name: {route.params?.name}</Text>
        <Text>id: {route.params?.id}</Text>
        <Text>Date: {route.params?.date}</Text>
        <Image source={{uri: route.params?.imgURL}} style={{width: 100, height: 100}}/>
        <IconButton 
            iconType="Ionicons"
            icon="trash" size={24} 
            color={GlobalStyles.colors.black} 
            onPress={deleteHandler}/>
        {/* <CameraBlock close={closeHandler}/> */}
    </View>)
}

export default EditWorkout;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    }
})