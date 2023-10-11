import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#148D00'
  },
  priceNegative: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#CF0000'
  },
  iconAndTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconContainer: {
    padding: 10,
    borderRadius: 12
  },
  infoRowContainer: {
    marginLeft: 10
  },
  dayText: {
    fontSize: 10,
    color: '#8A8A8A'
  },
  titleText: {
    fontWeight: '500',
    fontSize: 15,
    color: '#000000'
  }
})
