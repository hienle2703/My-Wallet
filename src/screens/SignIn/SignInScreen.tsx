import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignInScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        justifyContent: 'center'
      }}
    >
      <Text style={{ color: '#003F02', fontWeight: 'bold', fontSize: 50 }}>
        {'Welcome\nback'}
      </Text>
      <View
        style={{
          position: 'absolute',
          bottom: -50,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <View
          style={{
            width: '75%',
            aspectRatio: 1,
            borderRadius: 500,
            backgroundColor: '#30AF63',
            left: -50
          }}
        />
        <View
          style={{
            width: '60%',
            aspectRatio: 1,
            borderRadius: 500,
            backgroundColor: '#BAF6D2',

            position: 'absolute',
            right: -30,
            bottom: -50
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen
