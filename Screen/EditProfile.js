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
import React from 'react';
import CustomButton from '../Component/CustomButton';
import CustomHeader from '../Component/CustomHeader';
import Icon from 'react-native-vector-icons/Feather';
import { font } from '../Component/Fonts';
import { color } from '../Component/Color';
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

const TextInputs = ({title, placeholder}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: 15,
      }}>
      <Text style={{marginBottom:5}}>{title}</Text>
      <TextInput placeholder={placeholder} style={[styles.input]} />
    </View>
  );
};

const EditProfile = ({navigation}) => {
  goBack = () => {
    navigation.goBack();
  };
  const handleEdit = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <CustomHeader title="Edit Profile" onPress={goBack} />
      </View>
      <View style={styles.uprConatiner}>
        <Card onPress={handleEdit}></Card>
      </View>
     
      <View style={styles.dwnConatiner}>
        <View style={styles.viewStyle}>
          <TextInputs   title="Name" placeholder="Kristin watson" />
          <TextInputs   title="Email" placeholder="Kristinwatson@gmail.com" />
          <TextInputs  title="Phone Number" placeholder="+911223344455" />
          <TextInputs   title="Address" placeholder="Delhi" />
          <TextInputs   title="Add New Phone Number" placeholder="+911223344455" />
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <CustomButton
            title="SAVE CHANGES"
            height={50}
            width={500}
            color="white"
            backgroundColor="#d89e6e"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: 'white',
  },
  headerView: {
    display: 'flex',
    marginLeft: 20,
    marginTop: 30,
    width: '90%',
  },

  uprConatiner: {
    width: '100%',
    height: '15%',
    marginBottom: 10,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  dwnConatiner: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '60%',
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
    backgroundColor:'#fff',
    shadowColor: '#b7b7b7',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 200,
    shadowRadius: 100,
    elevation: 5,
  },
  imageStyle: {
    width: 75,
    height: 80,
    borderRadius:50
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
    display: 'flex',
    
    // gap: 10,
    marginTop: 10,
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
    paddingLeft: 10,
    paddingTop: 10,
  },
  icon: {
    position: 'relative',
    top: 6,
    left: 25,
    zIndex: 1,
  },
});

export default EditProfile;
