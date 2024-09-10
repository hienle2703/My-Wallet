import { AppRegistry, StatusBar } from 'react-native'
import { name as appName } from './app.json'
import AppNavigation from './src/routes/AppNavigation'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Index = () => {
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      </GestureHandlerRootView>
    </>
  )
}

AppRegistry.registerComponent(appName, () => Index)
