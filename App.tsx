import { View } from 'react-native';
import VariablesStyle from './assets/css/variablesStyle';
import Home from './screens/home/home';

export default function App() {
  return (
    <View style={VariablesStyle.app}>
      <Home />
    </View>
  );
}