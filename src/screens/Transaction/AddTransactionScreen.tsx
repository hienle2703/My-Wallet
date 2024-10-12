import {
  View,
  Text,
  StatusBar,
  Modal,
  TouchableOpacity,
  Platform
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { dateToShowFormat } from '@/utils/dateFormatter'
import DatePicker from 'react-native-date-picker'
import BackButton from '@/components/Button/BackButton'
import LinearGradient from 'react-native-linear-gradient'
import { amountFormatter, balanceFormatter } from '@/utils/balanceFormatter'
import { styles } from './AddTransactionScreenStyles'

const AddTransactionScreen = ({ navigation }) => {
  const [amount, setAmount] = useState<string>('')
  const [chosenCategory, setChosenCategory] = useState<any>(null)
  const [note, setNote] = useState<string>('')
  const [date, setDate] = useState(new Date())
  const [isShowDatePicker, setIsShowDatePicker] = useState(false)

  const onChangeAmount = (value) => {

    // TODO: Sao cái hàm này nó không work??? 

    // const valueString = value.replace(/[^0-9]/g, '')
    // console.log(valueString, '=====valueString')
    const formattedAmount = amountFormatter(value)
    console.log(formattedAmount, '=====formattedAmount')
    setAmount(formattedAmount)
  }

  const onCloseModal = () => {
    setIsShowDatePicker(false)
  }

  const renderDatePickerModal = () => {
    return (
      <Modal visible={isShowDatePicker} animationType='slide' transparent>
        <View
          style={styles.modalContainer}
        >
          <View
            style={styles.closeContainer}
          >
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={onCloseModal}
            >
              <Icon name='close' size={20} color={'white'} />
            </TouchableOpacity>
          </View>
          <DatePicker
            date={date}
            onDateChange={(date) => setDate(date)}
            mode='date'
          />
        </View>
      </Modal>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle='dark-content' />

      {/* Header */}
      <View style={{ alignItems: 'center', paddingVertical: 10 }}>
        <BackButton
          navigation={navigation}
          style={{ marginTop: 10 }}
          iconStyle={{ color: 'black' }}
        />
        <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>
          Add transaction
        </Text>
      </View>

      {/* Amount */}
      <View style={{ marginTop: 20 }}>
        <View
          style={{ width: '100%', alignItems: 'center', flexDirection: 'row' }}
        >
          <View style={{ width: '15%' }} />
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: '600'
            }}
          >
            Amount
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              color: '#009F3A',
              fontSize: 15,
              fontWeight: '600',
              width: '15%',
              textAlign: 'center'
            }}
          >
            đ
          </Text>
          <TextInput
            value={amount}
            onChangeText={onChangeAmount}
            keyboardType='numeric'
            returnKeyType='done'
            style={styles.amountInput}
          />
        </View>
      </View>

      {/* Category */}
      <View
        style={styles.rowContainer}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1
          }}
        >
          <View style={{ width: '15%', alignItems: 'center' }}>
            {chosenCategory ? (
              <FastImage
                source={{ uri: chosenCategory?.icon?.url }}
                style={{ height: 28, width: 28, borderRadius: 14 }}
              />
            ) : (
              <View
                style={{
                  backgroundColor: '#B4B4B4',
                  height: 28,
                  width: 28,
                  borderRadius: 14
                }}
              />
            )}
          </View>
          <Text style={{ width: '85%' }}>
            {chosenCategory?.name ?? 'Choose Category'}
          </Text>
          <Icon
            name='chevron-right'
            size={20}
            color={'#B4B4B4'}
            style={{ right: 10, position: 'absolute' }}
          />
        </View>
      </View>
      <View
        style={styles.line}
      />

      {/* Note */}
      <View
        style={styles.rowContainer}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1
          }}
        >
          <View style={{ width: '15%', alignItems: 'center' }}>
            <Icon name='menu' size={24} color={'#B4B4B4'} />
          </View>
          <TextInput
            placeholder='Note'
            value={note}
            onChangeText={(value) => setNote(value)}
            style={{
              borderBottomColor: '#D3D3D3',
              borderBottomWidth: 1,
              width: '85%',
              paddingVertical: Platform.OS === 'ios' ? 10 : 0
            }}
          />
          <Icon
            name='chevron-right'
            size={20}
            color={'#B4B4B4'}
            style={{ position: 'absolute', right: 10 }}
            onPress={() => {
              // TODO: Add trang thêm note dài
            }}
          />
        </View>
      </View>

      {/* Date */}
      <View
        style={styles.rowContainer}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1
          }}
        >
          <View style={{ width: '15%', alignItems: 'center' }}>
            <Icon name='calendar-today' size={24} color={'#B4B4B4'} />
          </View>
          <Text style={{ width: '85%', color: 'black' }}>
            {dateToShowFormat(date)}
          </Text>
          <Icon
            name='chevron-right'
            size={20}
            color={'#B4B4B4'}
            style={{ position: 'absolute', right: 10 }}
            onPress={() => setIsShowDatePicker(true)}
          />
        </View>
      </View>

      <View
        style={styles.line}
      />

      {/* // TODO: Thêm mục chọn wallet */}

      {/* Save Button */}
      <TouchableOpacity
        style={styles.addBtn}
      >
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={['#000000', '#17B556']}
          style={styles.linearAdd}
        >
          <Text style={styles.addTxt}>Save Transaction</Text>
        </LinearGradient>
      </TouchableOpacity>
      {renderDatePickerModal()}
    </SafeAreaView>
  )
}

export default AddTransactionScreen
