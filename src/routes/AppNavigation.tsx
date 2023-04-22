import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { SplashScreen } from '../screens/Splash'
import { HomeScreen } from '../screens/Home'
import { CalendarScreen } from '../screens/Calendar'
import { StatisticScreen } from '../screens/Statistic'
import { WalletScreen } from '../screens/Wallet'

const AppNavigation = () => {
  const AppStack = createNativeStackNavigator()

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack.Navigator
          screenOptions={{
            gestureEnabled: false,
            headerShown: false
          }}
          initialRouteName={'SplashScreen'}
        >
          <AppStack.Screen name='SplashScreen' component={SplashScreen} />
        </AppStack.Navigator>
        <AppStack.Screen name={'HomeScreen'} component={HomeScreen} />
        <AppStack.Screen name={'CalendarScreen'} component={CalendarScreen} />
        <AppStack.Screen name={'StatisticScreen'} component={StatisticScreen} />
        <AppStack.Screen name={'WalletScreen'} component={WalletScreen} />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default AppNavigation
