import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../util/firebase/firebase'
import { userContext } from '../../store/userContext'
import PrimaryButton from '../../UI/PrimaryButton'
import { GlobalStyles } from '../../constants/styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ExerciseContext } from '../../store/exerciseContext'
import LoginHero from './LoginHero'

const LoginScreen = ({navigation = { navigate: () => {} }}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const { addUser } = useContext(userContext);
    const { updateUser } = useContext(ExerciseContext);


    useLayoutEffect(() => {
      navigation.setOptions({
          title: '',
          headerRight: () => {},
          headerLeft: () => {},
          header: () => {},
      })
  }, [navigation])

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        //to userctx
        addUser(user);
        //add user to workoutctx
        updateUser(user.uid)
        // console.log(user.email)
        navigation.navigate('Feed', { screen: 'Feed' });
      }
    });

    return () => unsubscribe();
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
        await AsyncStorage.setItem('email', email);
    
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
      <KeyboardAvoidingView style={styles.container}>
        <LoginHero />
        <View style={styles.inputContainer}>
          <View style={styles.emailInput}>
            <TextInput
              value={email}
              keyboardType='email-address'
              placeholder='Email'
              style={styles.input}
              placeholderTextColor= {GlobalStyles.colors.grey100}
              onChangeText={setEmail}
              onFocus={clearError}
            />
          </View>

          <TextInput
            value={password}
            placeholder='Password'
            secureTextEntry
            style={styles.input}
            placeholderTextColor= {GlobalStyles.colors.grey100}
            onChangeText={setPassword}
            onFocus={clearError}
          />
        </View>
  
        {error ? <Text style={styles.error}>{error}</Text> : null}
  
        <View style={styles.buttonContainer}>
          <PrimaryButton
            style={'green'}
            mode='full'
            isLoading={isLoading}
            onPress={handleLogin}
            title='Login'
          />
          <PrimaryButton
            style={'greenDark'}
            mode='flat'
            isLoading={isLoading}
            onPress={handleSignup}
            title='Register'
          />
        </View>
        </KeyboardAvoidingView>
    )
  }

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.grey,
    },
    inputContainer: {
        width: '80%',
        marginTop: 48,
        borderWidth: 1,
        borderColor: GlobalStyles.colors.grey100,
        borderRadius: 8,
    },
    input: {
        color: GlobalStyles.colors.black,
        fontWeight: 'bold',
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    emailInput: {
      borderBottomWidth: 1,
      borderBottomColor: GlobalStyles.colors.grey100,
    },
    buttonContainer: {
        marginVertical: 24,
        width: '80%',
        height: 100,
        display: 'flex',
        justifyContent: 'space-between',
    },
    buttons: {
        marginBottom: 12,
    },
    error: {
        color: GlobalStyles.colors.error500,
    },
})