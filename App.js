import { Settings, StyleSheet, Text, View,Image, Dimensions } from 'react-native';
import Login from './Screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Screens/Home';
import Committee from './components/Committee';
import SignOut from './Screens/SignOut.js';

export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }} />

          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerShown: true,
              headerTitle: 'Choose A Committee',
              headerTitleStyle: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', paddingBottom: 15,paddingTop:15,color:'black' },
              headerTitleAlign: 'center',
                    headerRight:() => (
                        <SignOut/>
                    ),
            }} />

          <Stack.Screen
            name="CSc"
            component={Committee}
            options={
              ({ route }) => ({ title: route.params.choice, headerTitleAlign: 'center', headerTitleStyle: { fontSize: 30, fontWeight: 'bold', paddingBottom: 10,headerTintColor:'#F4F4E2', } })
            }

          />
        </Stack.Navigator>

  
      </NavigationContainer>
    </SafeAreaProvider>
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
