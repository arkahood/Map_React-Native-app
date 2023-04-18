import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider, useSelector } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Result from './pages/Result';



const stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <Provider store={store} >
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name='HOME' component={Home} />
          <stack.Screen name='RESULT' component={Result} />
      </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
