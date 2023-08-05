import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  screenBase: {
    backgroundColor: 'black'
  },
  headerWrap: {
    paddingVertical: 25,
    paddingHorizontal: 16,
    borderBottomRightRadius: 40
  },
  headerWrapBase: {
    backgroundColor: 'white'
  },
  headerPage: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  avatarContainer: {
    height: 64,
    width: 64,
    backgroundColor: 'yellow',
    borderRadius: 15
  },
  avatar: {
    height: '100%',
    width: '100%',
    borderRadius: 15
  },
  homeTitle: {
    fontSize: 20,
    color: 'white'
  },
  searchBox: {
    width: '15%',
    borderRadius: 20
  },
  searchLinear: {
    paddingVertical: 5,
    width: '100%',
    borderRadius: 20,
    alignItems: 'center'
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16
  },
  headerBoxContainer: {
    backgroundColor: '#009F2D',
    aspectRatio: 0.9,
    width: '28%',
    borderRadius: 15,
    justifyContent: 'flex-end'
  },
  headerBoxText: {
    color: 'white',
    fontSize: 15,
    padding: 9
  },
  iconMenu: {
    position: 'absolute',
    top: 5,
    right: 10
  },
  expenseBox: {
    backgroundColor: '#134951'
  },
  body: {
    backgroundColor: 'white',
    height: '100%',
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  bodyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bodyTitle: {
    fontWeight: '700',
    color: 'black',
    fontSize: 20
  },
  seeAllText: {
    fontSize: 16
  },
  budgetBox: {
    backgroundColor: '#007B5E'
  }
})
