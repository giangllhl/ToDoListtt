import React from "react";
import { View } from "react-native";
import ToDoContainer from "../container/ToDoContainer"
class ToDoListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('titleParam', '!!!No Title!!!'),
    };
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ToDoContainer {...this.props} />
      </View>
    );
  }
}

export default ToDoListScreen
