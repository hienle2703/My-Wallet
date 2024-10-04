import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const BackButton = ({
  navigation,
  style,
  iconStyle
}: {
  navigation: any
  style?: any
  iconStyle?: any
}) => {
  const goBack = () => {
    navigation.goBack()
  }

  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        left: 20,
        ...style
      }}
      onPress={goBack}
    >
      <Icon name='arrow-back-ios' size={25} style={iconStyle} />
    </TouchableOpacity>
  )
}

export default BackButton
