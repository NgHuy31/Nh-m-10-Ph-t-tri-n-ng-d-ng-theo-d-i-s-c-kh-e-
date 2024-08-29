import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function SignUpScreen() {
  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!fullName || !email || !password) {
      Alert.alert('Validation Error', 'Please fill all fields.');
      return false;
    }
    if (!passwordRegex.test(password)) {
      Alert.alert('Validation Error', 'Password must be at least 8 characters long, include both uppercase and lowercase letters, and contain at least one number.');
      return false;
    }
    if (!isChecked) {
      Alert.alert('Validation Error', 'You must accept the Privacy Policy and Term of Use.');
      return false;
    }
    return true;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      // Proceed with sign up
      navigation.navigate('Registered');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <View style={styles.inputField}>
          <Ionicons name="person-outline" size={20} color="#8e8e8e" />
          <TextInput
            placeholder="Enter your name"
            style={styles.textInput}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <View style={styles.inputField}>
          <Ionicons name="mail-outline" size={20} color="#8e8e8e" />
          <TextInput
            placeholder="Enter your e-mail here"
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputField}>
          <Ionicons name="lock-closed-outline" size={20} color="#8e8e8e" />
          <TextInput
            placeholder="Place the password here"
            secureTextEntry={!isPasswordVisible}
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Ionicons name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} size={20} color="#8e8e8e" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.requirements}>
        <View style={styles.requirement}>
          <Ionicons name="close-circle" size={20} color="#FF0000" />
          <Text style={styles.requirementText}>At least 8 characters</Text>
        </View>
        <View style={styles.requirement}>
          <Ionicons name="close-circle" size={20} color="#FF0000" />
          <Text style={styles.requirementText}>Both uppercase and lowercase characters</Text>
        </View>
        <View style={styles.requirement}>
          <Ionicons name="close-circle" size={20} color="#FF0000" />
          <Text style={styles.requirementText}>At least one number or symbol</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setIsChecked(!isChecked)}
      >
        <Ionicons
          name={isChecked ? "checkbox-outline" : "square-outline"}
          size={24}
          color="#003366"
        />
        <Text style={styles.checkboxText}>
          By continuing you accept our Privacy Policy and Term of Use
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpText}>Sign Up</Text>
        <Ionicons name="arrow-forward-outline" size={24} color="white" style={styles.iconRight} />
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Ionicons name="logo-google" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
          <Ionicons name="logo-facebook" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginContainer} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <Text style={[styles.loginText, styles.loginButton]}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#8e8e8e',
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8e8e8e',
    borderRadius: 8,
    padding: 10,
    backgroundColor: 'white',
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    color: '#333',
  },
  requirements: {
    marginBottom: 20,
  },
  requirement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  requirementText: {
    marginLeft: 10,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 10,
    color: '#333',
  },
  signUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#09509e',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  signUpText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  iconRight: {
    position: 'absolute',
    right: 20,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#8e8e8e',
    marginHorizontal: 10,
  },
  orText: {
    fontWeight: 'bold',
    color: '#8e8e8e',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  loginText: {
    color: '#8e8e8e',
  },
  loginButton: {
    fontWeight: 'bold',
    color: '#003366',
  },
});

export default SignUpScreen;
