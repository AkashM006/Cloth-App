import { View, TextInput, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const me = 'akash';

const ChatInput = ({ onSubmit }) => {
  const [text, onTextChange] = useState('');

  const sendHandler = () => {
    if (text.trim().length === 0) return;
    const msgObj = {
      from: me,
      text: text,
    };
    onTextChange('');
    onSubmit(msgObj);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={onTextChange} value={text} style={{ color: 'black', }} />
      </View>
      <View>
        <TouchableOpacity onPress={sendHandler}>
          <Image source={require('../../../icons/message.png')} style={{ height: 25, width: 25 }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'row',
    paddingHorizontal: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderRadius: 100,
    marginRight: '7%',
    width: '100%',
    borderColor: '#747474',
    borderWidth: 1,
    paddingHorizontal: 10,
  }
})

export default ChatInput