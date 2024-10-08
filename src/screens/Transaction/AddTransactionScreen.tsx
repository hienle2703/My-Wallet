import { View, Text, StatusBar, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { dateToShowFormat } from '@/utils/dateFormatter'
import DatePicker from 'react-native-date-picker'
import BackButton from '@/components/Button/BackButton'

const AddTransactionScreen = ({ navigation }) => {
  const [amount, setAmount] = useState<string>('')
  const [chosenCategory, setChosenCategory] = useState<any>(null)
  const [note, setNote] = useState<string>('')
  const [date, setDate] = useState(new Date())
  const [isShowDatePicker, setIsShowDatePicker] = useState(false)

  const renderDatePickerModal = () => {
    return (
      <Modal visible={isShowDatePicker} animationType='slide' transparent>
        <View
          style={{
            backgroundColor: 'white',

            width: '100%',
            paddingBottom: 50,
            paddingTop: 20,
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,

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
            style={{ width: '100%', alignItems: 'flex-end', paddingRight: 20 }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: '#D9D9D9',
                padding: 5,
                borderRadius: 20
              }}
              onPress={() => setIsShowDatePicker(false)}
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
            style={{
              borderBottomColor: '#D3D3D3',
              borderBottomWidth: 1,
              width: '100%'
            }}
          />
        </View>
      </View>

      {/* Category */}
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center'
        }}
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
          <Text style={{ width: '80%' }}>
            {chosenCategory?.name ?? 'Choose Category'}
          </Text>
          <Icon
            name='chevron-right'
            size={20}
            color={'#B4B4B4'}
            style={{ marginRight: 10 }}
          />
        </View>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#D3D3D3',
          width: '85%',
          alignSelf: 'flex-end',
          marginTop: 10
        }}
      />

      {/* Note */}
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center'
        }}
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
            <Icon name='menu' size={24} color={'#B4B4B4'} />
          </View>
          <Text style={{ width: '80%' }}>
            {note ?? 'Note'}
          </Text>
          <Icon
            name='chevron-right'
            size={20}
            color={'#B4B4B4'}
            style={{ marginRight: 10 }}
          />
        </View>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#D3D3D3',
          width: '85%',
          alignSelf: 'flex-end',
          marginTop: 10
        }}
      />

      {/* Date */}
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center'
        }}
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
          <Text style={{ width: '80%', color: 'black' }}>
            {dateToShowFormat(date)}
          </Text>
          <Icon
            name='chevron-right'
            size={20}
            color={'#B4B4B4'}
            style={{ marginRight: 10 }}
            onPress={() => setIsShowDatePicker(true)}
          />
        </View>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#D3D3D3',
          width: '85%',
          alignSelf: 'flex-end',
          marginTop: 10
        }}
      />

      {renderDatePickerModal()}
    </SafeAreaView>
  )
}

export default AddTransactionScreen
