import { KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Button from '../../UI/Button'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../util/firebase/firebase'
import { userContext } from '../../store/userContext'


const LoginScreen = ({ navigation }) => {
    const userCtx = useContext(userContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                handleLogin()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                userCtx.addUser(userCredential.user)
                navigation.navigate('main', { screen: 'feed' })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <KeyboardAvoidingView style={styles.container}>
            <View
                style={styles.inputContainer}
            >
                <TextInput
                    value={email}
                    keyboardType='email-address'
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={setEmail}
                />

                <TextInput
                    value={password}
                    placeholder='Password'
                    secureTextEntry
                    style={styles.input}
                    onChangeText={setPassword}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.buttons}
                    onPress={handleLogin}
                >
                    Login
                </Button>
                <Button
                    style={styles.buttons}
                    mode='flat'
                    onPress={handleSignup}
                >
                    Register
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '70%',
        // backgroundColor: GlobalStyles.colors.primary500,
    },
    input: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        marginVertical: 8,
    },
    buttonContainer: {
        marginVertical: 24,
    },
    buttons: {
        marginVertical: 8,
    }
})