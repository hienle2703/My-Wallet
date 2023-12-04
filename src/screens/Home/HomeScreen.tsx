import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/HomeScreenStyles'
import LinearGradient from 'react-native-linear-gradient'
import FastImage from 'react-native-fast-image'
import TransactionRow from '../../components/Home/TransactionRow'
import { TRANSACTION_ROW } from '@/mock_data/MockDataHome'

const HomeScreen = () => {
  const renderTopComponents = () => {
    return (
      <View style={styles.headerWrapBase}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={['#000000', '#17B556']}
          style={styles.headerWrap}
        >
          <View style={styles.headerPage}>
            <View style={styles.avatarContainer}>
              <FastImage
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOIY_xfOWs3j5IVU6oSrWaID4BopWqYAV1hQ9pK4WO_uXc68fLuQfZWjF3epxPVpgEU8&usqp=CAU'
                }}
                style={styles.avatar}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
            <Text style={styles.homeTitle}>Home</Text>
            <TouchableOpacity style={styles.searchBox}>
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={['#000000', '#17B556']}
                style={styles.searchLinear}
              >
                <Icon name='search' color='white' size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.headerBoxContainer}>
              <Icon
                name='payments'
                color='white'
                style={styles.iconMenu}
                size={20}
              />
              <Text style={styles.headerBoxText}>Create Income</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.headerBoxContainer, styles.expenseBox]}
            >
              <Icon
                name='done'
                color='white'
                style={styles.iconMenu}
                size={20}
              />
              <Text style={styles.headerBoxText}>Create Expense</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.headerBoxContainer, styles.budgetBox]}
            >
              <Icon
                name='people'
                color='white'
                style={styles.iconMenu}
                size={20}
              />
              <Text style={styles.headerBoxText}>{'Add\nBudget'}</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    )
  }

  const renderTransactionRows = ({ item, index }) => {
    return <TransactionRow key={index} data={item} />
  }

  return (
    <View style={styles.screenBase}>
      {renderTopComponents()}
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.bodyTitle}>Recent Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          renderItem={renderTransactionRows}
          data={TRANSACTION_ROW}
          style={styles.containerStyle}
          contentContainerStyle={styles.contentFlatListStyle}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default HomeScreen
