import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Styles/TransactionRowStyles'
import { formatter } from '@/utils/numberFormatter'
import { transactionDateFormat } from '@/utils/dateFormatter'
import FastImage from 'react-native-fast-image'

const TransactionRow = (props: any) => {
  const { amount, date, wallet, icon, subcategory, category, note } =
    props?.data || {}
  const transactionColor = subcategory?.type === 'expense' ? 'red' : 'green'

  const onPressTransactionRow = () => {}

  return (
    <TouchableOpacity onPress={onPressTransactionRow} style={styles.rowWrapper}>
      <View style={styles.iconAndTitle}>
        <FastImage
          source={{ uri: category?.icon?.url ?? subcategory?.icon?.url }}
          style={{ height: 30, width: 30 }}
        />
        <View style={styles.infoRowContainer}>
          <Text style={styles.dayText}>{transactionDateFormat(date)}</Text>
          <Text style={styles.titleText}>
            {subcategory?.name ?? category?.name}
          </Text>
          {note && <Text style={styles.noteText}>{note}</Text>}
        </View>
      </View>
      {amount > 0 ? (
        <Text style={styles.price}>+{formatter.format(amount)}</Text>
      ) : (
        <Text style={styles.priceNegative}>{formatter.format(amount)}</Text>
      )}
    </TouchableOpacity>
  )
}

export default TransactionRow
