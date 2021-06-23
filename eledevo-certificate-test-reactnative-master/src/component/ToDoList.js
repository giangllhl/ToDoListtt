import React, { Component } from "react";
import { View, Button, Text, TouchableHighlightBase } from "react-native";
import { ScrollView } from "react-native";

class ToDoListScreen extends Component {
  state = {
    name: "",
  };

  handleAdd() {
    this.props.navigation.navigate("Form", { titleParam: "New Item" });
  }

  handleUpdate(id, name) {
    this.props.navigation.navigate("Form", {
      titleParam: "Edit " + id,
      id,
      name,
    });
  }

  render() {
    console.log("props:", this.props);
    let listData = [];
    if (this.props.items) {
      listData = this.props.items.map((item, key) => {
        return (
          <View key={key}>
            <Text>
              {key + 1}
              {item.name}
              <Button
                title="EDIT"
                color="blue"
                onPress={(e) => this.handleUpdate(item.id, item.name)}
              />
              <Button
                title="DELETE"
                color="red"
                onPress={(e) => {
                  this.props.deleteDispatch({ id: item.id });
                }}
              />
            </Text>
          </View>
        );
      });
    }
    return (
      <ScrollView>
        <Button title="ADD" color="green" onPress={() => this.handleAdd()} />
        {listData}
      </ScrollView>
    );
  }
}

export default ToDoListScreen;
