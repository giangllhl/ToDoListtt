import React from "react";
import { View, Button, Text } from "react-native";
import { TextInput } from "react-native";

class FromData extends React.Component {
  state = {
    name: "",
  };

  handlePress() {
    let id = this.props.navigation.getParam("id", null);
    if (id != null) {
      let data = {
        id: id,
        name: this.state.name,
      };
      this.props.updateDispatch(data);
    } else {
      this.props.addDispatch(this.state);
    }
    this.props.navigation.navigate("List", { titleParam: "To Do List" });
  }

  render() {
    console.warn(this.props);
    let btnName = "Add";
    let btnColor = "green";
    let id = this.props.navigation.getParam("id", null);
    if (id) {
      btnName = "Edit";
      btnColor = "blue";
    }
    let name = this.props.navigation.getParam("name", null);
    return (
      <View>
        <TextInput
          defaultValue={name}
          onChange={(e) => this.setState({ name: e })}
        />
        <Button
          title={btnName}
          color={btnColor}
          onPress={() => this.handlePress()}
        />
        ádsdsdsdsdsd
      </View>
    );
  }
}

export default FromData;
