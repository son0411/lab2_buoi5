// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('Login'); // Điều hướng về trang Login khi đăng xuất
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
