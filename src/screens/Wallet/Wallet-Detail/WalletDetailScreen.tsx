import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import BackButton from '@/components/Button/BackButton'

const WalletDetailScreen = ({ navigation }) => {
  const route = useRoute<any>()
  const { wallet } = route.params || {}
  const { color, currentBalance, initialBalance, name, transactions } =
    wallet || {}

  return (
    <View style={{ flex: 1, backgroundColor: '#EFEFEF' }}>
      <View
        style={{
          backgroundColor: color,
          width: '100%',
          paddingHorizontal: 20,
          paddingTop: StatusBar.currentHeight
        }}
      >
        <BackButton
          navigation={navigation}
          style={{ marginTop: 20 + (StatusBar.currentHeight ?? 0) }}
          iconStyle={{ color: 'white' }}
        />
        <Text
          style={{
            marginVertical: 20,
            textAlign: 'center',
            color: 'white',
            fontSize: 20,
            fontWeight: '600'
          }}
        >
          {name}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 20,
          marginHorizontal: 10,
          paddingHorizontal: 10,
          marginTop: 15,
          borderRadius: 10
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <View>
            <Text>Total Income</Text>
            <Text>50.000.000đ</Text>
          </View>
          <View />
          <View>
            <Text>Total expense</Text>
            <Text>25.000.000đ</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default WalletDetailScreen
