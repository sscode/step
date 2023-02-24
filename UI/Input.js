import { Pressable, View, Text, StyleSheet, TextInput } from "react-native";
import { GlobalStyles } from "../constants/styles";

function Input(){

    return (
        <View style={[styles.inputContainer]}>
            {/* <Text style={[styles.textLabel, invalid && styles.invalidLabel]}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig}/> */}
        </View>)
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        borderRadius: 4,
        backgroundColor: GlobalStyles.colors.primary500,
    },

})