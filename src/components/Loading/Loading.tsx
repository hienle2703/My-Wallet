import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View
      style={{
        position: 'absolute',

        justifyContent: 'center',
        alignItems: 'center',

        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }}
    >
      <View
        style={{
          width: '30%',
          height: 100,
          borderRadius: 20,
          backgroundColor: 'rgba(0,0,0,0.1)',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator size='large' color='#30AF63' />
      </View>
    </View>
  )
}

export default Loading
