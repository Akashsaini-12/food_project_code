import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const CustomHeader = ({title,text, onPress}) => {
  return (
    <View >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={onPress}>
          <Icon name="left" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={styles.frgtTxt}>{title}</Text>
        <View></View>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={styles.txt}>
         {text}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  frgtTxt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  txt: {
    color: '#8e8c8d',
  },
});

export default CustomHeader;
