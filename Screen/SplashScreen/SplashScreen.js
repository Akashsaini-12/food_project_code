import React, {useEffect} from 'react';
import {View, Text, Animated, StyleSheet, ImageBackground} from 'react-native';

const SplashScreen = ({navigation}) => {
  const appNameOpacity = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(appNameOpacity, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
    ])
    .start(() => {
      navigation.replace('Home');
    });
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/splash111.png')}
      style={styles.container}>
      <Animated.Text style={[styles.appName, {opacity: appNameOpacity}]}>
        The Craving 
      </Animated.Text>
      <Animated.Text style={[styles.appName, {opacity: appNameOpacity}]}>
         Solution
      </Animated.Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    fontStyle: 'italic',
    position: 'relative',
    top: '20%',
  },
});

export default SplashScreen;
