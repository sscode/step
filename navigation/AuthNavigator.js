
import LoginScreen from '../screens/auth/LoginScreen'

import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import VerifyScreen from '../screens/auth/VerifyScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {

    return (
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen
                name="login"
                options={{ headerShown: false }}
                component={LoginScreen}
            />
            <Stack.Screen
                name="register"
                options={{ headerShown: false }}
                component={RegisterScreen}
            />
            <Stack.Screen
                name="forgotPassword"
                options={{ headerShown: false }}
                component={ForgotPasswordScreen}
            />
            <Stack.Screen
                name="verify"
                options={{ headerShown: false }}
                component={VerifyScreen}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigator;