import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';

import WorkoutContextProvider from './store/workoutContext';
import UserContextProvider from './store/userContext';

import { NativeModules } from 'react-native';
import AppNavigation from './navigation';
import { ExerciseContext, ExerciseProvider } from './store/exerciseContext';

// NativeModules.DevSettings.setIsDebuggingRemotely(false);
LogBox.ignoreLogs(['AsyncStorage has been extracted'])


export default function App() {


  return (
    <>
      <StatusBar style="auto" />
      <UserContextProvider>
        <ExerciseProvider>
          <WorkoutContextProvider>
            <AppNavigation />
          </WorkoutContextProvider>
        </ExerciseProvider>
      </UserContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
