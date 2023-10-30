/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigator from './src/Navigator';
import 'react-native-gesture-handler';
import App from './App';

AppRegistry.registerComponent(appName, () => App);
