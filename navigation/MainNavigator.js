import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderRight from './HeaderRight';
import HeaderLeft from './HeaderLeft';

import { GlobalStyles } from '../constants/styles';



import EditWorkoutScreen from '../screens/main/EditWorkout';
import NewWorkoutScreen from '../screens/main/NewWorkout';
import FeedScreen from '../screens/main/Feed';
import UserScreen from '../screens/main/User';

const Stack = createStackNavigator();

export const MainNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerBackVisible: false,
                headerRight: HeaderRight,
                headerLeft: HeaderLeft,
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
