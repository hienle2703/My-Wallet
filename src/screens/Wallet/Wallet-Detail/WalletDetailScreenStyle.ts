import { StatusBar, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  topBox: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 10
  },
  topBoxTitle: {
    fontSize: 12,
    color: 'black',
    fontWeight: '600'
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#EFEFEF'
  },
  headerContainer: {
    backgroundColor: '#148D00',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight
  },
  backBtn: {
    padding: 20,
    position: 'absolute',
    marginTop: StatusBar.currentHeight
  },
  iconStyle: {
    color: 'white'
  },
  headerText: {
    marginVertical: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
  contentContainerList: {
    paddingBottom: 200
  },
  addBtn: {
    position: 'absolute',
    bottom: 80,
    right: 10
  },
  headerBoxContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    marginHorizontal: 10,

    marginTop: 15,
    borderRadius: 10
  },
  topHeaderBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#D9D9D9',
    paddingHorizontal: 10
  },
  headerBoxBorder: {
    borderRightColor: '#D9D9D9',
    borderRightWidth: 0.5
  },
  totalIncomeTxt: {
    fontSize: 15,
    fontWeight: '600',
    color: '#007B5E'
  },
  totalExpenseTxt: {
    fontSize: 15,
    fontWeight: '600',
    color: '#CF0000'
  },
  bottomBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingTop: 20
  },
  currentBalanceTxt: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black'
  },
  transactionRow: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#E1E1E1'
  }
})
