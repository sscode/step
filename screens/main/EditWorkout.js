import { useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import { workoutContext } from "../../store/workoutContext";
import IconButton from "../../UI/IconButton";
import { deleteWorkout, updateWorkout } from "../../util/firebase/http";
import { useContext } from "react";
import { GlobalStyles } from "../../constants/styles";


function EditWorkoutScreen({route, navigation}){

    const [newName, setNewName] = useState(route.params?.name)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Edit Workout',
            headerRight: () => {},
            headerLeft: () => {
            },
            headerBackVisible: true,
        })
    }, [navigation])

    const closeHandler = () => {
        navigation.goBack();
    }

    const workoutCtx = useContext(workoutContext)

    const selectedWorkout = workoutCtx.workouts.find(workout => {
        return workout.id === route.params?.id
    })

    function deleteHandler(){
        deleteWorkout(route.params?.id)
        workoutCtx.deleteWorkout(route.params?.id)
        closeHandler()
    }
    async function saveHandler(){
        console.log(selectedWorkout)
        const workoutUpdate = {
            name: newName,
            date: selectedWorkout.date,
            imgURL: selectedWorkout.imgURL,
            ergData: selectedWorkout.ergData,
        }
        workoutCtx.updateWorkout(route.params?.id, workoutUpdate)
        await updateWorkout(route.params?.id, workoutUpdate)
        closeHandler()
    }

    return (
    <View style={styles.container}>
        <View>
            <View>
                <Text>Name: </Text>
                <TextInput 
                onChangeText={setNewName}
                style={styles.input}
                placeholder="Edit Name" defaultValue={newName}/>
            </View>
            <View>
                <Text>Date: {route.params?.date}</Text>
            </View>
        </View>
        <Image source={{uri: route.params?.imgURL}} style={{width: 100, height: 100}}/>
        <View style={styles.buttonContainer}>
            <View style={[styles.button, styles.delete]}>
                <IconButton 
                    iconType="Ionicons"
                    icon="trash" size={24} 
                    color={GlobalStyles.colors.black} 
                    onPress={deleteHandler}/>
            </View>
            <View style={[styles.button, styles.save]}>
                <IconButton 
                    iconType="Ionicons"
                    icon="save" size={24} 
                    color={GlobalStyles.colors.black} 
                    onPress={saveHandler}/>
            </View>
        </View>
    </View>)
}

export default EditWorkoutScreen;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-between',
    },
    input: {
        borderWidth: 1,
        borderColor: GlobalStyles.colors.black,
        borderRadius: 6,
        padding: 8,
        marginVertical: 8,

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    button: {
        alignItems: 'center',
        borderRadius: 6,
    },
    delete: {
        width: 75,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.error500,

    },
    save: {
        width: 100,
        backgroundColor: GlobalStyles.colors.primary500,

    },
})