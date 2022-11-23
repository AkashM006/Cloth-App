import React from 'react'
import DashboardScreen from '../Screens/DashboardScreen'
import MerchandiseScreen from '../Screens/MerchandiseScreen'
import DetailScreen from '../Screens/DetailScreen'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import FormScreen from '../Screens/FormScreen'
import { CardStyleInterpolators } from '@react-navigation/stack'

const Stack = createSharedElementStackNavigator()

const AdminHomeNavigation = () => {
    const options = {
        header: () => { }
    }
    return (
        <Stack.Navigator screenOptions={{ contentStyle: { borderRadius: 10 } }} initialRouteName='Dashboard'>
            <Stack.Screen
                name='Dashboard'
                options={options}
                component={DashboardScreen}
            />
            <Stack.Screen
                name='Merchandise'
                component={MerchandiseScreen}
                options={options}
            />
            <Stack.Screen
                name='Detail'
                component={DetailScreen}
                options={() => ({
                    header: () => { },
                    gestureEnabled: false,
                    cardStyleInterpolator: ({ current: { progress } }) => {
                        return {
                            cardStyle: {
                                opacity: progress,
                            }
                        }
                    },
                    transitionSpec: {
                        open: { animation: 'timing', config: { duration: 300 } },
                        close: { animation: 'timing', config: { duration: 300 } },
                    }
                })}
                sharedElements={(route, otherRoute, showing) => {
                    const { name } = route.params
                    return [{ id: `item.${name}.photo` }, { id: `item.${name}.rating` },]
                }}
            />
            <Stack.Screen
                name='Form'
                component={FormScreen}
                options={() => ({
                    cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
                    gestureEnabled: false,
                    header: () => { }
                })}
            />
        </Stack.Navigator>
    )
}

export default AdminHomeNavigation