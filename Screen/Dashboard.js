import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';


const Dashboard = () => {
 
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 50,
          }}>
          <Image style={styles.imageStyle} source={require('../assets/download1.jpg')} />
        </View>
        <View>
          <View>
            <Text>Akash saini </Text>
            <Text>akashsaini@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.lowerView}>
        <View style={[styles.lowerView1]}>
          <View style={styles.customView}></View>
          <View style={styles.customView}></View>
          <View style={styles.customView}></View>
          <View style={styles.customView}></View>
        </View>
        <View>
          
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#e5d3c7',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 150,
    flexDirection: 'row',
  },
  customView: {
    disply: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1200,
    width: '20%',
    bottom: 20,
    // borderRadius: 30,
    backgroundColor: '#ffffff',
    height: 55,
    position: 'relative',

    shadowColor: '#b7b7b7',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 10,
    shadowRadius: 10,
    elevation: 50,
  },
  lowerView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  lowerView1: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
  },
  imageStyle: {
    width: 75,
    height: 75,
   borderRadius:50
  },
});
export default Dashboard;
