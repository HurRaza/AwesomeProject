import Toast from 'react-native-toast-message';

export const showToast = (
  message: string,
  type: 'success' | 'error' = 'error',
) => {
  if (type === 'error') {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
      visibilityTime:3000
    });
  } else {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: message,
    });
  }
};
