import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={{ uri: 'https://example.com/path/to/logo.png' }} // Thay thế bằng link logo của bạn
        style={styles.logo} 
      />
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email').required('Email is required'),
          password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        })}
        onSubmit={(values) => {
          // Xử lý đăng ký với Firebase
          console.log(values);
          
          // Chuyển đến màn hình đăng nhập sau khi đăng ký thành công
          navigation.navigate('Login');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <Text style={styles.title}>Create a new account!</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholderTextColor="#999"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Enter password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholderTextColor="#999"
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              placeholderTextColor="#999"
            />
            {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Already have an account?</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    marginTop: 15,
    textAlign: 'center',
  },
});

export default SignupScreen;
