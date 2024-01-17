import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../Component/CustomButton';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [readyToSubmit, setReadyToSubmit] = useState(false);

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      setEmail('');
      setMobile('');
      setPassword('');
      setError('');
      setIsValid(true);
      setReadyToSubmit(false);
    }
  }, [isFocused]);

  const validateInput = text => {
    if (text?.length === 10) {
      setMobile(text);
      setEmail('');
      setError('');
    } else {
      setMobile('');
      setEmail(text);

      setError('');
    }
  };

  const handleBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    if (email.match(emailRegex)) {
      setIsValid(true);
      setReadyToSubmit(true);
    } else if (mobile.match(mobileRegex)) {
      setIsValid(true);
      setReadyToSubmit(true);
    } else {
      setIsValid(false);
      setReadyToSubmit(false);
    }
  };
  const handleLogin = async () => {
    navigation.navigate('TabNavigation');
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <Image
          source={require('../../assets/loginImage.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.lowerView}>
        <View style={styles.customView}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#707070"
            value={mobile || email}
            autoCapitalize="none"
            placeholder="Your registered Mobile or E-mail"
            onChangeText={validateInput}
            onBlur={handleBlur}
          />
          {!isValid && (
            <Text style={styles.errorText}>Invalid email or mobile number</Text>
          )}
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <TextInput
            style={styles.input}
            placeholderTextColor="#707070"
            value={password}
            secureTextEntry={isPasswordSecure}
            placeholder="Password"
            onChangeText={text => {
              setPassword(text);
            }}
          />
          <Icons
            name={isPasswordSecure ? 'eye-off' : 'eye'}
            size={20}
            color="#b5b3b4"
            style={styles.icon}
            onPress={() => {
              isPasswordSecure
                ? setIsPasswordSecure(false)
                : setIsPasswordSecure(true);
            }}
          />

          <TouchableOpacity style={{position: 'relative'}}>
            <Text style={{position: 'absolute', bottom: 8, left: 50}}>
              Forget Password!
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="LOGIN" onPress={handleLogin} fontSize={18} />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.signupButton}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    zIndex: -200,
  },
  upperView: {
    flex: 1,
    zIndex: -200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5d3c7',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  lowerView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: 230,
    height: 230,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  customView: {
    disply: 'flex',

    alignItems: 'center',
    zIndex: 1200,
    width: '93%',
    borderRadius: 30,
    backgroundColor: '#ffffff',
    height: 200,
    position: 'relative',
    bottom: 50,
    shadowColor: '#b7b7b7',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 50,
  },
  input: {
    marginTop: 25,
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    paddingLeft: 10,
    width: '90%',
    color: '#000000',
    borderWidth: 1,
  },
  inputTxt: {},
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'auto',
  },
  icon: {
    position: 'relative',
    left: 140,
    bottom: 40,
  },
  buttonContainer: {
    width: '60%',
    // marginTop: -30,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signupText: {
    color: '#717171',
  },
  signupButton: {
    marginLeft: 5,
  },
  signupButtonText: {
    color: '#444444',
    fontWeight: 'bold',
  },
});

export default Login;
