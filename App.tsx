import { Image, View } from 'react-native';
import VariablesStyle from './assets/css/variablesStyle';
import Home from './screens/home/home';
import { useEffect, useState } from 'react';
import LoadingProvider, { LoadingContext } from './context/loadingContext';

export default function App() {
  return (
    <View style={VariablesStyle.app}>
      <LoadingProvider>
        <Home />
      </LoadingProvider>
    </View>
  );
}