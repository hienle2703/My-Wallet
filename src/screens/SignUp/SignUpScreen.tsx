import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signUp } from '@/redux/actions/userActions'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Loading } from '@/components/Loading'

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [isShowPassword, setIsShowPassword] = useState<boolean>(true)

  const dispatch = useDispatch<any>()
  const { error, isAuthenticated, loading } = useSelector(
    (state: any) => state.user
  )

  const goSignUp = () => {
    dispatch(signUp(username, email, password))
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigation.replace('HomeStack')
    }
  }, [isAuthenticated])

  useEffect(() => {
    error &&
      Alert.alert('Error', error, [
        {
          text: 'OK',
          onPress: () => {
            dispatch({
              type: 'clearError'
            })
          }
        }
      ])
  }, [error])

  return (
    <KeyboardAwareScrollView
      style={{
        backgroundColor: 'white'
      }}
      contentContainerStyle={{
        flexGrow: 1
      }}
    >
      <View
        style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}
      >
        <Text
          style={{
            color: '#003F02',
            fontWeight: 'bold',
            fontSize: 50,
            textAlign: 'right'
          }}
        >
          {'Create\naccount'}
        </Text>
        <TextInput
          placeholder='Username'
          style={{ borderBottomWidth: 2, borderBottomColor: '#9D9D9D' }}
          onChangeText={(username) => setUsername(username)}
          autoCapitalize='none'
        />
        <TextInput
          placeholder='Email'
          style={{
            borderBottomWidth: 2,
            borderBottomColor: '#9D9D9D',
            marginTop: 20
          }}
          onChangeText={(e) => setEmail(e)}
          autoCapitalize='none'
        />
        <View style={{ justifyContent: 'center', marginTop: 20 }}>
          <TextInput
            placeholder='Password'
            style={{ borderBottomWidth: 2, borderBottomColor: '#9D9D9D' }}
            secureTextEntry={isShowPassword}
            maxLength={16}
            onChangeText={(password) => setPassword(password)}
          />
          <TouchableOpacity
            style={{ position: 'absolute', right: 0 }}
            onPress={() => setIsShowPassword(!isShowPassword)}
          >
            <Icon
              name={isShowPassword ? 'eye' : 'eye-off'}
              size={24}
              color='grey'
            />
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', marginTop: 20 }}>
          <TextInput
            placeholder='Confirm password'
            style={{ borderBottomWidth: 2, borderBottomColor: '#9D9D9D' }}
            secureTextEntry={isShowPassword}
            maxLength={16}
            onChangeText={(password) => setConfirmPassword(password)}
          />
          <TouchableOpacity
            style={{ position: 'absolute', right: 0 }}
            onPress={() => setIsShowPassword(!isShowPassword)}
          >
            <Icon
              name={isShowPassword ? 'eye' : 'eye-off'}
              size={24}
              color='grey'
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          <View>
            <Text
              style={{ fontWeight: 'bold', fontSize: 10, color: '#A1A1A1' }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{ fontWeight: 'bold', fontSize: 15, color: '#6E6E6E' }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              padding: 15,
              borderRadius: 50,
              backgroundColor: '#17C25C'
            }}
            onPress={goSignUp}
          >
            <Icon name={'arrow-right'} size={30} color='#FFFFFF' />
          </TouchableOpacity>
        </View>
      </View>

      {/* {!Keyboard.isVisible() && (
        <View
          style={{
            position: 'absolute',
            bottom: -100,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <View
            style={{
              width: '75%',
              aspectRatio: 1,
              borderRadius: 500,
              backgroundColor: '#30AF63',
              left: -50
            }}
          />
          <View
            style={{
              width: '60%',
              aspectRatio: 1,
              borderRadius: 500,
              backgroundColor: '#BAF6D2',

              position: 'absolute',
              right: -30,
              bottom: -50
            }}
          />
        </View>
      )} */}
      {loading && <Loading />}
    </KeyboardAwareScrollView>
  )
}

export default SignUpScreen
