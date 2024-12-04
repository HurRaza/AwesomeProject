import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

type CustomInputProps = {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  icon?: any;
  customIcon?: any;
  onIconPress?: () => void;
};

const CustomInput = ({
  label,
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
  icon,
  customIcon,
  onIconPress,
}: CustomInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
    if (onIconPress) {
      onIconPress();
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#B2A59D"
          secureTextEntry={isPasswordVisible}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={handlePasswordToggle}>
          <Image style={styles.icon} source={customIcon || icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#ca4560',
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    fontSize: 18,
    color: 'black',
    flex: 1,
    paddingVertical: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 10,
  },
});

export default CustomInput;
