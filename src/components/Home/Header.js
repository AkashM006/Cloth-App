import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HamBurger from '../../icons/HamBurger.svg'
import Search from '../../icons/search.svg'
import ShoppingBag from '../../icons/ShoppingBag.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Header = ({style,stackNavigation}) => {
    const navigation = useNavigation();
  return (
    <View style={[styles.container,style]}>
        <View>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.openDrawer()}>
                    <HamBurger height={25} width={25} />
                </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row',}}>
            <View>
                <TouchableOpacity style={styles.iconContainer}>
                    <Search width={25} height={25} />
                </TouchableOpacity>
            </View>
            <View style={{marginLeft: 25}}>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.iconContainer}>
                    <ShoppingBag width={25} height={25} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingTop: 40
    },
    iconContainer: {
        padding: 5,
    },
});

export default Header