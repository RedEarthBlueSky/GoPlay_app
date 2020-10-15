import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, AScreenTemplate, ListScreen, ComponentsDemo, ImageScreen } from "./src/screens/";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Lists: ListScreen,
    Components: ComponentsDemo,
    Images: ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "GoPlay Sport"
    }
  }
);

export default createAppContainer(navigator);
