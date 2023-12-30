import React from 'react'
import {View} from 'react-native'
import AlarmItem from './AlarmItem'

const AlarmUnit = ({alarms}) => {
  return (
    <View>
      {alarms.map((alarm, index) => (
        <AlarmItem key={index} alarm={alarm} />
      ))}
    </View>
  )
}

export default AlarmUnit
