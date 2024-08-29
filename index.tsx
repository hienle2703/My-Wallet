import { AppRegistry, StatusBar } from 'react-native'
import { name as appName } from './app.json'
import AppNavigation from './src/routes/AppNavigation'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

const Index = () => {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={false}
      />
      <AppNavigation />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => Index)
