import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ActivityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header với nút quay lại */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Activity</Text>
      </View>

      {/* Nút Start Activity Now */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start Activity Now</Text>
      </TouchableOpacity>

      {/* Today's Summary */}
      <Text style={styles.summaryTitle}>Today's Summary</Text>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryItem}>Walking - 30 min</Text>
        <Text style={styles.summaryItem}>Breath training - 10 min</Text>
        <Text style={styles.summaryItem}>Yoga - 20 min</Text>
      </View>

      {/* Menu dưới cùng */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon name="home" size={24} color="#000" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Activity')}
        >
          <Icon name="walk" size={24} color="#000" />
          <Text>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Progress')}
        >
          <Icon name="stats-chart" size={24} color="#000" />
          <Text>Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate('Settings')}
        >
          <Icon name="settings" size={24} color="#000" />
          <Text>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  startButton: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  summaryContainer: {
    marginBottom: 30,
  },
  summaryItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerItem: {
    alignItems: 'center',
  },
});

export default ActivityScreen;
