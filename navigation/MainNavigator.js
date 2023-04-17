import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';

import { GlobalStyles } from '../constants/styles';
import LoginScreen from '../screens/LoginScreen';
import Feed from '../screens/main/Feed';
import NewWorkout from '../screens/main/NewWorkout';
import OrderExercises from '../components/Workout/OrderExercise';
import InExercise from '../components/Workout/InExercise';


const Stack = createStackNavigator();

export const MainNavigator = () => {

    return (
        <Stack.Navigator
            // screenOptions={() => ({
            //     headerBackVisible: false,
            //     headerRight: HeaderRight,
            //     headerLeft: HeaderLeft,
            //     title: "Home",
            //     headerTransparent: true,
            //     headerStyle: {
            //         borderBottomWidth: 5,
            //         borderBottomColor: 'white',
            //     },
            //     headerTintColor: '#fff',
            //     headerTitleStyle: {
            //         fontWeight: 'bold',
            //         color: 'white'
            //     },
            //     cardStyle: {
            //         backgroundColor: "black"
            //     },
            // })}
        >
            {/* <Stack.Screen
                name="login"
                component={LoginScreen}
            /> */}
            <Stack.Screen
                name="feed"
                component={Feed}
            />
            {/* <Stack.Screen
                name="user"
                component={UserScreen}
            /> */}
            {/* <Stack.Screen
                name="editWorkout"
                component={EditWorkoutScreen}
            /> */}
            <Stack.Screen
                name="NewWorkout"
                component={NewWorkout}
                // options={{ 
                //     presentation: 'modal',
                // }}
            />
            <Stack.Screen
                name="OrderExercises"
                component={OrderExercises}
                options={{ title: 'Order Exercises' }}
                />

            <Stack.Screen
                name="InExercise"
                component={InExercise}
            />
        </Stack.Navigator>
    );
};
