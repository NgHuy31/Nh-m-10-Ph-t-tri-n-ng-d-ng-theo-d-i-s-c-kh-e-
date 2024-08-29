import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';
import Onboarding3 from './Onboarding3';
import SignUpScreen from './SignUpScreen';
import RegisteredScreen from './RegisteredScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ActivityScreen from './ActivityScreen'; 
import PasswordReminder1 from './PasswordReminder1';
import PasswordReminder2 from './PasswordReminder2';
import AddMedicine from './AddMedicine'; 
import AddActivity from './AddActivity'; 
import SettingsScreen from './SettingScreen';
import ProgressScreen from './ProgressScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Registered" component={RegisteredScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordReminder1" component={PasswordReminder1} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordReminder2" component={PasswordReminder2} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Activity" component={ActivityScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddMedicine" component={AddMedicine} options={{ title: 'Add Medicine' }} /> 
        <Stack.Screen name="AddActivity" component={AddActivity} options={{ title: 'Add Activity' }} /> 
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Progress" component={ProgressScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
