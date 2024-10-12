import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  StatusBar,
  Dimensions
} from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { getAllWallets } from '@/redux/actions/walletActions'
import { PieChart } from 'react-native-gifted-charts'
import { balanceFormatter } from '@/utils/balanceFormatter'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { updateAvatar } from '@/redux/actions/userActions'
import mime from 'mime'
import { Screen } from 'react-native-screens'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const TOTAL_BALANCE = '20.000.000đ'

const renderKeyWallets = (_, index) => {
  return `wallet-${index}`
}

const WalletScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const { user } = useSelector((state: any) => state.user)
  const { wallets } = useSelector((state: any) => state.wallet)

  const dispatch = useDispatch<any>()

  const createFormUpload = async (image) => {
    const myForm = new FormData()
    myForm.append('file', {
      uri: image,
      type: mime.getType(image),
      name: image.split('/').pop()
    })

    dispatch(updateAvatar(myForm))
  }

  const onChangeAvatar = async () => {
    Alert.alert(
      'Change profile image',
      'Please choose a method to upload the new avatar',
      [
        {
          text: 'Upload from library',
          onPress: async () => {
            const result = await launchImageLibrary({
              mediaType: 'photo',
              quality: 0.8
            })

            result?.assets && createFormUpload(result.assets[0].uri)
          }
        },
        {
          text: 'Take photo',
          onPress: async () => {
            const result = await launchCamera({
              mediaType: 'photo',
              quality: 0.8
            })

            result?.assets && createFormUpload(result.assets[0].uri)
          }
        }
      ],
      { cancelable: true }
    )
  }

  const onCreateWallet = () => {
    navigation.navigate('CreateWallet')
  }

  const renderWallets = ({ item, index }) => {
    const { name, currentBalance, initialBalance, color } = item || {}

    const dataChart = [
      { value: currentBalance, color: 'white' },
      { value: initialBalance - currentBalance, color: 'gray' }
    ]

    const goWalletDetail = () =>
      navigation.navigate('WalletDetail', { wallet: item })

    return (
      <TouchableOpacity
        onPress={goWalletDetail}
        style={{
          width: (Dimensions.get('window').width - 50) / 2,
          backgroundColor: color ?? 'green',
          paddingHorizontal: 15,
          paddingVertical: 20,
          marginBottom: 10,
          borderRadius: 15
        }}
      >
        <PieChart
          donut
          radius={20}
          innerRadius={15}
          data={dataChart}
          backgroundColor={color ?? 'green'}
        />
        <Text style={{ fontSize: 15, color: 'white', marginTop: 10 }}>
          {balanceFormatter(+currentBalance)}
        </Text>
        <Text style={{ fontSize: 15, color: '#D2D2D2' }}>{name}</Text>
      </TouchableOpacity>
    )
  }

  useEffect(() => {
    getAllWallets(dispatch)
  }, [])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight ?? 0 + insets.top
      }}
    >
      <StatusBar barStyle={'dark-content'} />
      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          alignItems: 'center',
          justifyContent: 'center',

          marginTop: 10,
          height: 50
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Wallets</Text>
        <TouchableOpacity
          style={{
            height: 50,
            aspectRatio: 1,
            backgroundColor: 'white',
            borderRadius: 15,

            position: 'absolute',
            right: 20
          }}
          onPress={onChangeAvatar}
        >
          <FastImage
            source={{
              uri:
                user?.avatar?.url ??
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOIY_xfOWs3j5IVU6oSrWaID4BopWqYAV1hQ9pK4WO_uXc68fLuQfZWjF3epxPVpgEU8&usqp=CAU'
            }}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 15,
              backgroundColor: 'white'
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </TouchableOpacity>
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
          <TouchableOpacity onPress={onCreateWallet}>
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
          contentContainerStyle={{ marginTop: 10, paddingBottom: 100 }}
          columnWrapperStyle={{
            justifyContent: 'space-between'
          }}
        />
      </View>
    </View>
  )
}

export default WalletScreen
