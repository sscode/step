import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import { NativeModules } from 'react-native';
import AppNavigation from './navigation';
import { ExerciseContextProvider } from './store/exerciseContext';
import UserContextProvider from './store/userContext';

// NativeModules.DevSettings.setIsDebuggingRemotely(false);
LogBox.ignoreLogs(['AsyncStorage has been extracted'])


export default function App() {


  return (
    <>
      <StatusBar style="light" />
      <UserContextProvider>
        <ExerciseContextProvider>
            <AppNavigation />
        </ExerciseContextProvider>
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
