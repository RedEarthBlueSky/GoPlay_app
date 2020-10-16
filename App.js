import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, ListScreen, ComponentsDemo, ImageScreen, StateScreen, SquareScreen, TextScreen } from "./src/screens/";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Lists: ListScreen,
    Components: ComponentsDemo,
    Images: ImageScreen,
    States: StateScreen,
    Squares: SquareScreen,
    Text: TextScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "GoPlay Sport"
    }
  }
);

export default createAppContainer(navigator);
