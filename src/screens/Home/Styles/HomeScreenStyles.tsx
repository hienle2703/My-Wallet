import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  headerWrap: {
    color: 'red',
    paddingVertical: 25,
    paddingHorizontal: 16
  },
  headerPage: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'gray',
    justifyContent: 'space-between'
  },
  avatarContainer: {
    height: 64,
    width: 64,
    color: 'green',
    borderRadius: 15
  },
  homeTitle: {
    fontSize: 20,
    color: 'white'
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16
  },
  headerBoxContainer: {
    backgroundColor: 'green',
    aspectRatio: 0.8,
    width: '28%',
    borderRadius: 15,
    justifyContent: 'flex-end'
  },
  headerBoxText: {
    color: 'white',
    fontSize: 15,
    padding: 9
  }
})
