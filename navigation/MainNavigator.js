import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';

import { GlobalStyles } from '../constants/styles';
import LoginScreen from '../screens/LoginScreen';
import Feed from '../screens/main/Feed';
import NewWorkout from '../screens/main/NewWorkout';
import OrderExercises from '../components/Workout/pre/OrderExercise';
import InExercise from '../components/Workout/active/InExercise';
import WorkoutComplete from '../screens/main/WorkoutComplete';


const Stack = createStackNavigator();

export const MainNavigator = () => {

    return (
        <Stack.Navigator
        screenOptions={{headerTintColor: GlobalStyles.colors.primary500}}
        >
            {/* <Stack.Screen
                name="login"
                component={LoginScreen}
            /> */}
            <Stack.Screen
                name="Feed"
                component={Feed}
            />
            {/* <Stack.Screen
                name="user"
                component={UserScreen}
            /> */}
            <Stack.Screen
                name="NewWorkout"
                component={NewWorkout}
                options={{ 
                    title: '',
                    headerTransparent: true, 
                }}
            />
            <Stack.Screen
                name="OrderExercises"
                component={OrderExercises}
                options={{ title: 'Order Exercises' }}
                />

            <Stack.Screen
                name="InExercise"
                component={InExercise}
                options={{ headerTransparent: true }}
            />
            <Stack.Screen
                name="WorkoutComplete"
                component={WorkoutComplete}
            />
        </Stack.Navigator>
    );
};
