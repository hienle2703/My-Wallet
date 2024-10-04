import { View, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import BackButton from '@/components/Button/BackButton'
import { styles } from './WalletDetailScreenStyle'
import { balanceFormatter } from '@/utils/balanceFormatter'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTransactionsByWallet } from '@/redux/actions/transactionActions'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/MaterialIcons'

const renderKeyExtractor = (_, index) => index.toString()

const WalletDetailScreen = ({ navigation }) => {
  const route = useRoute<any>()
  const { wallet } = route.params || {}
  const { color, currentBalance, initialBalance, name } = wallet || {}

  const [totalIncome, setTotalIncome] = useState<number>(0)
  const [totalExpense, setTotalExpense] = useState<number>(0)
  const [groupTransactions, setGroupTransactions] = useState<any[]>([])

  const dispatch = useDispatch<any>()
  const { transactions } = useSelector((state: any) => state.transaction)

  const formatDate = (dateString) => {
    // Tạo đối tượng Date từ chuỗi input, đảm bảo chỉ lấy ngày
    const inputDate = new Date(dateString + 'T00:00:00') // Thêm T00:00:00 để chỉ lấy ngày
    const today = new Date()

    // Cũng chỉ lấy phần ngày của "today" để so sánh đúng
    const todayWithoutTime = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    )

    // Tạo một đối tượng cho "hôm qua"
    const yesterdayWithoutTime = new Date(todayWithoutTime)
    yesterdayWithoutTime.setDate(todayWithoutTime.getDate() - 1)

    // Kiểm tra nếu ngày nhập vào là hôm nay
    if (inputDate.getTime() === todayWithoutTime.getTime()) {
      return 'Today'
    }

    // Kiểm tra nếu ngày nhập vào là hôm qua
    if (inputDate.getTime() === yesterdayWithoutTime.getTime()) {
      return 'Yesterday'
    }

    // Nếu không phải hôm nay hoặc hôm qua, trả về tên ngày trong tuần
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    return daysOfWeek[inputDate.getDay()]
  }

  useEffect(() => {
    dispatch(getAllTransactionsByWallet(wallet._id))
  }, [])

  useEffect(() => {
    // TODO: Suy nghĩ lại cách get transactions trong wallet (theo tháng, pagination,...)

    if (transactions) {
      const groupedTransactions = transactions.reduce((acc, transaction) => {
        const date = transaction.date.split('T')[0]
        const existingGroup = acc.find((group) => group.date === date)

        if (existingGroup) {
          existingGroup.items.push(transaction)
          existingGroup.totalAmount += transaction.amount

          existingGroup.items.sort(
            (a: any, b: any) =>
              new Date(b.date).getTime() - new Date(a.date).getTime()
          )

        } else {
          acc.push({
            date: date,
            totalAmount: transaction.amount,
            items: [transaction]
          })
        }

        return acc
      }, [])

      groupedTransactions.sort(
        (a: any, b: any) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      )

      setGroupTransactions(groupedTransactions)
    }
  }, [transactions])

  const renderTransactionsHeader = () => {
    return (
      <View style={styles.headerBoxContainer}>
        <View style={styles.topHeaderBox}>
          <View style={[styles.topBox, styles.headerBoxBorder]}>
            <Text style={styles.topBoxTitle}>Total Income</Text>
            <Text style={styles.totalIncomeTxt}>
              {balanceFormatter(totalIncome)}
            </Text>
          </View>
          <View style={styles.topBox}>
            <Text style={styles.topBoxTitle}>Total expense</Text>
            <Text style={styles.totalExpenseTxt}>
              {balanceFormatter(totalExpense)}
            </Text>
          </View>
        </View>
        <View style={styles.bottomBox}>
          <Text style={styles.topBoxTitle}>Current Balance</Text>
          <Text style={styles.currentBalanceTxt}>
            {balanceFormatter(currentBalance)}
          </Text>
        </View>
      </View>
    )
  }

  const renderTransactionBlock = ({ item }: { item: any }) => {
    const { date, items, totalAmount } = item || {}
    return (
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 10,
          marginTop: 10,
          borderRadius: 10,
          paddingBottom: 10
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 10
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: 'black',
                marginRight: 5
              }}
            >
              {date.split('-')[2]}
            </Text>
            <View>
              <Text style={{ fontSize: 12, color: 'black' }}>
                {formatDate(date)}
              </Text>
              <Text style={{ fontSize: 9, color: '#6E6E6E' }}>{`${
                date.split('-')[1]
              }/${date.split('-')[0]}`}</Text>
            </View>
          </View>

          <Text
            style={{
              color: totalAmount > 0 ? '#007B5E' : '#CF0000',
              fontSize: 12,
              fontWeight: '500'
            }}
          >
            {balanceFormatter(totalAmount)}
          </Text>
        </View>
        <View style={styles.transactionRow} />
        {items.map((item, index) => {
          const { subcategory, note, category, amount } = item || {}
          return (
            <View
              key={`keyTransaction ${index}`}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                paddingLeft: 25,
                paddingRight: 10
              }}
            >
              <FastImage
                source={{ uri: subcategory?.icon?.url ?? category?.icon?.url }}
                style={{ height: 30, width: 30, marginRight: 10 }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12, color: 'black' }}>
                  {subcategory?.name ?? category?.name}
                </Text>
                {note && (
                  <Text
                    numberOfLines={1}
                    style={{
                      color: '#858585',
                      fontSize: 9,
                      fontStyle: 'italic',
                      maxWidth: '70%'
                    }}
                  >
                    {note}
                  </Text>
                )}
              </View>
              <Text
                style={{
                  textAlign: 'right',
                  color: amount > 0 ? '#007B5E' : '#CF0000',
                  fontSize: 12
                }}
              >
                {balanceFormatter(amount)}
              </Text>
            </View>
          )
        })}
      </View>
    )
  }

  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name='arrow-back-ios' size={25} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{name}</Text>
      </View>

      <FlatList
        data={groupTransactions}
        extraData={transactions}
        keyExtractor={renderKeyExtractor}
        renderItem={renderTransactionBlock}
        contentContainerStyle={styles.contentContainerList}
        ListHeaderComponent={renderTransactionsHeader}
      />

      <TouchableOpacity style={styles.addBtn}>
        <Icon color={'white'} name={'add'} size={30} />
      </TouchableOpacity>
    </View>
  )
}
export default WalletDetailScreen
