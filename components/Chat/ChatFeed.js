import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import Message from './Message';
import ChatInput from './ChatInput';

const me = 'akash';

const DATA = [
    {
        id: 1,
        from: 'akash',
        text: 'sed euismod nisi porta lorem mollis aliquam ut porttitor leo',
        link: 'https://s3-alpha-sig.figma.com/img/f861/c297/04058f60cbfca1e229dec5748984cb44?Expires=1664150400&Signature=SHisjt-3V4q4QuiOKyZsLdyFxhD~NhcUGhHzpCj70rXn8-cABEGdPZ9tjrpE-JqVYAjizsflaFSDYRNFXMIB9atTBDvOAGE2xFcYH4ch-NP5-t~qiltKACiKhNfUcnL6wANwrzsXDKHgNmjqZX0F4iFiJl78iOmASYaRjmN6y5cfhP8WzZI9W2TbgSuPUOiH74zH576fI-Rggk-dj6Ag7LeFfrhoeh2sj28SOlS3aYtR-eaIpemcC6LYnMbP6d5oBuWkYawlnnyxTJBXuEczimXwemShZaIpnuEjMTTkJf6EFY2tKF5BZ4NmGYF~EPw0uMn20c0kHcoDVzaWm~MtiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
        id: 2,
        from: 'Someone',
        text: 'dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at',
        link: 'https://s3-alpha-sig.figma.com/img/f861/c297/04058f60cbfca1e229dec5748984cb44?Expires=1664150400&Signature=SHisjt-3V4q4QuiOKyZsLdyFxhD~NhcUGhHzpCj70rXn8-cABEGdPZ9tjrpE-JqVYAjizsflaFSDYRNFXMIB9atTBDvOAGE2xFcYH4ch-NP5-t~qiltKACiKhNfUcnL6wANwrzsXDKHgNmjqZX0F4iFiJl78iOmASYaRjmN6y5cfhP8WzZI9W2TbgSuPUOiH74zH576fI-Rggk-dj6Ag7LeFfrhoeh2sj28SOlS3aYtR-eaIpemcC6LYnMbP6d5oBuWkYawlnnyxTJBXuEczimXwemShZaIpnuEjMTTkJf6EFY2tKF5BZ4NmGYF~EPw0uMn20c0kHcoDVzaWm~MtiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
        id: 3,
        from: 'Someone',
        text: 'tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque',
        link: 'https://s3-alpha-sig.figma.com/img/f861/c297/04058f60cbfca1e229dec5748984cb44?Expires=1664150400&Signature=SHisjt-3V4q4QuiOKyZsLdyFxhD~NhcUGhHzpCj70rXn8-cABEGdPZ9tjrpE-JqVYAjizsflaFSDYRNFXMIB9atTBDvOAGE2xFcYH4ch-NP5-t~qiltKACiKhNfUcnL6wANwrzsXDKHgNmjqZX0F4iFiJl78iOmASYaRjmN6y5cfhP8WzZI9W2TbgSuPUOiH74zH576fI-Rggk-dj6Ag7LeFfrhoeh2sj28SOlS3aYtR-eaIpemcC6LYnMbP6d5oBuWkYawlnnyxTJBXuEczimXwemShZaIpnuEjMTTkJf6EFY2tKF5BZ4NmGYF~EPw0uMn20c0kHcoDVzaWm~MtiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
        id: 4,
        from: 'akash',
        text: 'turpis tincidunt id aliquet risus',
        link: 'https://s3-alpha-sig.figma.com/img/f861/c297/04058f60cbfca1e229dec5748984cb44?Expires=1664150400&Signature=SHisjt-3V4q4QuiOKyZsLdyFxhD~NhcUGhHzpCj70rXn8-cABEGdPZ9tjrpE-JqVYAjizsflaFSDYRNFXMIB9atTBDvOAGE2xFcYH4ch-NP5-t~qiltKACiKhNfUcnL6wANwrzsXDKHgNmjqZX0F4iFiJl78iOmASYaRjmN6y5cfhP8WzZI9W2TbgSuPUOiH74zH576fI-Rggk-dj6Ag7LeFfrhoeh2sj28SOlS3aYtR-eaIpemcC6LYnMbP6d5oBuWkYawlnnyxTJBXuEczimXwemShZaIpnuEjMTTkJf6EFY2tKF5BZ4NmGYF~EPw0uMn20c0kHcoDVzaWm~MtiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
        id: 5,
        from: 'akash',
        text: 'sed euismod nisi porta lorem mollis aliquam ut porttitor leo',
        link: 'https://s3-alpha-sig.figma.com/img/f861/c297/04058f60cbfca1e229dec5748984cb44?Expires=1664150400&Signature=SHisjt-3V4q4QuiOKyZsLdyFxhD~NhcUGhHzpCj70rXn8-cABEGdPZ9tjrpE-JqVYAjizsflaFSDYRNFXMIB9atTBDvOAGE2xFcYH4ch-NP5-t~qiltKACiKhNfUcnL6wANwrzsXDKHgNmjqZX0F4iFiJl78iOmASYaRjmN6y5cfhP8WzZI9W2TbgSuPUOiH74zH576fI-Rggk-dj6Ag7LeFfrhoeh2sj28SOlS3aYtR-eaIpemcC6LYnMbP6d5oBuWkYawlnnyxTJBXuEczimXwemShZaIpnuEjMTTkJf6EFY2tKF5BZ4NmGYF~EPw0uMn20c0kHcoDVzaWm~MtiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
        id: 6,
        from: 'Someone',
        text: 'dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at',
        link: 'https://s3-alpha-sig.figma.com/img/f861/c297/04058f60cbfca1e229dec5748984cb44?Expires=1664150400&Signature=SHisjt-3V4q4QuiOKyZsLdyFxhD~NhcUGhHzpCj70rXn8-cABEGdPZ9tjrpE-JqVYAjizsflaFSDYRNFXMIB9atTBDvOAGE2xFcYH4ch-NP5-t~qiltKACiKhNfUcnL6wANwrzsXDKHgNmjqZX0F4iFiJl78iOmASYaRjmN6y5cfhP8WzZI9W2TbgSuPUOiH74zH576fI-Rggk-dj6Ag7LeFfrhoeh2sj28SOlS3aYtR-eaIpemcC6LYnMbP6d5oBuWkYawlnnyxTJBXuEczimXwemShZaIpnuEjMTTkJf6EFY2tKF5BZ4NmGYF~EPw0uMn20c0kHcoDVzaWm~MtiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
        id: 7,
        from: 'Someone',
        text: 'tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque',
        link: 'https://s3-alpha-sig.figma.com/img/f861/c297/04058f60cbfca1e229dec5748984cb44?Expires=1664150400&Signature=SHisjt-3V4q4QuiOKyZsLdyFxhD~NhcUGhHzpCj70rXn8-cABEGdPZ9tjrpE-JqVYAjizsflaFSDYRNFXMIB9atTBDvOAGE2xFcYH4ch-NP5-t~qiltKACiKhNfUcnL6wANwrzsXDKHgNmjqZX0F4iFiJl78iOmASYaRjmN6y5cfhP8WzZI9W2TbgSuPUOiH74zH576fI-Rggk-dj6Ag7LeFfrhoeh2sj28SOlS3aYtR-eaIpemcC6LYnMbP6d5oBuWkYawlnnyxTJBXuEczimXwemShZaIpnuEjMTTkJf6EFY2tKF5BZ4NmGYF~EPw0uMn20c0kHcoDVzaWm~MtiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
        id: 8,
        from: 'akash',
        text: 'turpis tincidunt id aliquet risus',
        link: 'https://s3-alpha-sig.figma.com/img/f861/c297/04058f60cbfca1e229dec5748984cb44?Expires=1664150400&Signature=SHisjt-3V4q4QuiOKyZsLdyFxhD~NhcUGhHzpCj70rXn8-cABEGdPZ9tjrpE-JqVYAjizsflaFSDYRNFXMIB9atTBDvOAGE2xFcYH4ch-NP5-t~qiltKACiKhNfUcnL6wANwrzsXDKHgNmjqZX0F4iFiJl78iOmASYaRjmN6y5cfhP8WzZI9W2TbgSuPUOiH74zH576fI-Rggk-dj6Ag7LeFfrhoeh2sj28SOlS3aYtR-eaIpemcC6LYnMbP6d5oBuWkYawlnnyxTJBXuEczimXwemShZaIpnuEjMTTkJf6EFY2tKF5BZ4NmGYF~EPw0uMn20c0kHcoDVzaWm~MtiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
];

const ChatFeed = () => {

    const [chat, setChat] = useState(DATA);

    const addChat = (msgObj) => {
        msgObj.id = chat[chat.length-1].id + 1;
        setChat(value => [...value,msgObj]);
    }

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
          <FlatList
            data={chat}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Message msg={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexDirection:'column-reverse'}}
            inverted={true}
           />
      </View>
      <View style={styles.inputContainer}>
        <ChatInput onSubmit={addChat} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    chatContainer: {
        flex: 7,
        padding: '5%',
    },
    inputContainer: {
        flex: 1,
    }
})

export default ChatFeed;