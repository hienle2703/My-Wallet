import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',

    width: '100%',
    paddingBottom: 50,
    paddingTop: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  closeContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingRight: 20
  },
  closeBtn: {
    backgroundColor: '#D9D9D9',
    padding: 5,
    borderRadius: 20
  },
  addBtn: {
    paddingHorizontal: 20,
    width: '100%',
    marginTop: 30
  },
  linearAdd: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  addTxt: {
    color: 'white',
    fontSize: 15
  },
  line: {
    height: 1,
    backgroundColor: '#D3D3D3',
    width: '85%',
    alignSelf: 'flex-end',
    marginTop: 10
  },
  rowContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  amountInput: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    width: '100%',
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    fontSize: 15,
    color: '#009F3A',
    fontWeight: 'bold'
  }
})
