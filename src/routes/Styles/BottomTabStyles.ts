import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 10,
    marginHorizontal: 10,
    backgroundColor: 'black',
    borderRadius: 20,
    paddingBottom: 0
  },
  indicatorDot: {
    height: 5,
    width: 5,
    backgroundColor: 'white',
    borderRadius: 3
  },
})

export { styles }
