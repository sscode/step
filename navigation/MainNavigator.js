import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { GlobalStyles } from '../constants/styles';

import Feed from '../screens/main/Feed';
import NewWorkout from '../screens/main/NewWorkout';
import OrderExercises from '../components/Workout/pre/OrderExercise';
import InExercise from '../components/Workout/active/InExercise';
import WorkoutComplete from '../screens/main/WorkoutComplete';
import MoreExerciseInfo from '../components/Workout/active/details/MoreExerciseInfo';
import LoginScreen from '../screens/auth/LoginScreen';
import UserScreen from '../screens/main/User';
import Feed2 from '../screens/main/Feed2';
import EditGroup from '../screens/main/EditGroup';


const Stack = createStackNavigator();

export const MainNavigator = () => {

    return (
        <Stack.Navigator
        screenOptions={{
            headerTintColor: GlobalStyles.colors.white}}
        >
            <Stack.Screen
                name="Feed2"
                component={Feed2}
            />
            <Stack.Screen
                name="EditGroup"
                component={EditGroup}
            />
            {/* <Stack.Screen
                name="login"
                component={LoginScreen}
            /> */}
            <Stack.Screen
                name="Feed"
                component={Feed}
            />
            <Stack.Screen
            name={'User'}
            component={UserScreen}
            options={{ 
                headerTransparent: true, 
            }}
            />
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
            name="MoreExerciseInfo" 
            component={MoreExerciseInfo} 
            options={{ headerTransparent: true }}
            />
            <Stack.Screen
                name="WorkoutComplete"
                component={WorkoutComplete}
            />
        </Stack.Navigator>
    );
};
