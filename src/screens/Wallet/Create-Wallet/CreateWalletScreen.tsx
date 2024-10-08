import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
  Switch
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { WInput } from '@/components/Input'
import ColorPicker, {
  Panel1,
  Swatches,
  Preview,
  OpacitySlider,
  HueSlider
} from 'reanimated-color-picker'
import { styles } from './CreateWalletScreenStyles'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import { createWallet } from '@/redux/actions/walletActions'
import Toast from 'react-native-toast-message'
import { Loading } from '@/components/Loading'
import BackButton from '@/components/Button/BackButton'

const CreateWalletScreen = ({ navigation }) => {
  const [initialBalance, setInitialBalance] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [showModal, setShowModal] = useState(false)
  const [color, setColor] = useState<string>('#00691E')
  const [isCountTotal, setIsCountTotal] = useState<boolean>(true)

  const dispatch = useDispatch()
  const { message, error, loading } = useSelector((state: any) => state.wallet)

  const goBack = () => navigation.goBack()

  const formatValue = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  const onChangeNumber = (text: string) => {
    const cleanedText = text.replace(/\./g, '')
    const formattedText = formatValue(cleanedText)
    setInitialBalance(formattedText)
  }

  const onSelectColor = ({ hex }) => {
    setColor(hex)
  }

  const onCreateWallet = () => {
    const formData = {
      name,
      description,
      initialBalance: +initialBalance.replace(/\./g, ''),
      color,
      isCountTotal,
      currency: 'VND'
    }
    createWallet(dispatch, formData)
  }

  const toggleSwitch = () => setIsCountTotal(!isCountTotal)

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: error,
        position: 'bottom'
      })
      dispatch({
        type: 'clearErrorWallet'
      })
    }

    if (message) {
      Toast.show({
        type: 'success',
        text1: message,
        position: 'bottom'
      })

      dispatch({ type: 'clearMessageWallet' })

      navigation.goBack()
    }
  }, [message])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight
      }}
    >
      {/* Header */}
      <View style={styles.headerContainer}>
        <BackButton navigation={navigation} />
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>
          Add wallet
        </Text>
      </View>
      <View style={{ width: '100%', paddingHorizontal: 20 }}>
        <Text
          style={{
            textAlign: 'right',
            fontWeight: 'bold',
            fontSize: 15,
            marginTop: 20,
            color: 'black'
          }}
        >
          Initial balance
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <TextInput
            value={formatValue(initialBalance)}
            onChangeText={onChangeNumber}
            keyboardType='numeric'
            inputMode='numeric'
            textAlign='right'
            style={styles.inputBalance}
          />
          <Text style={styles.currency}>đ</Text>
        </View>
      </View>

      {/* Body */}
      <View style={styles.bodyContainer}>
        <WInput
          title={"Wallet's name"}
          value={name}
          setValue={setName}
          styles={{ marginTop: 25 }}
        />
        <WInput
          title={'Description'}
          value={description}
          setValue={setDescription}
          styles={{ marginTop: 25 }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 50
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>
            Pick wallet color
          </Text>
          <TouchableOpacity
            onPress={() => setShowModal(true)}
            style={{
              backgroundColor: color,
              height: 30,
              width: 30,
              borderRadius: 15
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 50
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>
            Count in total balance?
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#00691E' }}
            thumbColor={'white'}
            ios_backgroundColor='#3e3e3e'
            onValueChange={toggleSwitch}
            value={isCountTotal}
          />
        </View>

        <TouchableOpacity onPress={onCreateWallet} style={{ marginTop: 50 }}>
          <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            colors={['#023C0B', '#007311']}
            style={{
              width: '100%',
              paddingVertical: 15,
              borderRadius: 10,
              alignItems: 'center'
            }}
          >
            <Text style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>
              Create Wallet
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Modal transparent visible={showModal} animationType='slide'>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: `rgba(0,0,0,0.7)`,
            marginHorizontal: 20,
            borderRadius: 20,
            paddingVertical: 30,
            marginTop: 100
          }}
        >
          <ColorPicker
            style={{ width: '70%', marginBottom: 20 }}
            value='green'
            onComplete={onSelectColor}
          >
            <Preview style={{ marginTop: 20 }} />
            <Panel1 style={{ marginTop: 20 }} />
            <HueSlider style={{ marginTop: 20 }} />
            <OpacitySlider style={{ marginTop: 20 }} />
          </ColorPicker>

          <Button title='Choose' onPress={() => setShowModal(false)} />
        </View>
      </Modal>
      {loading && <Loading />}
      <Toast />
    </View>
  )
}

export default CreateWalletScreen
