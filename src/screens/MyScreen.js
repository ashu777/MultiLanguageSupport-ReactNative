import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {strings} from '../i18n';
import {CustomPicker} from 'react-native-custom-picker';
import I18n from 'react-native-i18n';
import {setAppLang, getAppLang} from '../utils/Localstorage';
class MyScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languageList: ['English', 'Hindi'],
      language: '',
    };
  }
  componentDidMount = async () => {
    const appLang = await getAppLang();
    if (appLang) {
      I18n.locale = appLang;
      if (appLang == 'hi') {
        this.setState({language: 'Hindi'});
      } else {
        this.setState({language: 'English'});
      }
    } else {
      I18n.locale = 'en';
    }
  };
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <CustomPicker
          style={{width: '100%', margin: 5}}
          placeholder={this.state.language}
          options={this.state.languageList}
          showsVerticalScrollIndicator={false}
          onValueChange={value => {
            this.setState(
              {
                language: value,
              },

              value == 'Hindi'
                ? ((I18n.locale = 'hi'), setAppLang('hi'))
                : ((I18n.locale = 'en'), setAppLang('en')),
            );
          }}
        />

        <Text>{strings('name')}</Text>
      </View>
    );
  }
}

export default MyScreen;
