import React, {useState ,useEffect} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import CustomButton from '../Component/CustomButton';
import CustomHeader from '../Component/CustomHeader';
import Texts from '../Component/Texts';
import {useIsFocused} from '@react-navigation/native';

const {windowHeight} = Dimensions.get('window');

const ChangePassword = ({navigation}) => {
 

  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showError, setShowError] = useState('');
  const [showRequired, setShowRequired] = useState(false);

  const showToast = msg => {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setNewPassword('');
      setCurrentPassword('');
      setConfirmNewPassword('')
      setValidConfirmPassword(false);
      setShowRequired(false);
      setShowError('');

      setReadyToSubmit(false);
    }
  }, [isFocused]);

  const handleChangePassword = async () => {
    // if (readyToSubmit) {
    //   let res = await dispatch(
    //     AuthAction.updatePassword(
    //       dashboardDetail?.rData.Id,
    //       currentPassword,
    //       newPassword,
    //     ),
    //   );
    //   if (res?.rData.rCode === 0) {
    //     navigation.goBack();
    //     showToast('Password Update Successfully');
    //     setShowRequired(false);
    //     setShowError('');
    //   } else if (res?.rData.rCode === 1) {
    //     setShowError('current Password is worng');
    //   }
    // } else {
    //   setShowRequired(true);
    // }
  };
  const confirmPasswordValidate = () => {
    if (newPassword === confirmNewPassword) {
      setReadyToSubmit(true);
      setValidConfirmPassword(false);
      setShowRequired(false);
      setShowError('');
    } else {
      setValidConfirmPassword(true);
      setReadyToSubmit(false);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Current Password"
        secureTextEntry
        value={currentPassword}
        onChangeText={text => setCurrentPassword(text)}
      />
      {showError ? <Text style={styles.errorText}>{showError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry
        value={confirmNewPassword}
        onChangeText={text => setConfirmNewPassword(text)}
        onBlur={confirmPasswordValidate}
      />
      {validConfirmPassword && (
        <Text style={styles.errorText}>{Texts.InvalidConfirmPassword}</Text>
      )}
      {showRequired && (
        <Text style={styles.errorText}>Please enter required feild</Text>
      )}
      <View style={{width: '90%', alignItems: 'center'}}>
        <CustomButton title="Change Password" onPress={handleChangePassword} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DADADA',
    flex: 1,
    height: windowHeight,
    alignItems: 'center',
    paddingTop: 50,
    gap: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
    width: '90%',
    color: '#000000',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default ChangePassword;
