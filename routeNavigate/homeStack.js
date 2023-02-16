import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
import Detail from '../screens/detail';
import Header from '../components/header';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerTitle: () => <Header /> }}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;