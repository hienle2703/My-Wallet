import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  inputBalance: {
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',

    fontSize: 20,
    color: '#148D00',
    fontWeight: 'bold',
    paddingVertical: 0,
    marginTop: 10
  },
  currency: {
    color: '#009F3A',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10
  },
  bodyContainer: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
})
