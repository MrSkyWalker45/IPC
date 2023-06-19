import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './Screens/Home';
import Committee from './components/Committee';

export default function App() {
  const Stack = createStackNavigator();
  return (
 <SafeAreaProvider> 
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen
          name = "Login"
          component={Login}
          options={{
            headerShown:false
            }
          }
        />
        <Stack.Screen 
          name="home"
          component={Home}
          options={{
            headerShown:true,
            headerTitle:'Choose A Committee',
            headerTitleStyle:{fontSize:30,fontWeight:'bold',textAlign:'center',paddingBottom:10},
            headerTitleAlign:'center', 
          
          }}/>
          <Stack.Screen 
            name = "CSc" 
            component={Committee}
            options={{
              headerShown:true,
            }}/> 
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
