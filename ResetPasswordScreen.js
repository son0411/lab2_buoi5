import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ResetPasswordScreen = ({ navigation }) => {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
      })}
      onSubmit={(values) => {
        // Xử lý gửi email đặt lại mật khẩu với Firebase
        console.log(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Reset your password</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <Button title="Send Reset Email" onPress={handleSubmit} color="orange" />

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Go back to Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5 },
  error: { color: 'red', fontSize: 12 },
  link: { color: 'blue', marginTop: 10 },
});

export default ResetPasswordScreen;
