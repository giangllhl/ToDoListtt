import React from "react";
import Item from "../components/Item";
import * as action from "../actions/ItemAction";
import { connect } from "react-redux";

class ItemContainer extends React.Component {
  componentDidMount() {
    this.props.initLoad();
  }

  render() {
    return (
      <div>
        {this.props.isL ? (
          <img src="https://i.pinimg.com/originals/df/47/bd/df47bd458bf9c7b5e55a8c248cacde0e.gif" />
        ) : (
          <Item {...this.props} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isL: state.items.isLoading,
    items: state.items.listItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initLoad: () => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
