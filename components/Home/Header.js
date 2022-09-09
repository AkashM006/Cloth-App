import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HamBurger from '../../assets/HamBurger.svg'
import Search from '../../assets/search.svg'
import ShoppingBag from '../../assets/ShoppingBag.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Header = ({style}) => {
    const navigation = useNavigation();
  return (
    <View style={[styles.container,style]}>
        <View style={{height: 25, width: 25,}}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <HamBurger />
                </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row',}}>
            <View>
                <Search width={25} height={25} />
            </View>
            <View style={{marginLeft: 25}}>
                <ShoppingBag width={25} height={25} />
                {/* todo: maybe want to add badges to denote the number of items in basket */}
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: 40
    }
});

export default Header