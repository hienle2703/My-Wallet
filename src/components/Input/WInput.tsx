import { View, Text, TextInput } from 'react-native'
import React from 'react'

const WInput = ({
  value,
  setValue,
  title,
  styles
}: {
  value: string
  setValue: any
  title: string
  styles?: any
}) => {
  return (
    <View style={[styles && { ...styles }]}>
      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>
        {title}
      </Text>
      <TextInput
        value={value}
        onChangeText={(value: string) => setValue(value)}
        maxLength={50}
        style={{
          width: '100%',
          backgroundColor: 'white',
          borderBottomWidth: 1,
          borderColor: '#D3D3D3',

          fontSize: 20,
          color: '#148D00',
          fontWeight: 'bold',
          paddingVertical: 0,
          marginTop: 10
        }}
      />
    </View>
  )
}

export default WInput
