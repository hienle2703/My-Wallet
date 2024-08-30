import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { verifyToken } from '@/redux/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const SplashScreen = ({ navigation }) => {
  const { isAuthenticated } = useSelector((state: any) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    verifyToken(dispatch)
  }, [])

  useEffect(() => {
    if (isAuthenticated !== undefined) {
      navigation.replace(isAuthenticated ? 'HomeStack' : 'SignInScreen')
    }
  }, [isAuthenticated])

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
