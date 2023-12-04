import { CalendarScreen } from '@/screens/Calendar'
import { HomeScreen } from '@/screens/Home'
import { StatisticScreen } from '@/screens/Statistic'
import { WalletScreen } from '@/screens/Wallet'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from './Styles/BottomTabStyles'
import Animated from 'react-native-reanimated'

const BottomTabs = () => {
  const Tab = createBottomTabNavigator()

  const renderIndicatorTab = (
    iconName: string,
    color: string,
    focused: boolean,
    size: number
  ) => {
    return (
      <Animated.View style={[{ alignItems: 'center' }]}>
        <MaterialCommunityIcons name={iconName} color={color} size={size} />
        {focused && <View style={styles.indicatorDot} />}
      </Animated.View>
    )
  }

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: 'white',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            renderIndicatorTab('home', color, focused, size)
        }}
      />
      <Tab.Screen
        name='Calendar'
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            renderIndicatorTab('calendar-month', color, focused, size)
        }}
      />
      <Tab.Screen
        name='Statistic'
        component={StatisticScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            renderIndicatorTab('chart-bar', color, focused, size)
        }}
      />
      <Tab.Screen
        name='Wallet'
        component={WalletScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            renderIndicatorTab('wallet', color, focused, size)
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs
