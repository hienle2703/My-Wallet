import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { SplashScreen } from '../screens/Splash'
import { HomeScreen } from '../screens/Home'
import { CalendarScreen } from '../screens/Calendar'
import { StatisticScreen } from '../screens/Statistic'
import { WalletScreen } from '../screens/Wallet'
import BottomTabs from './BottomTab'

const AppNavigation = () => {
  const AppStack = createNativeStackNavigator()

  return (
      <NavigationContainer>
        {/* <AppStack.Navigator
          screenOptions={{
            gestureEnabled: false,
            headerShown: false
          }}
          initialRouteName={'HomeScreen'}
        >
          <AppStack.Screen name='SplashScreen' component={SplashScreen} />
          <AppStack.Screen name={'HomeScreen'} component={HomeScreen} />
          <AppStack.Screen name={'CalendarScreen'} component={CalendarScreen} />
          <AppStack.Screen
            name={'StatisticScreen'}
            component={StatisticScreen}
          />
          <AppStack.Screen name={'WalletScreen'} component={WalletScreen} />
        </AppStack.Navigator> */}
        <BottomTabs />
      </NavigationContainer>
  )
}

export default AppNavigation
