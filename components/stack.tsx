import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/home';
import HomeStystem from '../screens/system/homeSystem/homeSystem';
import SerieStystem from '../screens/system/serieSystem/serieSystem';

const stack = createNativeStackNavigator();

function Stack() {
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
                <stack.Screen name="Home" component={Home} />
                <stack.Screen name="HomeSystem" component={HomeStystem} />
                <stack.Screen name="SerieSystem" component={SerieStystem} />
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default Stack;