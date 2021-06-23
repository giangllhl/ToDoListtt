import React from "react";
import { View } from "react-native";
import FormDataContainer from "../container/FormDataContainer"
class FormDataScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('titleParam', '!!!No Title!!!'),
    };
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FormDataContainer {...this.props} />
      </View>
    );
  }
}

export default FormDataScreen
