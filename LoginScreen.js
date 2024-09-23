// LoginScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Đảm bảo import auth từ firebase của bạn

const LoginScreen = ({ navigation }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
      })}
      onSubmit={(values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then(() => {
            navigation.navigate('Home'); // Điều hướng đến Home khi đăng nhập thành công
          })
          .catch((error) => {
            console.error(error);
            Alert.alert('Error', error.message); // Hiển thị thông báo lỗi
          });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome back!</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholderTextColor="#888" // Màu chữ trong ô nhập
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholderTextColor="#888"
          />
          {errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <Button title="Login" onPress={handleSubmit} color="orange" />

          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.link}>Create a new account?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // Màu nền
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10, // Viền tròn cho ô nhập
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff', // Màu nền cho ô nhập
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    marginTop: 15,
    textAlign: 'center',
    textDecorationLine: 'underline', // Gạch chân cho liên kết
  },
});

export default LoginScreen;
