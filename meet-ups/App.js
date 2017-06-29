import React from 'react';
import {
  AppLoading,
} from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { cachedFonts } from './helpers';
import Root from './src/Root';

EStyleSheet.build(Colors);

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  componentWillMount() {
    this._loadAssetAsync();
  }

  async _loadAssetAsync() {
    const fontAssets = cachedFonts([
      {
        opnsen: require('./assets/fonts/OpenSans-Regular.ttf'),
      },
      {
        opnsenBold: require('./assets/fonts/OpenSans-Bold.ttf'),
      },
      {
        opnsenLight: require('./assets/fonts/OpenSans-Light.ttf'),
      },
      {
        opnsenItalic: require('./assets/fonts/OpenSans-Italic.ttf'),
      },
    ]);

    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return <Root />;
  }
}
