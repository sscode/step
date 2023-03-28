import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import { GlobalStyles } from './constants/styles';

import WorkoutContextProvider from './store/workoutContext';
import UserContextProvider from './store/userContext';

import NewWorkout from './screens/NewWorkout';
import SplashScreenComp from './screens/Splash';
import Feed from './screens/Feed';
import User from './screens/User';
import EditWorkout from './screens/EditWorkout';
import LoginScreen from './screens/LoginScreen';

import { NativeModules } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

NativeModules.DevSettings.setIsDebuggingRemotely(true);



export default function App() {

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    // Prevent the splash screen from auto-hiding
    SplashScreen.preventAutoHideAsync()
      .then(() => console.log('Splash screen auto-hide prevented'))
      .catch(console.warn);
    // Add your app's initialization logic here
    // For example, load assets, check authentication status, etc.
    // Once the app is ready, call SplashScreen.hideAsync()

    // Simulating app initialization
    setTimeout(() => {
      SplashScreen.hideAsync()
      .then(() => console.log('Splash screen hidden'))
      .catch(console.warn);
  }, 1000); // Replace the 3000ms delay with your actual app initialization duration
}, []);

  return (
    <>
      <StatusBar style="auto" />
      <UserContextProvider>
      <WorkoutContextProvider>
        <NavigationContainer>
          <Stack.Navigator
          screenOptions={({navigation}) => ({
            headerBackVisible: false,
            headerRight: () => {
              return (
                <Ionicons name="add" size={24} color="black" style={{marginRight: 10}}
                onPress={() => {
                  navigation.navigate('NewWorkout')
                }}/> 
              )
            },
            headerLeft: () => {
              return (
                <Ionicons name="person" size={24} color="black" style={{marginLeft: 10}}
                onPress={() => {
                  navigation.navigate('User')
                }}
                />
              )
            },
            title: "Home",
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black'
            },
            })}
          >
            <Stack.Screen name="Splash" 
            screenOptions={{headerShown: false}}
            options={{headerShown: false}}
            component={SplashScreenComp} />

            <Stack.Screen name="Login" 
            screenOptions={{headerShown: false}}
            options={{headerShown: false}}
            component={LoginScreen} />
            
            <Stack.Screen 
            name="Feed" 
            component={Feed} />

            <Stack.Screen 
            name="User" 
            component={User} />

            <Stack.Screen 
            name="EditWorkout" 
            component={EditWorkout} />

            <Stack.Screen 
            name="NewWorkout" 
            component={NewWorkout}
            options={{
              presentation: 'modal',
            }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </WorkoutContextProvider>
      </UserContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
