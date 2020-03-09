import { AppRegistry } from 'react-native';
import App from './App.js';
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import { store } from './src/Store'

AppRegistry.registerComponent(appName, () => App);
