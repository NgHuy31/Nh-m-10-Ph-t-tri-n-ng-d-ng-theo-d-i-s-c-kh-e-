import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

const PasswordReminder1 = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleConfirmEmail = () => {
        // Xử lý gửi mã xác minh, sau đó chuyển sang PasswordReminder2
        navigation.navigate('PasswordReminder2');
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Enter your e-mail</Text>
                <Text style={styles.instruction}>
                    You will receive a link to confirm the password change to the e-mail address provided
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Icon name="mail-outline" size={20} color="#8e8e8e" style={styles.icon} />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleConfirmEmail}>
                <Text style={styles.buttonText}>Confirm e-mail</Text>
                <Icon name="arrow-forward" size={20} color="white" style={styles.buttonIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    instruction: {
        fontSize: 16,
        color: '#8e8e8e',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
        position: 'relative',
    },
    input: {
        width: '100%',
        padding: 15,
        paddingLeft: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: 15,
    },
    button: {
        backgroundColor: '#09509e',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    buttonIcon: {
        marginLeft: 10,
    },
});

export default PasswordReminder1;
