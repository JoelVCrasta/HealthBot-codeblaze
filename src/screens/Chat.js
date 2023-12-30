import React, {useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import axios from 'axios'

const Chat = () => {
  const [data, setData] = useState([])
  const [textInput, setTextInput] = useState('')
  const apiKey = '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'
  const apiUrl =
    'https://api.openai.com/v1/engines/text-davinci-002/completions'

  const handleSend = async () => {
    const prompt = textInput
    const response = await axios.post(
      apiUrl,
      {
        prompt: prompt,
        max_tokens: 128,
        temperature: 0.1,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      },
    )
    const text = response.data.choices[0].text
    setData([
      ...data,
      {type: 'user', text: textInput},
      {
        type: 'bot',
        text: text,
      },
    ])
    setTextInput('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>Health Chatbot</Text>
      </View>
      <View style={styles.chatArea}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.chatQA}>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: item.type === 'user' ? 'blue' : 'red'}}>{item.type === 'user' ? 'You' : 'Bot' }</Text>
              <Text style={styles.chatA}>{item.text}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.chatBox}>
        <TextInput
          style={styles.chatInput}
          placeholder="Ask your question here..."
          multiline={true}
          autoGrow={true}
          onChangeText={text => setTextInput(text)}
          value={textInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Feather name="corner-up-right" size={25} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#080705'
  },
  chatInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    fontSize: 18,
    margin: 10,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
    color: 'white',
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
  chatArea: {
    flex: 1,
    backgroundColor: '#0d1321',
    paddingTop: 15,
  },
  sendButton: {
    paddingRight: 5,
  },
  chatQA: {
    flexDirection: 'column',
    padding: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  chatA: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    paddingLeft: 15,
  },
})

export default Chat
