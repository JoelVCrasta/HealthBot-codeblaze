import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import ReminderMake from '../components/ReminderMake'
import AlarmUnit from '../components/AlarmUnit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Alarm = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [alarms, setAlarms] = useState([])

  const localDelete = () => {
    AsyncStorage.clear()
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>Meds Reminder</Text>
      </View>
      <View style={styles.reminderArea}>
        <ReminderMake
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setAlarms={setAlarms}
        />
        <ScrollView>
          <AlarmUnit alarms={alarms} />
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.addIcon}
        onPress={() => setModalVisible(true)}>
        <Feather name="plus-circle" size={50} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addIcon2} onPress={localDelete}>
        <Feather name="trash" size={50} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBox: {
    alignItems: 'flex-end',
    backgroundColor: '#080705',
  },
  headerText: {
    marginTop: 12,
    marginBottom: 12,
    marginRight: 15,
    fontSize: 20,
    color: 'white',
  },
  reminderArea: {
    flex: 1,
    backgroundColor: '#0d1321',
  },
  addIcon: {
    position: 'absolute',
    bottom: 0,
    left: 100,
    alignItems: 'center',
    marginBottom: 15,
  },
  addIcon2: {
    position: 'absolute',
    bottom: 0,
    right: 100,
    alignItems: 'center',
    marginBottom: 15,
  },
})

export default Alarm
