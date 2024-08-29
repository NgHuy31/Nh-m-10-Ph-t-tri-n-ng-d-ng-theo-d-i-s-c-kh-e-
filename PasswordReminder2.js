import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PasswordReminder2 = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleResetPassword = () => {
        // Điều hướng đến màn hình Registered
        navigation.navigate('Registered');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter a new password</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputWrapper}>
                    <Ionicons name="lock-closed" size={24} color="#8e8e8e" style={styles.lockIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Place new password here"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry={!passwordVisible}
                    />
                    <TouchableOpacity 
                        style={styles.eyeIcon}
                        onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                        <Ionicons 
                            name={passwordVisible ? "eye-off" : "eye"} 
                            size={24} 
                            color="#8e8e8e" 
                        />
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
            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Confirm password</Text>
                <Ionicons name="arrow-forward" size={24} color="white" style={styles.arrowIcon} />
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    inputWrapper: {
        position: 'relative',
    },
    input: {
        width: '100%',
        padding: 15,
        paddingLeft: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        fontSize: 16,
    },
    lockIcon: {
        position: 'absolute',
        left: 15,
        top: '50%',
        transform: [{ translateY: -12 }],
    },
    eyeIcon: {
        position: 'absolute',
        right: 15,
        top: '50%',
        transform: [{ translateY: -12 }],
    },
    requirements: {
        width: '100%',
        marginBottom: 150,
    },
    requirement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    requirementText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
    },
    button: {
        backgroundColor: '#09509e',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    arrowIcon: {
        marginLeft: 10,
    },
});

export default PasswordReminder2;
