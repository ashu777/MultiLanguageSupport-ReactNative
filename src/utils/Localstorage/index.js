import AsyncStorage from '@react-native-community/async-storage';

const APP_LANG = 'app_lang';

export const getAppLang = async () => {
  try {
    let appLang = await AsyncStorage.getItem(APP_LANG);
    return appLang;
  } catch (error) {
    console.log('Error fetching', error);
    return null;
  }
};

export const setAppLang = appLang => {
  AsyncStorage.setItem(APP_LANG, appLang);
};
