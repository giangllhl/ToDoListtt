import React from "react";
import { Root } from "native-base";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './src/screen/HomeScreen'
import ToDoListScreen from './src/screen/ToDoListScreen'
import FormDataScreen from './src/screen/FormDataScreen'
import { Provider } from 'react-redux'
import store from './store'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ToDoListScreen,
    Form: FormDataScreen
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <Root>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Root>
  }
}
