import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProgressScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Nút "Quay lại" */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="#09509e" />
        <Text style={styles.backButtonText}>Quay lại</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Progress</Text>

      {/* Nội dung màn hình Progress */}
      <View style={styles.progressSection}>
        <Text style={styles.sectionTitle}>Daily Progress</Text>
        <View style={styles.progressItem}>
          <Text style={styles.progressText}>Breath training: 51%</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '51%' }]} />
          </View>
        </View>

        <View style={styles.progressItem}>
          <Text style={styles.progressText}>Step Goal: 45%</Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '45%' }]} />
          </View>
        </View>
        
        {/* Add more progress items as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FD',
    padding: 20,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#09509e',
    marginBottom: 20,
  },
  progressSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#09509e',
    marginBottom: 15,
  },
  progressItem: {
    marginBottom: 15,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#09509e',
    marginBottom: 5,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
});

export default ProgressScreen;
