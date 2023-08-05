import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './Styles/HomeScreenStyles'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerWrap}>
        <View style={styles.headerPage}>
          <View style={styles.avatarContainer}>
            <Text>Avatar</Text>
          </View>
          <Text style={styles.homeTitle}>Home</Text>
          <View>
            <Text>SearchBox</Text>
          </View>
        </View>
        <View style={styles.headerRow}>
          <View style={styles.headerBoxContainer}>
            <Icon name='payments' />
            <Text style={styles.headerBoxText}>Create Income</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
