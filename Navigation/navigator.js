import * as Screens from "../Screens/index";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

const StackNavigator = createStackNavigator({
  Home: {
    screen: Screens.Home
  },
  First: {
    screen: Screens.First
  },
  Second: {
    screen: Screens.Second
  }
})
const StackNavigatorThirdScreen = createStackNavigator({
  Third: {
    screen: Screens.Third
  }
})
const SwitchNavigator = createSwitchNavigator({
  App: StackNavigator,
  Ui_screen: StackNavigatorThirdScreen
})
const Navigator = createAppContainer(SwitchNavigator)

export default Navigator;