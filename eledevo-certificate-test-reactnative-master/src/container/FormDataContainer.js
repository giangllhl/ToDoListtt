import * as action from "../action/ToDoAction";
import React from "react";
import FormData from "../component/FormData";
import { connect } from "react-redux";
class FormDataContainer extends React.Component {
  render() {
    console.log("container :::", this.props);
    return (
      <View>
        <FormData {...this.props} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDispatch: (data) => {
      dispatch(action.addItem(data));
    },
    updateDispatch: (data) => {
      dispatch(action.updateItem(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(FormDataContainer);
