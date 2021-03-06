import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, PatternsScreen, FoodSearch } from "./src/screens/";
import { ListScreen, ComponentsDemo, ImageScreen, StateScreen, SquareScreen, TextScreen, FlexBoxScreen } from './src/screens/patterns'

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
    Food: FoodSearch
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "GoPlaySport",
    },
  }
);

export default createAppContainer(navigator);
