import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Nút "Quay lại" */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="#09509e" />
        <Text style={styles.backButtonText}>Quay lại</Text>
      </TouchableOpacity>

      {/* Settings Items */}
      <View style={styles.settingItem}>
        <Ionicons name="bicycle-outline" size={24} color="#09509e" />
        <Text style={styles.settingText}>Activity Manager</Text>
      </View>
      <View style={styles.settingItem}>
        <Ionicons name="notifications-outline" size={24} color="#09509e" />
        <Text style={styles.settingText}>Notification Setting</Text>
      </View>
      <View style={styles.settingItem}>
        <Ionicons name="person-outline" size={24} color="#09509e" />
        <Text style={styles.settingText}>Personal Data</Text>
      </View>
      <View style={styles.settingItem}>
        <Ionicons name="lock-closed-outline" size={24} color="#09509e" />
        <Text style={styles.settingText}>Privacy Policy</Text>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={32} color="#b0b0b0" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Activity')}>
          <Ionicons name="walk" size={32} color="#b0b0b0" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="calendar-outline" size={32} color="#b0b0b0" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={32} color="#09509e" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8F9FD',
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#09509e',
    marginLeft: 5,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  settingText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#09509e',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    marginBottom: 20,
  },
  navButton: {
    alignItems: 'center',
  },
});

export default SettingsScreen;
