import React from "react";
import ToDoList from "../component/ToDoList";
import * as action from "../action/ToDoAction";
import { View } from "react-native";
import { connect } from "react-redux";

class ToDoContainer extends React.Component {
  componentDidMount() {
    this.props.getListItem();
  }

  render() {
    return (
      <View>
        <ToDoList {...this.props} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items.listItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListItem: () => {
      dispatch(action.getItem());
    },
    addDispatch: (data) => {
      dispatch(action.addItem(data));
    },
    updateDispatch: (data) => {
      dispatch(action.updateItem(data));
    },
    deleteDispatch: (data) => {
      dispatch(action.deleteItem(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer);
