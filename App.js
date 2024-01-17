import * as React from 'react';
import {View, Text} from 'react-native';
import Navigation from './Component/Navigation/Navigation'
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  );
}

export default App;

