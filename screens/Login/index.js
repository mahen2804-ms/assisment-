import React from 'react';
import {View, Keyboard} from 'react-native';
import Form from '../../components/Form';
import Typography from '../../components/Typography';
import {fields, loginInitialValues} from './fields';

const Login = ({navigation}) => {
  return (
    <View>
      <Form
        fields={fields}
        initialValues={loginInitialValues}
        onSubmit={value => {
          navigation.navigate('Home');
          // console.warn(value);
          Keyboard.dismiss();
        }}
        btnProps={{
          title: 'Login',
        }}
      />

      <Typography style={{textAlign: 'center', marginVertical: 10}}>
        Don't Have Acount? Please{` `}
        <Typography
          style={{
            color: 'red',
            textDecorationLine: 'underline',
          }}>
          Signup
        </Typography>
      </Typography>
    </View>
  );
};

export default Login;
