import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('./assets/brand logo small.png')} style={styles.brandLogo} />
          <Text style={styles.headerText}>Hi Aftab!</Text>
        </View>
        <Ionicons name="notifications-outline" size={30} color="#09509e" style={styles.notificationIcon} />
      </View>

      {/* To-do List Header */}
      <View style={styles.toDoHeader}>
        <Text style={styles.todoTitle}>To-do list</Text>
        <TouchableOpacity style={styles.addTaskButton} onPress={() => setModalVisible(true)}>
          <Ionicons name="add-outline" size={24} color="#09509e" />
          <Text style={styles.addTaskText}>Add task</Text>
        </TouchableOpacity>
      </View>

      {/* To-do List Items */}
      <View style={styles.todoList}>
        {/* Task 1: Breath Training */}
        <View style={styles.task}>
          <Ionicons name="bicycle-outline" size={24} color="#09509e" />
          <View style={styles.taskDetails}>
            <Text style={styles.taskText}>Breath training</Text>
            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue exercise</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.taskProgress}>51%</Text>
        </View>

        {/* Task 2: Omega 3 */}
        <View style={styles.task}>
          <Ionicons name="medkit-outline" size={24} color="#09509e" />
          <View style={styles.taskDetails}>
            <Text style={styles.taskText}>Omega 3</Text>
            <Text style={styles.subTaskText}>1 pill after meal</Text>
          </View>
          <Ionicons name="checkmark-circle-outline" size={24} color="#4caf50" />
        </View>

        {/* Task 3: Vitamin D */}
        <View style={styles.task}>
          <Ionicons name="medkit-outline" size={24} color="#09509e" />
          <View style={styles.taskDetails}>
            <Text style={styles.taskText}>Vitamin D</Text>
            <Text style={styles.subTaskText}>1 sachet before meal</Text>
          </View>
          <Ionicons name="ellipse-outline" size={24} color="#b0b0b0" />
        </View>

        {/* Task 4: Step Goal */}
        <View style={styles.task}>
          <Ionicons name="walk-outline" size={24} color="#09509e" />
          <View style={styles.taskDetails}>
            <Text style={styles.taskText}>Step Goal</Text>
            <Text style={styles.subTaskText}>4,456 / 10,000</Text>
            <View style={styles.progressContainer}>
              <View style={[styles.progressBar, { width: '45%' }]} />
            </View>
          </View>
        </View>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={32} color="#09509e" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Activity')}>
          <Ionicons name="walk" size={32} color="#09509e" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Progress')}> {/* Điều hướng đến ProgressScreen */}
          <Ionicons name="calendar-outline" size={32} color="#09509e" /> {/* Cập nhật màu icon để nhất quán */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={32} color="#b0b0b0" />
        </TouchableOpacity>
      </View>

      {/* Modal for Adding Task */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose task category</Text>
            <Pressable style={styles.modalButton} onPress={() => navigation.navigate('AddActivity')}>
              <Text style={styles.modalButtonText}>Activity</Text>
            </Pressable>
            <Pressable style={styles.modalButton} onPress={() => navigation.navigate('AddMedicine')}>
              <Text style={styles.modalButtonText}>Medicine</Text>
            </Pressable>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Ionicons name="close-outline" size={24} color="#09509e" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8F9FD',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  headerLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  brandLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#09509e',
    marginTop: 5, // Đặt logo trên text
  },
  notificationIcon: {
    marginLeft: 'auto', 
    marginRight: 0, 
  },
  toDoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#09509e',
  },
  addTaskButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addTaskText: {
    color: '#09509e',
    marginLeft: 5,
  },
  todoList: {
    marginBottom: 20,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  taskDetails: {
    flex: 1,
    marginLeft: 10,
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#09509e',
  },
  subTaskText: {
    fontSize: 14,
    color: '#b0b0b0',
  },
  continueButton: {
    backgroundColor: '#EEF6FF',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  continueButtonText: {
    fontSize: 14,
    color: '#09509e',
  },
  taskProgress: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#09509e',
  },
  progressContainer: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
    marginTop: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    marginBottom: 20, // Di chuyển thanh navigation xuống
  },
  navButton: {
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#09509e',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#EEF6FF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#09509e',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default HomeScreen;
