import { View, Text, StatusBar, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import BackButton from '@/components/Button/BackButton'
import { styles } from './WalletDetailScreenStyle'
import { balanceFormatter } from '@/utils/balanceFormatter'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTransactionsByWallet } from '@/redux/actions/transactionActions'

const renderKeyExtractor = (index: number) => index.toString()

const WalletDetailScreen = ({ navigation }) => {
  const route = useRoute<any>()
  const { wallet } = route.params || {}
  const { color, currentBalance, initialBalance, name } = wallet || {}

  const [totalIncome, setTotalIncome] = useState<number>(0)
  const [totalExpense, setTotalExpense] = useState<number>(0)

  const dispatch = useDispatch<any>()
  const { transactions } = useSelector((state: any) => state.transaction)

  console.log('wallet', wallet)
  console.log(transactions, 'transaction')

  // Cần sửa bên BE, trả ra luôn type là income/expense trong transactions cho dễ dùng

  useEffect(() => {
    dispatch(getAllTransactionsByWallet(wallet._id))
  }, [])

  useEffect(() => {}, [transactions])

  const renderTransactionBlock = ({ item }: { item: any }) => {
    console.log(item, '==========item')

    return (
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 10,
          marginTop: 10,
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
          <Text>Today</Text>
          <Text>20000d</Text>
        </View>
        <View
          style={{ width: '100%', height: 0.5, backgroundColor: '#E1E1E1' }}
        />
      </View>
    )
  }

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

      {/* Info Box */}
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 20,
          marginHorizontal: 10,

          marginTop: 15,
          borderRadius: 10
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 0.5,
            borderBottomColor: '#D9D9D9',
            paddingHorizontal: 10
          }}
        >
          <View
            style={[
              styles.topBox,
              { borderRightColor: '#D9D9D9', borderRightWidth: 0.5 }
            ]}
          >
            <Text style={styles.topBoxTitle}>Total Income</Text>
            <Text style={{ fontSize: 15, fontWeight: '600', color: '#007B5E' }}>
              {balanceFormatter(totalIncome)}
            </Text>
          </View>
          <View style={styles.topBox}>
            <Text style={styles.topBoxTitle}>Total expense</Text>
            <Text style={{ fontSize: 15, fontWeight: '600', color: '#CF0000' }}>
              {balanceFormatter(totalExpense)}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingHorizontal: 10,
            paddingTop: 20
          }}
        >
          <Text style={styles.topBoxTitle}>Current Balance</Text>
          <Text style={{ fontSize: 15, fontWeight: '600', color: 'black' }}>
            {balanceFormatter(currentBalance)}
          </Text>
        </View>
      </View>

      <FlatList
        data={transactions}
        extraData={transactions}
        keyExtractor={renderKeyExtractor}
        renderItem={renderTransactionBlock}
      />
    </View>
  )
}
export default WalletDetailScreen
