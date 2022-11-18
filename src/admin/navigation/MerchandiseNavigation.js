import { View, Text } from 'react-native'
import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import MerchandiseScreen from '../Screens/MerchandiseScreen'
import DetailScreen from '../Screens/DetailScreen'
import Body from '../components/Detail/Body'

const Stack = createSharedElementStackNavigator()

const MerchandiseNavigation = () => {
    const options = { header: () => { } }
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='List'
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
                    const { id } = route.params
                    return [{ id: `item.${id}.photo` }, { id: `item.${id}.rating` },]
                }}

            />
        </Stack.Navigator>
    )
}

export default MerchandiseNavigation