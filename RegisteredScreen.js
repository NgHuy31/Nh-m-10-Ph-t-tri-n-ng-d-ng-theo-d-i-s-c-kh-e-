import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function RegisteredScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/password.png')} style={styles.logo} />
      <Text style={styles.successText}>You are Successfully Registered !!!!!</Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Log in</Text>
        <Ionicons name="arrow-forward-outline" size={24} color="white" style={styles.iconRight} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 30,
  },
  logo: {
    width: 250, // Enlarged logo
    height: 250, // Enlarged logo
    marginBottom: 30,
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 40,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#09509e', // Updated button color
    paddingVertical: 15,
    paddingHorizontal: 110, // Extended button width
    borderRadius: 10,
    position: 'absolute',
    bottom: 50, // Positioned button near the bottom of the screen
  },
  loginText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10, // Spacing between text and icon
  },
  iconRight: {
    position: 'absolute',
    right: 20, // Position icon to the right
  },
});

export default RegisteredScreen;
