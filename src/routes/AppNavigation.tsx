import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SplashScreen } from '../screens/Splash'
import BottomTabs from './BottomTab'
import { SignInScreen } from '@/screens/SignIn'

const AppNavigation = () => {
  const AppStack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerShown: false
        }}
        initialRouteName={'SplashScreen'}
      >
        <AppStack.Screen name='SplashScreen' component={SplashScreen} />
        <AppStack.Screen name='SignInScreen' component={SignInScreen} />
        {/* <AppStack.Screen name='SignUpScreen' component={SignUpScreen} /> */}
        <AppStack.Screen name='HomeStack' component={BottomTabs} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
