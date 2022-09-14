import { View, Text } from 'react-native'
import React from 'react'
import StackHeader from '../components/StackHeader'
import ChatFeed from '../components/Chat/ChatFeed'

const ChatScreen = () => {
  return (
    <View style={{height: '100%',backgroundColor: 'white'}}>
      <StackHeader title='Chat' />
      <ChatFeed />
    </View>
  )
}

export default ChatScreen