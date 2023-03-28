import { Pressable, View, StyleSheet } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

function IconButton({icon, size, color, onPress, iconType}){

    let iconHolder = null

    if(iconType === "AntDesign"){
        iconHolder = <AntDesign name={icon} size={size} color={color}/>
    }
    if(iconType === "Ionicons"){
        iconHolder = <Ionicons name={icon} size={size} color={color}/>
    }

    return (
    <Pressable 
    style={({pressed}) => pressed && styles.pressed}
    onPress={onPress}>
        <View style={styles.buttonContainer}>
            {iconHolder}
            {/* <Ionicons name={icon} size={size} color={color}/> */}
        </View>
    </Pressable>)
}

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        // marginVertical: 2,
    },
    pressed: {
        opacity: 0.75
    }
})