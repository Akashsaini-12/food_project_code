import {
  View,
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {color} from '../Component/Color';
import {font} from '../Component/Fonts';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('window');

const Card = ({onPress}) => {
  return (
    <View style={styles.cardView}>
      <View style={{display: 'flex', justifyContent: 'center'}}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/download1.jpg')}
        />
      </View>
      <View style={{display: 'flex', justifyContent: 'center'}}>
        <Text style={styles.nameTxt}>Kristin watson</Text>
        <Text style={styles.gmailTxt}>Kristinwatson@gmail.com </Text>
      </View>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Icon
            name="edit-2"
            size={20}
            color="#b5b3b4"
            style={styles.iconEdit}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TextInputs = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 15}}>
        <Icons name="eye" size={20} color="#b5b3b4" style={styles.icon} />

        <Text style={[styles.input]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Profile = ({navigation}) => {
  const [password, setPassword] = useState('');

  const handleEdit = () => {
    navigation.navigate('EditProfile');
  };
  const handleOrderHistory = () => {
      navigation.navigate('OrderHistory');
  };
  const handleChangePassword = () => {
      navigation.navigate('ChangePassword');
  };
  const handleMyAddress = () => {
    //   navigation.navigate('MyAddress');
  };
  const handleMyFavourites = () => {
      navigation.navigate('Favourites');
  };
 

  return (
    <View style={styles.container}>
      <View style={styles.uprConatiner}>
        <Text style={styles.profileTxt}>Profile</Text>
        <Card onPress={handleEdit}></Card>
      </View>
      <View style={styles.dwnConatiner}>
        <View style={styles.viewStyle}>
          <TextInputs title="Change password"  onPress={handleChangePassword}/>
          <TextInputs onPress={ handleOrderHistory} title="Order History" />
          <TextInputs onPress={handleMyFavourites} title="Favourite Cart" />
        
          <TextInputs title="Terms & Conditions" />
          <TextInputs title="Help" />
          <TextInputs title="Logout" />
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: 'white',
  },
  uprConatiner: {
    width: '100%',
    height: '32%',
    backgroundColor: '#eddcd2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  dwnConatiner: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '53%',
    backgroundColor: 'white',
  },
  profileTxt: {
    fontSize: font.Xlarg,
    fontWeight: 'bold',
    color: color.black,
  },
  cardView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '75%',
    height: 130,
    borderRadius: 13,
    backgroundColor: '#fbfbfb',
  },
  imageStyle: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  nameTxt: {
    fontSize: font.medim,
    fontWeight: '500',
    color: '#525051',
  },
  gmailTxt: {
    fontSize: 12,
    color: '#7a7677',
  },
  iconEdit: {
    position: 'relative',
    top: 20,
  },
  viewStyle: {
    marginTop: 20,
    width: '80%',
    height: '80%',
    borderRadius: 5,
    backgroundColor: '#f2efed',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 35,
    width: '90%',
    paddingLeft: 35,
    paddingTop: 6,
  },
  icon: {
    position: 'relative',
    top: 6,
    left: 25,
    zIndex: 1,
  },
});

export default Profile;
