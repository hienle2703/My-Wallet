import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ACCESS_TOKEN } from '@/constants/keyStorage'
import RNSecureStorage from 'rn-secure-storage'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    RNSecureStorage.getItem(ACCESS_TOKEN)
      .then((res) => {
        // TODO: Gắn API Verify Token
        if (res) {
          navigation.replace('HomeStack')
        } else {
          navigation.replace('SignInScreen')
        }
      })
      .catch((err) => {
        console.log(err)
      })

    const timer = setTimeout(() => {}, 1000)
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
