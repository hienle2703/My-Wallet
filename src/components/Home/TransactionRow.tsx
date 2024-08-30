import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Styles/TransactionRowStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { formatter } from '@/utils/numberFormatter'
import { transactionDateFormat } from '@/utils/dateFormatter'

// TODO: Add props color icon, color background icon.
const TransactionRow = (props: any) => {
  const { amount, date, wallet, icon, iconColor, subcategory, note } =
    props?.data || {}
  const transactionColor = subcategory?.type === 'expense' ? 'red' : 'green'

  const onPressTransactionRow = () => {}

  return (
    <TouchableOpacity onPress={onPressTransactionRow} style={styles.rowWrapper}>
      <View style={styles.iconAndTitle}>
        <View
          style={[styles.iconContainer, { backgroundColor: transactionColor }]}
        >
          <Icon
            name={icon ?? 'facebook'}
            color={iconColor ?? 'white'}
            size={30}
          />
        </View>
        <View style={styles.infoRowContainer}>
          <Text style={styles.dayText}>{transactionDateFormat(date)}</Text>
          <Text style={styles.titleText}>{wallet?.name ?? 'Wallet'}</Text>
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
