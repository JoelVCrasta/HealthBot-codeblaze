import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const AlarmItem = ({alarm}) => {
    const date = new Date(alarm.selectedTime)
    const hours = date.getHours()
    const minutes = date.getMinutes()

  return (
    <View style={styles.container}>
      <Text style={styles.alarmText}>Med Name: {alarm.medName}</Text>
      <Text style={styles.alarmText}>Quantity: {alarm.quantity}</Text>
      <Text style={styles.alarmText}>Time: {hours}:{minutes}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2296f3',
      width: 'auto',
      height: 75,
      marginRight: 15,
      marginLeft: 15,
      marginTop: 15,
      borderRadius: 15,
      paddingLeft: 30,
      paddingTop: 6,
    },
    alarmText: {
      fontSize: 15,
      color: 'white',
      fontWeight: 'bold',
    }
  })

  export default AlarmItem