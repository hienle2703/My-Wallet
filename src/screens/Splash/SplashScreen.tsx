import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignInScreen')
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#30AF63'
      }}
    >
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 60,
          textAlign: 'center'
        }}
      >{`My\nWallet`}</Text>
    </SafeAreaView>
  )
}

export default SplashScreen
