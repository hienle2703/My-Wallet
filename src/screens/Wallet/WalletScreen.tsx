import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { getAllWallets } from '@/redux/actions/walletActions'

const TOTAL_BALANCE = '20.000.000đ'

const renderKeyWallets = (_, index) => {
  return `wallet-${index}`
}

const WalletScreen = () => {
  const { user } = useSelector((state: any) => state.user)
  const { wallets } = useSelector((state: any) => state.wallet)

  const dispatch = useDispatch()

  console.log(wallets, '==============wallets')

  const renderWallets = ({ item, index }) => {
    console.log(item, '===========')
    return (
      <View
        style={{
          width: '48%',
          backgroundColor: 'green',
          paddingHorizontal: 15,
          paddingVertical: 20,
          marginTop: 10,
          borderRadius: 15
        }}
      >
        <Text>Wallet</Text>
      </View>
    )
  }

  useEffect(() => {
    getAllWallets(dispatch)
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 10
        }}
      >
        <View>
          <Text style={{ fontSize: 16, color: '#8A8A8A' }}>Hello,</Text>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>{user?.name}</Text>
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Wallets</Text>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: 'yellow',
            borderRadius: 15
          }}
        >
          <FastImage
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOIY_xfOWs3j5IVU6oSrWaID4BopWqYAV1hQ9pK4WO_uXc68fLuQfZWjF3epxPVpgEU8&usqp=CAU'
            }}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 15,
              backgroundColor: 'yellow'
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      </View>

      <LinearGradient
        start={{ x: 0.2, y: 0.2 }}
        end={{ x: 1, y: 1 }}
        colors={['#006A9A', '#00A97A']}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 30,
          borderRadius: 20,
          marginHorizontal: 20,
          marginTop: 20
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
          VND {TOTAL_BALANCE}
        </Text>
        <Text style={{ color: 'white', fontSize: 12 }}>Total balance</Text>
        <Text style={{ textAlign: 'right', color: 'white', fontSize: 12 }}>
          See analytics
        </Text>
      </LinearGradient>

      <View
        style={{
          backgroundColor: 'white',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          flex: 1,
          marginTop: 30,
          padding: 20,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Your wallets</Text>
          <TouchableOpacity>
            <LinearGradient
              start={{ x: 0.2, y: 0.2 }}
              end={{ x: 1, y: 1 }}
              colors={['#006A9A', '#00A97A']}
              style={{
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderRadius: 20
              }}
            >
              <Icon name='add' size={20} color='white' />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <FlatList
          keyExtractor={renderKeyWallets}
          renderItem={renderWallets}
          data={wallets}
          extraData={wallets}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      </View>
    </View>
  )
}

export default WalletScreen
