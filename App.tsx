import { View } from 'react-native';
import VariablesStyle from './assets/css/variablesStyle';
import Home from './screens/home/home';
import LoadingProvider from './context/loadingContext';
import ModalError from './components/modals/modalError';
import MessageProvider from './context/messageContext';
import Stack from './components/stack';

export default function App() {
  return (
    <View style={VariablesStyle.app}>
      <LoadingProvider>
        <MessageProvider>
          <Stack />
        </MessageProvider>
      </LoadingProvider>
    </View>
  );
}