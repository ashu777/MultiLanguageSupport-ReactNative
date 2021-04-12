/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MyScreen from './src/screens/MyScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MyScreen);
