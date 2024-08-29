import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleLogin = () => {
        // Điều hướng tới màn hình HomeScreen
        navigation.navigate('Home');
    };

    const handleForgotPassword = () => {
        navigation.navigate('PasswordReminder1');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome back</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>E-mail</Text>
                <View style={styles.inputField}>
                    <Ionicons name="mail-outline" size={24} color="#8e8e8e" />
                    <TextInput
                        placeholder="Enter your e-mail here"
                        style={styles.textInput}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputField}>
                    <Ionicons name="lock-closed-outline" size={24} color="#8e8e8e" />
                    <TextInput
                        placeholder="Place the password here"
                        style={styles.textInput}
                        secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Ionicons name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} size={24} color="#8e8e8e" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Log in</Text>
                    <Ionicons name="arrow-forward-outline" size={28} color="white" style={styles.iconRight} />
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
            </View>

            <TouchableOpacity style={styles.signUpContainer} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>Don't have an account yet? </Text>
                <Text style={[styles.signUpText, styles.signUpLink]}>Sign up</Text>
            </TouchableOpacity>
        </View>
    );
};

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
    forgotPasswordContainer: {
        alignItems: 'center',
        marginVertical: 15,
    },
    forgotPasswordText: {
        color: '#3498db',
    },
    buttonContainer: {
        marginTop: 40,
        flex: 1,
        justifyContent: 'center',
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#09509e',
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    loginButtonText: {
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
        marginVertical: 15,
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
        marginTop: 20,
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
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    signUpText: {
        color: '#8e8e8e',
    },
    signUpLink: {
        fontWeight: 'bold',
        color: '#09509e',
    },
});

export default LoginScreen;
