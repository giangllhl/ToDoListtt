import React, { Component } from "react";
import { AppLoading, AppRegistry } from "expo";
import Navigation from "./navigation";
import Roboto from "native-base/Fonts/Roboto.ttf";
import Roboto_medium from "native-base/Fonts/Roboto_medium.ttf";
import Ionicons from "native-base/Fonts/Ionicons.ttf";
export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  async _cacheResourcesAsync() {
    await Expo.Font.loadAsync({
      Roboto,
      Roboto_medium,
      Ionicons,
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={() => this._cacheResourcesAsync()}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return <Navigation />;
  }
}
