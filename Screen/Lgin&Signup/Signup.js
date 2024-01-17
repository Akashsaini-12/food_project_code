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
import Icon from 'react-native-vector-icons/AntDesign';
import UploadIcon from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Texts from '../../Component/Texts';

const Login = ({navigation}) => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [selectImage, setSelectImage] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  // validation

  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validPhone, setvalidPhone] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [showError, setShowError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(null);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

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

  const handleName = () => {
    if (/^[0-9_]/.test(Name)) {
      setValidName(true);
      setShowError('');
    } else {
      setReadyToSubmit(true);
      setValidName(false);
      setName(Name);
      setShowError('');
    }
  };
  const EmailChangeBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidEmail(true);
    } else {
      setReadyToSubmit(true);
      setValidEmail(false);
      setEmail(email);
    }
  };
  const PhoneValidate = () => {
    if (mobile.length === 10) {
      setvalidPhone(false);
      setReadyToSubmit(true);
      setMobile(mobile);
    } else {
      setvalidPhone(true);
    }
  };
  const confirmPasswordValidate = () => {
    if (password === confirmPassword) {
      setReadyToSubmit(true);
      setValidConfirmPassword(false);
    } else {
      setValidConfirmPassword(true);
      setReadyToSubmit(false);
    }
  };
  const handleImageUpload = () => {
    setTimeout(() => {
      setUploadSuccess(true);
    }, 1000);
  };

  const profileImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: true,
      });
      setSelectImage(result.assets[0].base64);
      handleImageUpload();
    } catch (error) {
      setUploadSuccess(false);
    }
   
  };

  const handleSinghUp = async () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        {/* <Image
          source={require('../../assets/loginImage.png')}
          style={styles.image}
        /> */}
        
        <View style={styles.customView}>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#707070"
              value={Name}
              placeholder="Name"
              onChangeText={text => setName(text)}
              onBlur={handleName}
            />
            {validName && (
              <Text style={styles.errorText}>{Texts.InvalidName}</Text>
            )}
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#707070"
              value={email}
              placeholder="Email"
              onChangeText={text => setEmail(text)}
              onBlur={EmailChangeBlur}
            />
            {validEmail && (
              <Text style={styles.errorText}>{Texts.InvalidEmail}</Text>
            )}
          </View>
          <View style={styles.inputArea}>
            <TextInput
              style={[styles.input]}
              placeholderTextColor="#707070"
              value={mobile}
              placeholder="Mobile No."
              onChangeText={text => setMobile(text)}
              keyboardType="number-pad"
              maxLength={10}
              onBlur={PhoneValidate}
            />
            {validPhone && (
              <Text style={styles.errorText}>{Texts.InvalidPhone}</Text>
            )}
          </View>

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
          <View style={styles.inputArea}>
            <TextInput
              style={[styles.input]}
              placeholderTextColor="#707070"
              value={confirmPassword}
              secureTextEntry={isPasswordSecure}
              placeholder="Confirm Password"
              onChangeText={text => {
                setConfirmPassword(text);
              }}
              onBlur={confirmPasswordValidate}
            />
            {validConfirmPassword && (
              <Text style={styles.errorText}>
                {Texts.InvalidConfirmPassword}
              </Text>
            )}
            {showError ? (
              <Text style={styles.errorText}>{showError}</Text>
            ) : null}
          </View>
          <View  style={{disply:'flex', flexDirection:'row' , justifyContent:'center',gap:10 ,marginTop:25 , bottom:8}}>
                <Text style={styles.profileTxt}>Profile Photo:</Text>
                <TouchableOpacity
                  style={styles.iconView}
                  onPress={profileImage}>
                  <Icon name="clouduploado" size={25} color="#000" />
                  <Text style={styles.BrowserTxt}>Upload Files</Text>
                </TouchableOpacity>
                {uploadSuccess === true && (
                  <View style={styles.checkmarkContainer}>
                    <UploadIcon name="check-circle" style={styles.checkmark} />
                  </View>
                )}
                {uploadSuccess === false && (
                  <View style={styles.errorContainer}>
                    <UploadIcon name="times-circle" style={styles.errorIcon} />
                  </View>
                )}
               </View>  
        </View>
      </View>
      <View style={styles.lowerView}>
        <View style={styles.buttonContainer}>
          <CustomButton title="SIGN UP" onPress={handleSinghUp} fontSize={18} />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Already have an account?</Text>
            <TouchableOpacity
              style={styles.signupButton}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signupButtonText}>Sign In</Text>
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
    paddingTop: 100,
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
    zIndex:-2000
  },

  customView: {
    disply: 'flex',
    alignItems: 'center',
    zIndex: 1200,
    width: '93%',
    borderRadius: 30,
    backgroundColor: '#ffffff',
    shadowColor: '#b7b7b7',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 100,
    shadowRadius: 10,
    elevation: 100,
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
  inputArea: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'auto',
  },
  icon: {
    position: 'absolute',
    top: 260,
    left: 310,
    zIndex: 100,
  },
  buttonContainer: {
    marginTop: 90,
    width: '60%',
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
  iconView: {
    height: 35,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#607cb1',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    zIndex:2000
  },
  BrowserTxt: {color: 'white', fontWeight: '700'},
  profileTxt:{
    marginTop:5
  },
  checkmarkContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: 20,
    color: 'green',
  },
  errorIcon: {
    fontSize: 20,
    color: '#FF0000',
  },
  
});

export default Login;
