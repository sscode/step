import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';

import { GlobalStyles } from '../constants/styles';



import EditWorkoutScreen from '../screens/main/EditWorkout';
import NewWorkoutScreen from '../screens/main/NewWorkout';
import FeedScreen from '../screens/main/Feed';
import UserScreen from '../screens/main/User';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export const MainNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerBackVisible: false,
                headerRight: HeaderRight,
                headerLeft: HeaderLeft,
                title: "Home",
                headerTransparent: true,
                headerStyle: {
                    borderBottomWidth: 5,
                    borderBottomColor: 'white',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'white'
                },
            })}
        >
            <Stack.Screen
                name="login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="feed"
                component={FeedScreen}
            />
            <Stack.Screen
                name="user"
                component={UserScreen}
            />
            <Stack.Screen
                name="editWorkout"
                component={EditWorkoutScreen}
            />
            <Stack.Screen
                name="newWorkout"
                component={NewWorkoutScreen}
                options={{ presentation: 'modal' }}
            />
        </Stack.Navigator>
    );
};
