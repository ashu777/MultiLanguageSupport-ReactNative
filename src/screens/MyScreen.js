import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { strings } from '../i18n';

class MyScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }

  render() {
    return (
      <View>
       <Text>{strings('name')}</Text>
      </View>
    );
  }
}

export default MyScreen;
