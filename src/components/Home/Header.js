import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HamBurger from '../../icons/HamBurger.svg'
import Search from '../../icons/search.svg'
import ShoppingBag from '../../icons/ShoppingBag.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Header = ({ style, title, stackNavigation }) => {

    const items = useSelector(state => state.cart.items);

    const height = 35;
    const width = 35;

    const navigation = useNavigation();
    return (
        <View style={[styles.container, style]}>
            <View>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.openDrawer()}>
                    <HamBurger height={25} width={25} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', }}>
                <View>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Search width={width} height={height} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 25 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.iconContainer}>
                        <ShoppingBag width={width} height={height} />
                        {items.length !== 0 && <View style={styles.badge}>
                            <Text style={{ color: 'white', fontWeight: '600' }}>
                                {items.length >= 100 ? '99+' : items.length}
                            </Text>
                        </View>}
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
        padding: '5%',
        paddingVertical: '10%',
    },
    iconContainer: {
        padding: 5,
    },
    badge: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        position: 'absolute',
        padding: '10%',
        zIndex: 100,
        backgroundColor: 'black',
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Header