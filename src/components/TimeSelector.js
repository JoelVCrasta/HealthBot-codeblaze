import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const TimeSelector = ({ onTimeSelected }) => {
  const [time, setTime] = useState(new Date())
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentTime = selectedDate || time
    setShow(false)
    setTime(currentTime)
    onTimeSelected(currentTime)
  }

  const showMode = () => {
    setShow(true)
  }

  return (
    <View>
      <TouchableOpacity onPress={showMode}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 10,
            padding: 10,
            backgroundColor: '#2296f3'
          }}>
          Set Time
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={time}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  )
}

export default TimeSelector
