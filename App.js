import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/Splash';
import Feed from './screens/Feed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import { GlobalStyles } from './constants/styles';
import NewWorkout from './components/newWorkout/NewWorkout';
import User from './screens/User';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style="auto" />
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
          component={SplashScreen} />
          
          <Stack.Screen 
          name="Feed" 
          component={Feed} />

          <Stack.Screen 
          name="User" 
          component={User} />

          <Stack.Screen 
          name="NewWorkout" 
          component={NewWorkout}
          options={{
            presentation: 'modal',
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
