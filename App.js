import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, ListScreen, ComponentsDemo, ImageScreen, StateScreen, SquareScreen, TextScreen, FlexBoxScreen, PatternsScreen } from "./src/screens/";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Lists: ListScreen,
    Components: ComponentsDemo,
    Images: ImageScreen,
    States: StateScreen,
    Squares: SquareScreen,
    Text: TextScreen,
    FlexBox: FlexBoxScreen,
    Patterns: PatternsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "GoPlaySport",

    },
  }
);

export default createAppContainer(navigator);
