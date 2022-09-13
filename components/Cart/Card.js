import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Card = ({item,}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={{height: 70,width:70,borderRadius: 15,backgroundColor: 'white',}} source={{uri: item.link}} />
      </View>
      <View style={{marginLeft: '5%',flex: 1,justifyContent: 'center',}}>
        <View>
            <Text style={{color: 'black',fontSize: 20, fontWeight: '800',}}>
            {item.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={{color: 'black',fontSize: 16,fontWeight: '600'}}>
                Value
            </Text>
            <Text style={{color: 'black',fontSize: 16,}}>{item.price}</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={{color: 'black',fontSize: 16,}}>
                Discount
            </Text>
            <Text style={{color: 'black',fontSize: 16,}}>
                -{item.discount}
            </Text>
        </View>
        <View style={styles.textContainer}>
            <View style={{flexDirection: 'row',flex: 1,justifyContent:'space-around',alignItems:'center'}}>
                <Image style={{height: 20, width: 20,}} source={{uri: 'https://s3-alpha-sig.figma.com/img/48e1/6e65/8d4feec1c1fe3cdd8f63502d6e7e3298?Expires=1664150400&Signature=WCL7l-lV3NBA9263P4xB004OiWdoI26O84UOpzbIcleZ2CU5eJKCFzIxtrIfdSgZ3IuTVuWgbB4zqMVK-vSce3OThuo882hTHtWnZenoGO0mjpmdGxVnlCuI7fkU-WH7xb-VDqSHNIDmKIEswNgsQWt-WRukkOclyArRnqT5IDIdebjAYjQF0SpSQuZElqpReiHaeANMXNG~XdHEaLAqQrRDOIgxfagklBBoPjt4-bpABIIIfZJLGiwtSLigmD7kDw0gswN~XZmV0sXxMO7BX1spZwvQgVJGB8ppLncD8r~z2RhTGNzBHrC6xvAgN11vjaaupOstXjozoc2g6OQZuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}} />
                <Text style={{color: 'black'}}>{item.count}</Text>
                <Image style={{height: 20, width: 20,}} source={{uri: 'https://s3-alpha-sig.figma.com/img/9663/307c/a3e0b780da93e8ba8c2ec5f6a8101474?Expires=1664150400&Signature=fACzRwachvfC0m-YOpW3V-ux2kfftxFP6ZVZ8Y93fzeLRO7mHysoycIGePrs8pCMSv64dUYbvaNpqkFh98PQKvkwYbY4xKSijVcwZ-iYTshf2hlUDOyLqHhBljxARVK5mzFB0TVUbpq7PKzHB8HxcEbzOkl30aKLuSo70NCp-K-o~dHo75HFsum9OpQG4V2DQfnyECyxaOwrzcYI3EKwv3OzNcRt7VTCpiI0TeUDbu~Kk0I3D8eVWRUf5H8FJDN05m4wkP-5k58uOezwo0XO3BCspvrJR-GSMpPJ9COSieNrSqYMwdQpn7H~OZuQvA3pytFkny7xDsCcKFm85k~Ajw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}} />
            </View>
            <View style={{flex: 2,flexDirection: 'row-reverse'}}>
                <Text style={{color:'black',fontSize:17}}>{(item.price - item.discount).toLocaleString('en-US',{style:'currency',currency:'USD'})}</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9D9D9',
        padding: '5%',
        marginBottom: '5%',
        borderRadius: 20,
        flexDirection: 'row',
    },
    textContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '1%'
    },
})

export default Card