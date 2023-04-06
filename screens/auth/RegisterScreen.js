import { KeyboardAvoidingView, TextInput, View } from 'react-native'

const RegisterScreen = () => {

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
                >Login</Button>
                <Button
                    style={styles.buttons}
                    mode='flat'
                    onPress={handleSignup}
                >Register</Button>
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen;