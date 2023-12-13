import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/home';
import HomeStystem from '../screens/homeSystem/homeSystem';

const stack = createNativeStackNavigator();

function Stack() {
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ headerShown: false }}>
                <stack.Screen name="Home" component={Home} />
                <stack.Screen name="HomeSystem" component={HomeStystem} />
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default Stack;