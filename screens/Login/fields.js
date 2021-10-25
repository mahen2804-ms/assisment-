import {createRef} from 'react';
import Input from '../../components/Input';
const passwordInputRef = createRef();
const mobileno = createRef();

export const fields = [
  {
    placeholder: 'Username',
    autoCapitalize: 'none',
    keyboardType: 'email-address',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      mobileno.current.focus();
    },
    name: 'username',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
      }
      return '';
    },
  },
  {
    placeholder: 'Mobile No.',
    keyboardType: 'number-pad',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      passwordInputRef.current.focus();
    },
    innerRef: mobileno,
    name: 'mobileno',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      } else if (value.length != 10) {
        return 'Please enter valid phone number.';
      }
      return '';
    },
  },
  {
    placeholder: 'Password',
    secureTextEntry: true,
    returnKeyType: 'done',
    innerRef: passwordInputRef,
    name: 'password',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

export const loginInitialValues = {
  username: '',
  mobileno: '',
  password: '',
};
