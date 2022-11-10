import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Card from './Card'
import { useSelector } from 'react-redux'

// const DATA = [
//     {
//         id: 1,
//         name: 'blue machine',
//         price: 199,
//         discount: 50,
//         count: 2,
//         link: 'https://s3-alpha-sig.figma.com/img/62ba/510c/c085b019a2976b6f9815ae0c9c1d16e5?Expires=1664150400&Signature=dgUwTdwZV7BrtEqrePgITdpAKlDlIYw2a-Y6KfuhzSXVXqoLcSgwhbDy1tn2t5xtiJ9QGFATAwfKF4qbyTGgmLnBH6zQ1MyPFEGKOxgqPoZtn6tUCXzL1tyiE-d6YOnQLN3bWs-jypbCgpdYQc04dPb0qldApuygSFtJNZniuD3-yZrnuQ~CteYkP5zcEm444S4u9y1fSrBQ6xBEZIe7z1qij705fQ9f3w43sZIMN0Kk-PhftKP~pOC1q2VE1htExNH4y85CNB0MnK6PQ3v7dkQ2maGw6wGmrR-R3dSf3CzmXMrczkvfy4taedR87ByR2szwSiIavjAQh0rDcePn9Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
//     },
//     {
//         id: 2,
//         name: 'Calca Jogger',
//         price: 150,
//         discount: 30,
//         count: 1,
//         link: 'https://s3-alpha-sig.figma.com/img/83d7/fd0a/c316364a545df63b2f51124d1c90ecef?Expires=1664150400&Signature=ap5SBgg9LSjzkwWeClEvaSPhnju9apBEsCzNVVisSb9hqqQCyZ3yZiBAwAGIVTXgwWINoQHiq0DcghMMkxAnrnw9a62RVfSfi5fbmxkNqwYPPIPdDMNY15QyDeAQw4-Y~gIRtUVsEWNgrkmuksZCNv1KzLSQ6rYXSnDUua2GoGw2aFakVmL7D3rGrEkt457KwUkUkGWGi7FqpCgUazhydjsFVguCEYEO-eWC2Yx6GBb3XDhyGgYcAUZX8DHD32GC1VoQZlTyAnfm0BmAHyIYELbuxlRzfVfSuHh0rcXzUY3juk5xATdV-Dr~Je6fYr7AIb-zTVgB8J9kWfgx-ildxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
//     },
//     {
//         id: 3,
//         name: 'Jeans Jacket',
//         price: 280,
//         discount: 80,
//         count: 3,
//         link: 'https://s3-alpha-sig.figma.com/img/c9ad/7df8/f90b325c32de383b716a0fb86e2801aa?Expires=1664150400&Signature=K7YddIK4bybPUzcw5Izrq7KNqPqNrns7udC2MepqcEsiuLofrADRqFXoqIGjZr~twY3Ftb64T1dE4KWdIumgxUHvG8ZYixZJvDdHOwZLChSxzcoo1T8y--B2N56Y5GUVA0tIIt2fxtKdQeAiE~DsLydDZPjluWVyZaW5FUeMkkx8uIJ8ZH-vamK17h7XE0AjdS70JcCrnY-6esJGB-X9LnRW7K1W-kkhcsY5cJgSAcpqH92P2UkcJY9v0VTn1tPHO-TSVEcCHxwoY8iAK-7yW9U3Y4yYqg2qOUycLarWsFDUa7r7Ud4Xuc7KiTLrTjDIbRFE~C9FL5EMNOQS8bnXbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
//     },
// ]

const CartFeed = () => {
  const items = useSelector(state => state.cart.items)

  return (
    <View style={styles.container}>
      {items.length > 0 ? <FlatList
        data={items}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => <Card item={item} />}
        inverted
        contentContainerStyle={{ flexDirection: 'column-reverse' }}
        showsVerticalScrollIndicator={false}
      /> : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text style={{ color: 'black' }}>You have no items in your basket</Text>
      </View>}
      <View style={{ padding: '3%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
        <Text style={{ color: 'black', fontWeight: '800', fontSize: 19 }}>
          Total:{' '}
          {(items.reduce((total, item) => total + ((item.price * item.count) - item.discount), 0)).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </Text>
        <TouchableOpacity style={{ borderRadius: 20, backgroundColor: '#E2E6E6', padding: '2%' }}>
          <Image style={{ height: 25, width: 25 }} source={require('../../../icons/card.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    flex: 7
  }
})

export default CartFeed