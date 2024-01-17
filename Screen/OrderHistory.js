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
  import CustomButton from '../Component/CustomButton';
  import CustomHeader from '../Component/CustomHeader';
  import Icons from 'react-native-vector-icons/AntDesign';
  
  const {height, width} = Dimensions.get('window');
  
  const Card = ({title, photo}) => {
    return (
      <View style={styles.cardView}>
        <View>
          <Image style={styles.imageStyle} source={photo} />
        </View>
        <View style={{display: 'flex', gap: 5, marginTop: 10}}>
          <Text style={styles.pastaTxt}>{title}</Text>
          <View style={{display: 'flex', flexDirection: 'row', gap: 8}}>
            <Text style={styles.dateTxt}> Rating 4.7</Text>
            <TouchableOpacity>
              <Icons name="staro" color="#b0acad" size={18} />
            </TouchableOpacity>
  
            <TouchableOpacity>
              <Icons
                name="right"
                size={20}
                color="#b0acad"
                style={styles.rightArrow}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  const OrderHistory = ({navigation}) => {
    goBack = () => {
      navigation.goBack();
    };
  
    const Data = [
      {
        id: '1',
        Txt: 'Tandori Chicken',
        photo: require(`../assets/photo1.png`),
      },
      {
        id: '2',
        Txt: 'Chicken Salad',
        photo: require(`../assets/photo2.png`),
      },
      {
        id: '3',
        Txt: 'French Fries',
        photo: require(`../assets/photo3.png`),
      },
      {id: '4', Txt: 'Tom Yum Soup', photo: require(`../assets/photo4.png`)},
      {
        id: '5',
        Txt: 'Chicken Thali',
        photo: require(`../assets/photo5.png`),
      },
      {
        id: '6',
        Txt: 'Prawn Ramen with Egg',
        photo: require(`../assets/photo5.png`),
      },
    ];
  
    return (
      // <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <CustomHeader title=" My Favourites" onPress={goBack} />
        </View>
        <View style={{display: 'flex', alignItems: 'center', gap: 20}}>
          <FlatList
            data={Data}
            renderItem={({item}) => <Card title={item.Txt} photo={item.photo} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      // </ScrollView>
    );
  };
  const styles = StyleSheet.create({
    container: {
      height: height,
      width: width,
    },
    headerView: {
      display: 'flex',
      marginLeft: 20,
      marginTop: 30,
      width: '90%',
    },
    imageStyle: {
      height: 94,
      width: 110,
      borderRadius: 10,
    },
    cardView: {
      display: 'flex',
      flexDirection: 'row',
      width: 330,
      // borderWidth: 1,
      borderRadius: 10,
      gap: 10,
      borderColor: 'black',
      backgroundColor: '#fbfbfb',
      marginBottom: 15,
    },
    pastaTxt: {
      fontWeight: 'bold',
      marginTop: 10,
      color: 'black',
    },
    deliverdView: {display: 'flex', flexDirection: 'row', gap: 70},
    deliverdTxt: {color: '#5dac8d', fontWeight: '600'},
    dateTxt: {
      fontWeight: '500',
    },
    orderView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnView: {
      height: 45,
      width: '80%',
      backgroundColor: '#fbfbfb',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    rightArrow: {
      position: 'relative',
      bottom: 10,
      left: 80,
    },
  });
  export default OrderHistory;
  