import { useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, ImageBackground } from "react-native";
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
            headerLeft: navigation.navigate('main', { screen: 'edit' }),
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
    <ImageBackground
    source={require('../../assets/bg-edit.png')}
    style={styles.image}
    >
        <View style={styles.container}>
            <View>
                <View style={styles.textContainer}>
                    <View>
                        <Text
                        style={styles.text}
                        >Workout Name: </Text>
                        <TextInput 
                        onChangeText={setNewName}
                        style={styles.input}
                        placeholder="Edit Name" defaultValue={newName}/>
                    </View>
                    <Text
                    style={[styles.text, styles.date]}
                    >Date: {route.params?.date}</Text>
                </View>
            </View>
            <Image 
            source={{uri: route.params?.imgURL}} 
            style={styles.imageSmall}/>
            <View style={styles.buttonContainer}>
                <View style={[styles.button, styles.delete]}>
                    <IconButton 
                        iconType="Ionicons"
                        icon="trash" size={24} 
                        color={GlobalStyles.colors.white} 
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
        </View>
    </ImageBackground>
    )
}

export default EditWorkoutScreen;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    container: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-between',
    },
    textContainer: {
        marginTop: 100,
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    text: {
        color: GlobalStyles.colors.white,
    },
    date: {
        marginTop: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: GlobalStyles.colors.white,
        color: GlobalStyles.colors.white,
        borderRadius: 6,
        padding: 8,
        marginTop: 8,

    },
    imageSmall: {
        borderRadius: 10,
        width: 300,
        height: 300,
        alignSelf: 'center',
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