import {View, Text} from 'react-native';
import React from 'react';
import Home from '../../Screen/Home';
import Login from '../../Screen/Lgin&Signup/Login';
import Signup from '../../Screen/Lgin&Signup/Signup';
import Dashboard from '../../Screen/Dashboard';
import SplashScreen from '../../Screen/SplashScreen/SplashScreen';
import Search from '../../Screen/Search';
import Order from '../../Screen/Order';
import Profile from '../../Screen/Profile';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import EditProfile from '../../Screen/EditProfile';
import OrderHistory from '../../Screen/OrderHistory';
import Favourites from '../../Screen/Favourites';
import ChangePassword from '../../Screen/ChangePassword';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'search',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="first-order" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
