import { useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import IconButton from "../../UI/IconButton";


function WorkoutInput({setName, setDate}){
    const [newName, setNewName] = useState('')
    const [newDate, setNewDate] = useState(new Date().toISOString().slice(0, 10))

    const saveHandler = () => {
        setName(newName)
        setDate(newDate)
    }

    return (
    <View style={styles.container}>
        <View>
            <View>
                <Text>Name: </Text>
                <TextInput 
                onChangeText={setNewName}
                style={styles.input}
                placeholder="Workout Name" defaultValue={newName}/>
            </View>
            <View>
                <Text>Date: </Text>
                <TextInput 
                onChangeText={setNewDate}
                style={styles.input}
                placeholder="Date" defaultValue={newDate}/>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <View style={[styles.button, styles.save]}>
                <IconButton 
                    iconType="Ionicons"
                    icon="camera" size={24} 
                    color={GlobalStyles.colors.black} 
                    onPress={saveHandler}/>
            </View>
        </View>
    </View>)
}

export default WorkoutInput;

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