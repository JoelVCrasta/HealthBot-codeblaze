import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import Chat from './src/screens/Chat'
import Alarm from './src/screens/Alarm'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'

const Tabs = createBottomTabNavigator()

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
            tabBarStyle: {
              backgroundColor: 'black',
            },
          }}>
          <Tabs.Screen
            name="Chat"
            component={Chat}
            options={{
              tabBarIcon: ({color}) => (
                <Feather name="message-square" color={color} size={24} />
              ),
            }}
          />
          <Tabs.Screen
            name="Alarm"
            component={Alarm}
            options={{
              tabBarIcon: ({color}) => (
                <Feather name="bell" color={color} size={24} />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
