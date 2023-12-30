import React, {useState, useEffect} from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Modal,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native'
import TimeSelector from './TimeSelector'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ReminderMake = ({modalVisible, setModalVisible, setAlarms}) => {
  const [medName, setMedName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [selectedTime, setSelectedTime] = useState(new Date())

  const handleTimeSelected = time => {
    setSelectedTime(time)
  }

  // ----------------------------------------------------

  const handleSubmit = async () => {
    try {
      // Create a new alarm object
      const newAlarm = {medName, quantity, selectedTime}

      // Fetch existing alarms from AsyncStorage
      const storedAlarms = await AsyncStorage.getItem('@alarms')
      const alarms = storedAlarms ? JSON.parse(storedAlarms) : []

      // Add the new alarm to the array
      alarms.push(newAlarm)

      // Store the updated alarms array in AsyncStorage
      await AsyncStorage.setItem('@alarms', JSON.stringify(alarms))

      console.log('Alarm stored successfully')
      setModalVisible(false)

      // Update the alarms state in the parent component
      setAlarms(alarms)
    } catch (error) {
      console.error(error)
    }
  }

  /* const handleSubmit = () => {
  setModalVisible(false)
} */

  // ----------------------------------------------------

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalView}>
        <TextInput
          value={medName}
          onChangeText={setMedName}
          placeholder="Medication Name"
          style={styles.medInfo}
        />
        <TextInput
          value={quantity}
          onChangeText={setQuantity}
          placeholder="Quantity"
          style={styles.medInfo}
        />
        <TimeSelector onTimeSelected={handleTimeSelected} />
        <View style={styles.options}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.optionsText}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.optionsText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalView: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#0d1315',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  medInfo: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    marginBottom: 10,
    width: '100%',
    height: 50,
    color: 'white',
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  options: {
    flexDirection: 'row',
  },
  optionsText: {
    color: 'white',
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#2296f3',
    marginTop: 10,
    marginLeft: 10
  }
})

export default ReminderMake
