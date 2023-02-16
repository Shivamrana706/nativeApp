import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import Home from './screens/home';
import axios from 'axios';
import MyStack from './routeNavigate/homeStack';
import Store from './redux/store.js'


export default function App() {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <MyStack />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',


    // alignItems: 'center',
    // justifyContent: 'center',
  },
});






