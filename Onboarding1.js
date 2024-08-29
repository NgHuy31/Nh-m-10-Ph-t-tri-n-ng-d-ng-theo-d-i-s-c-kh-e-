import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Onboarding1({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.skipButton} 
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.skipText}>Skip Intro</Text>
      </TouchableOpacity>
      <Image source={require('./assets/calm.png')} style={styles.logo} />
      <Text style={styles.title}>Keep calm and stay in control</Text>
      <Text style={styles.subtitle}>You can check your health with just one look.</Text>
      <TouchableOpacity 
        style={styles.iconButton} 
        onPress={() => navigation.navigate('Onboarding2')}
      >
        <Ionicons name="arrow-forward" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  skipText: {
    color: '#003366',
    fontSize: 14,
    fontWeight: 'bold',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  iconButton: {
    backgroundColor: '#003366',
    width: 60,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
  },
});

export default Onboarding1;
