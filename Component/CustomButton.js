import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({ title, onPress, fontSize }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <LinearGradient
        colors={['#d09868', '#d09868', '#d09868']} // Updated color values
        style={styles.buttonGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[styles.buttonText, { fontSize: fontSize, }]}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    width: '95%',
  },
  buttonGradient: {
    borderRadius: 8,
    padding: 10,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: "bold"
  },
});

export default CustomButton;
