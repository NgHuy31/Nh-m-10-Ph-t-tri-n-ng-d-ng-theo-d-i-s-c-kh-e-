import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch, Picker, ScrollView } from 'react-native';

const AddMedicineScreen = () => {
  const [medicineName, setMedicineName] = useState('');
  const [medicineForm, setMedicineForm] = useState('Pill');
  const [dosage, setDosage] = useState(1);
  const [frequency, setFrequency] = useState('Everyday');
  const [duration, setDuration] = useState('30 days');
  const [timeOfDay, setTimeOfDay] = useState('Morning');
  const [beforeMeal, setBeforeMeal] = useState(false);
  const [afterMeal, setAfterMeal] = useState(false);
  const [reminderBeforeTime, setReminderBeforeTime] = useState(false);
  const [reminderAfterTime, setReminderAfterTime] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Medicine</Text>
      <TextInput
        style={styles.input}
        placeholder="Type name of the supplement"
        value={medicineName}
        onChangeText={setMedicineName}
      />
      
      <Text style={styles.label}>Medicine Form</Text>
      <View style={styles.medicineFormContainer}>
        {['Pill', 'Tablet', 'Sachet', 'Drops'].map((form) => (
          <TouchableOpacity
            key={form}
            style={[
              styles.medicineFormOption,
              medicineForm === form && styles.medicineFormOptionSelected,
            ]}
            onPress={() => setMedicineForm(form)}
          >
            <Text>{form}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Dosage</Text>
      <View style={styles.dosageContainer}>
        {[1, 2, 3, 4, 5, 6].map((d) => (
          <TouchableOpacity
            key={d}
            style={[
              styles.dosageOption,
              dosage === d && styles.dosageOptionSelected,
            ]}
            onPress={() => setDosage(d)}
          >
            <Text>{d}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Frequency</Text>
      <Picker
        selectedValue={frequency}
        style={styles.picker}
        onValueChange={(itemValue) => setFrequency(itemValue)}
      >
        <Picker.Item label="Everyday" value="Everyday" />
        <Picker.Item label="Every other day" value="EveryOtherDay" />
      </Picker>

      <Text style={styles.label}>Duration</Text>
      <Picker
        selectedValue={duration}
        style={styles.picker}
        onValueChange={(itemValue) => setDuration(itemValue)}
      >
        <Picker.Item label="30 days" value="30 days" />
        <Picker.Item label="60 days" value="60 days" />
      </Picker>

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

      <Text style={styles.label}>Taking with meals</Text>
      <View style={styles.mealOptionsContainer}>
        <TouchableOpacity
          style={[
            styles.mealOption,
            beforeMeal && styles.mealOptionSelected,
          ]}
          onPress={() => setBeforeMeal(!beforeMeal)}
        >
          <Text>Before meal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.mealOption,
            afterMeal && styles.mealOptionSelected,
          ]}
          onPress={() => setAfterMeal(!afterMeal)}
        >
          <Text>After meal</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Set Reminder</Text>
      <View style={styles.reminderContainer}>
        <Text>Before the scheduled time</Text>
        <Switch
          value={reminderBeforeTime}
          onValueChange={setReminderBeforeTime}
        />
      </View>
      <View style={styles.reminderContainer}>
        <Text>After exceeding the time</Text>
        <Switch
          value={reminderAfterTime}
          onValueChange={setReminderAfterTime}
        />
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Supplement</Text>
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
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  medicineFormContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  medicineFormOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 10,
  },
  medicineFormOptionSelected: {
    backgroundColor: '#e0e0e0',
  },
  dosageContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dosageOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 10,
  },
  dosageOptionSelected: {
    backgroundColor: '#e0e0e0',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  timeOfDayContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timeOfDayOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 10,
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
  mealOptionsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  mealOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 10,
  },
  mealOptionSelected: {
    backgroundColor: '#e0e0e0',
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

export default AddMedicineScreen;
