import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import Button from '../UI/Button'
import { GlobalStyles } from '../constants/styles'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../util/firebase/firebase'
import { userContext } from '../store/userContext'



const LoginScreen = ({navigation = { navigate: () => {} }}) => {
    const userCtx = useContext(userContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useLayoutEffect(() => {
      navigation.setOptions({
          title: '',
          headerRight: () => {},
          headerLeft: () => {},
          header: () => {},
      })
  }, [navigation])
  
    const handleSignup = () => {
      setIsLoading(true)
      setError('')
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setIsLoading(false)
          handleLogin()
        })
        .catch((error) => {
          setIsLoading(false)
          setError(error.message.replace('Firebase:', ''))
        })
    }
  
    const handleLogin = () => {
      setIsLoading(true)
      setError('')
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setIsLoading(false)
          userCtx.addUser(userCredential.user)
          navigation.navigate('feed', { screen: 'feed' })
        })
        .catch((error) => {
          setIsLoading(false)
          setError(error.message.replace('Firebase:', ''))
        })
    }
  
    const clearError = () => {
      setError('')
    }
  
    return (
      <ImageBackground
        source={require('../assets/bg1-splash.png')} 
        style={styles.image}>
      <KeyboardAvoidingView style={styles.container}>
        
        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            keyboardType='email-address'
            placeholder='Email'
            style={styles.input}
            placeholderTextColor= '#f0f0f057'
            onChangeText={setEmail}
            onFocus={clearError}
          />
  
          <TextInput
            value={password}
            placeholder='Password'
            secureTextEntry
            style={styles.input}
            placeholderTextColor= '#f0f0f057'
            onChangeText={setPassword}
            onFocus={clearError}
          />
        </View>
  
        {error ? <Text style={styles.error}>{error}</Text> : null}
  
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttons}
            mode='full'
            isLoading={isLoading}
            onPress={handleLogin}
          >
            Login
          </Button>
  
          <Button
            style={styles.buttons}
            mode='flat'
            isLoading={isLoading}
            onPress={handleSignup}
          >
            Register
          </Button>
        </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }

export default LoginScreen

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        width: '100%',
        height: '100%',
      },
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: GlobalStyles.colors.primary500,
    },
    inputContainer: {
        width: '60%',
    },
    input: {
        // backgroundColor: GlobalStyles.colors.white,
        color: GlobalStyles.colors.white,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.gray200,
        borderRadius: 50,
        marginVertical: 8,

    },
    buttonContainer: {
        width: '50%',
        marginVertical: 24,
    },
    buttons: {
        marginVertical: 8,
    },
    error: {
        color: GlobalStyles.colors.error500,
    },
})