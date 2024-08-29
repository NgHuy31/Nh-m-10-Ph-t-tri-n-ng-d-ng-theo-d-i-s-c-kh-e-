import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/brand logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to DIUHealth</Text>
      <Text style={styles.subtitle}>Just take a look and take action!</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Onboarding1')}
      >
        <Text style={styles.buttonText}>Let's Start</Text>
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
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#003366', // Màu xanh đậm
    paddingVertical: 15,
    paddingHorizontal: 60, // Tăng giá trị để nút dài hơn
    borderRadius: 5,
    position: 'absolute',
    bottom: 50, // Khoảng cách từ dưới lên
    alignItems: 'center',
    width: '80%', // Chiều rộng nút
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
