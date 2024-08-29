import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddActivity = () => {
  const [selectedActivity, setSelectedActivity] = useState('Walking');
  const [timeOfDay, setTimeOfDay] = useState('Morning');
  const [activityDuration, setActivityDuration] = useState({ hours: 0, minutes: 0 });
  const [reminderBefore, setReminderBefore] = useState(false);
  const [reminderAfter, setReminderAfter] = useState(false);

  const activities = [
    'Running', 'Walking', 'Fitness', 'Yoga',
    'Running', 'Rollers', 'Breathing'
  ];

  const renderActivityOptions = () => {
    return activities.map((activity) => (
      <TouchableOpacity
        key={activity}
        style={[
          styles.activityOption,
          selectedActivity === activity && styles.activityOptionSelected,
        ]}
        onPress={() => setSelectedActivity(activity)}
      >
        <Text>{activity}</Text>
      </TouchableOpacity>
    ));
  };

  const renderTimePicker = (type) => {
    const values = Array.from({ length: type === 'hours' ? 24 : 60 }, (_, i) => i);
    return (
      <Picker
        selectedValue={activityDuration[type]}
        style={styles.picker}
        onValueChange={(itemValue) => setActivityDuration({ ...activityDuration, [type]: itemValue })}
      >
        {values.map((value) => (
          <Picker.Item key={value} label={`${value < 10 ? '0' : ''}${value}`} value={value} />
        ))}
      </Picker>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Activity</Text>

      <Text style={styles.label}>Choose the type of activity</Text>
      <View style={styles.activityContainer}>
        {renderActivityOptions()}
      </View>

      <Text style={styles.label}>Time of day</Text>
      <View style={styles.timeOfDayContainer}>
        {['Morning', 'Afternoon', 'Evening', 'Night'].map((time) => (
          <TouchableOpacity
            key={time}
            style={[
              styles.timeOfDayOption,
              timeOfDay === time && styles.timeOfDayOptionSelected,
            ]}
            onPress={() => setTimeOfDay(time)}
          >
            <Text>{time}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.customTimeButton}>
        <Text>Add custom time</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Activity duration (hours/minutes)</Text>
      <View style={styles.durationContainer}>
        {renderTimePicker('hours')}
        <Text style={styles.colon}>:</Text>
        {renderTimePicker('minutes')}
      </View>

      <Text style={styles.label}>Set Reminder</Text>
      <View style={styles.reminderContainer}>
        <Text>Before the scheduled time</Text>
        <Switch
          value={reminderBefore}
          onValueChange={setReminderBefore}
        />
      </View>
      <View style={styles.reminderContainer}>
        <Text>After exceeding the time</Text>
        <Switch
          value={reminderAfter}
          onValueChange={setReminderAfter}
        />
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Activity</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  activityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  activityOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    marginBottom: 10,
  },
  activityOptionSelected: {
    backgroundColor: '#e0e0e0',
  },
  timeOfDayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timeOfDayOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '23%',
    alignItems: 'center',
  },
  timeOfDayOptionSelected: {
    backgroundColor: '#e0e0e0',
  },
  customTimeButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  durationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  picker: {
    width: 80,
    height: 50,
  },
  colon: {
    fontSize: 30,
    marginHorizontal: 10,
  },
  reminderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButton: {
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AddActivity;
