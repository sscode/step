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
                    mode === 'full' && styles.full,
                    mode === 'flat' && styles.flat,
                    mode === 'half' && styles.half,
                    mode === 'redInverse' && styles.redInverse,
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
        borderRadius: 50,
        paddingHorizontal: 16,
        borderWidth: 1,
        paddingVertical: 8,

    },
    buttonText: {
        color: GlobalStyles.colors.white,
        textAlign: 'center',
    },
    full: {
        backgroundColor: GlobalStyles.colors.black,
        borderColor: GlobalStyles.colors.black,
    },
    flat: {
        backgroundColor: 'transparent',
        borderColor: GlobalStyles.colors.primary500,
    },
    half: {
        backgroundColor: GlobalStyles.colors.white,
        borderColor: GlobalStyles.colors.primary400,
    },
    redInverse: {
        backgroundColor: GlobalStyles.colors.white,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.error500,
    },
    pressed: {
        backgroundColor: GlobalStyles.colors.primary500,
        borderColor: GlobalStyles.colors.primary500,
        borderRadius: 50,
    },
})