import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

function Button({children, onPress, mode, style}){
    return (
        <View
        style={style}
        >
            <Pressable
            onPress={onPress}
            style={({pressed}) => pressed && styles.pressed}
            >
                <View style={[styles.button, 
                    mode === 'flat' && styles.flat,
                    mode === 'half' && styles.half,
                    ]}>
                    <Text
                    style={[styles.buttonText, mode === 'flat' && styles.flatText]}
                    >{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        paddingHorizontal: 16,
        borderWidth: 4,
        borderColor: GlobalStyles.colors.primary500,
        paddingVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,

    },
    buttonText: {
        color: GlobalStyles.colors.gray500,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary500,
        borderRadius: 4,
    },
    flat: {
        backgroundColor: GlobalStyles.colors.primary50,
        borderWidth: 4,
        borderColor: GlobalStyles.colors.primary100,
    },
    half: {
        backgroundColor: GlobalStyles.colors.white,
        borderWidth: 4,
        borderColor: GlobalStyles.colors.primary400,
    }
})