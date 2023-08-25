import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../util/firebase/firebase'
import { userContext } from '../../store/userContext'
import PrimaryButton from '../../UI/PrimaryButton'
import { GlobalStyles } from '../../constants/styles'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation = { navigate: () => {} }}) => {
    const userCtx = useContext(userContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const { addUser } = useContext(userContext);


    useLayoutEffect(() => {
      navigation.setOptions({
          title: '',
          headerRight: () => {},
          headerLeft: () => {},
          header: () => {},
      })
  }, [navigation])

  useLayoutEffect(() => {
    const checkLoggedIn = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        addUser(auth.currentUser);

        // Clear input fields
        setEmail('');
        setPassword('');

        //navigate to feed
        navigation.navigate('Feed', { screen: 'Feed' });
      }
    };
  
    checkLoggedIn();
  }, [navigation]);
  
  
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
  
    const handleLogin = async () => {
      setIsLoading(true);
      setError('');
    
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setIsLoading(false);
    
        // Save user's login status
        await AsyncStorage.setItem('isLoggedIn', 'true');
    
        // Update user context with logged-in user
        addUser(userCredential.user);
    
        navigation.navigate('Feed', { screen: 'Feed' });
      } catch (error) {
        setIsLoading(false);
        setError(error.message.replace('Firebase:', ''));
      }
    };
    
    
  
    const clearError = () => {
      setPassword('');
      setError('')
    }
  
    return (
      <ImageBackground
        source={require('../../assets/bg1-splash.png')} 
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
          <PrimaryButton
            style={styles.buttons}
            mode='full'
            isLoading={isLoading}
            onPress={handleLogin}
            title='Login'
          />
          
  
          <PrimaryButton
            style={styles.buttons}
            mode='flat'
            isLoading={isLoading}
            onPress={handleSignup}
            title='Register'
          />
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
        width: '60%',
        marginVertical: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: GlobalStyles.colors.primary500,
    },
    buttons: {
        marginVertical: 8,
    },
    error: {
        color: GlobalStyles.colors.error500,
    },
})