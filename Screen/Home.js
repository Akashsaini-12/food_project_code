import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  const firstWord = 'Welcome to Craving Solution!.';
  const secondWord = 'Craving for fresh homemade food!.';
  const thirdWord = 'Find Your Favourite Food here!.';

  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);

  const animatedValuesFirst = useRef(
    firstWord.split('').map(() => new Animated.Value(0)),
  ).current;

  const animatedValuesSecond = useRef(
    secondWord.split('').map(() => new Animated.Value(0)),
  ).current;

  const animatedValuesThird = useRef(
    thirdWord.split('').map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    const firstAnimation = Animated.stagger(
      100,
      animatedValuesFirst.map(value =>
        Animated.timing(value, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ),
    );

    const secondAnimation = Animated.stagger(
      100,
      animatedValuesSecond.map(value =>
        Animated.timing(value, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ),
    );

    const thirdAnimation = Animated.stagger(
      100,
      animatedValuesThird.map(value =>
        Animated.timing(value, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ),
    );

    firstAnimation.start(() => {
      setShowSecondText(true);
      secondAnimation.start(() => {
        setShowThirdText(true);
        thirdAnimation.start();
      });
    });
  }, []);

  return (
    <ImageBackground
      source={require('../assets/home_cleanup.png')}
      style={styles.container}>
      <Image
        source={require('../assets/homeburger.png')}
        style={styles.image}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 60,
            marginRight: 50,
          }}>
          {firstWord.split('').map((char, index) => (
            <Animated.Text
              key={index}
              style={{
                opacity: animatedValuesFirst[index],
                fontSize: 25,
                fontWeight: 'bold',
                color: '#d9a172',
                fontStyle: 'italic',
              }}>
              {char}
            </Animated.Text>
          ))}
        </View>
        {showSecondText && (
          <View style={{flexDirection: 'row', marginTop: 5, marginRight: 120}}>
            {secondWord.split('').map((char, index) => (
              <Animated.Text
                key={index}
                style={{
                  opacity: animatedValuesSecond[index],
                  fontSize: 17,
                  fontWeight: '500',
                  color: '#8b8b8b',
                  fontStyle: 'italic',
                }}>
                {char}
              </Animated.Text>
            ))}
          </View>
        )}
        {showThirdText && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
              marginRight: 140,
            }}>
            {thirdWord.split('').map((char, index) => (
              <Animated.Text
                key={index}
                style={{
                  opacity: animatedValuesThird[index],
                  fontSize: 17,
                  fontWeight: '500',
                  color: '#8b8b8b',
                  fontStyle: 'italic',
                }}>
                {char}
              </Animated.Text>
            ))}
          </View>
        )}
      </View>
      <View style={{marginTop: '50%'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.iconView}>
            <Icon name="arrow-right" size={25} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 240,
    height: 240,
    resizeMode: 'cover',
    marginTop: 80,
  },
  iconView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cf9567',
    height: 40,
    width: 40,
    borderRadius: 40,

    marginLeft: '80%',
  },
});

export default Home;
