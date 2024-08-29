import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Onboarding3({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.skipButton} 
        onPress={() => navigation.replace('SignUp')}
      >
        <Text style={styles.skipText}>Skip Intro</Text>
      </TouchableOpacity>
      <Image source={require('./assets/yoga.png')} style={styles.logo} />
      <Text style={styles.title}>Exercise more & Breathe better</Text>
      <Text style={styles.subtitle}>Learn, measure, set daily goals.</Text>
      <TouchableOpacity 
        style={styles.iconButton} 
        onPress={() => navigation.navigate('SignUp')}
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
    top: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 5,
  },
  skipText: {
    color: '#003366',
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

export default Onboarding3;
