import {
  View,
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import CustomHeader from '../Component/CustomHeader';
import Navigation from '../Component/Navigation/Navigation';

const {height, width} = Dimensions.get('window');

const Order = ({Navigation}) => {
  const goBack =()=>{
Navigation.goBack();
  }
  return (
    <View atyle={styles.container}>
      <View style={styles.headerView}>
        <CustomHeader title="" onPress={goBack} />
      </View>
      <View style={styles.upperView}>
        <Image
          style={styles.imageStyle}
          source={require('../assets/box11.png')}
        />
      </View>
      <View style={styles.downView}>
        <Text style={styles.cardTxt}>Your Cart Is Empty!</Text>
        {/* <View>
        <Text>Contrary to popular belief, Lorem ipsum is </Text>
        <Text>not simply random text. it has roots in a piece of </Text>
        <Text>classical latin literature from 45 Bc</Text>
        </View> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#fffff',
  },
  upperView: {
    width: '100%',
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: '100%',
    height: 400,
  },
  headerView: {
    display: 'flex',
    marginLeft: 20,
    marginTop: 20,
    width: '90%',
  },
  downView: {
    paddingTop: 30,
    display: 'flex',
    // justifyContent: 'center',
    alignSelf: 'center',
  },
  cardTxt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Order;
