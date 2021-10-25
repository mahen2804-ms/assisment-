import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Typography from '../Typography';
import styles from './styles';
import Visibilityon from '../../assets/Icons/visibility.svg';
import Visibilityoff from '../../assets/Icons/visibility_off.svg';
import {BorderlessButton} from 'react-native-gesture-handler';

const Input = ({
  field: {value, name},
  form: {handleChange, handleBlur, touched, errors},
  innerRef,
  secureTextEntry,
  ...rest
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={{margin: 8}}>
      <TextInput
        ref={innerRef}
        style={styles.input}
        name={name}
        value={value}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        secureTextEntry={!!secureTextEntry && !isPasswordVisible}
        {...rest}
      />
      {touched[name] && errors[name] && (
        <Typography variant="error">{errors[name]}</Typography>
      )}

      {secureTextEntry && (
        <BorderlessButton
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 10,
            marginHorizontal: 15,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            width: 24,
          }}
          onPress={() => setPasswordVisible(!isPasswordVisible)}>
          {isPasswordVisible ? (
            <Visibilityon height={24} width={24} fill="#ffae42" />
          ) : (
            <Visibilityoff height={24} width={24} fill="#ffae42" />
          )}
        </BorderlessButton>
      )}
    </View>
  );
};

export default Input;
