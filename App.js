import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, AScreenTemplate, ListScreen } from "./src/screens/";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Template: AScreenTemplate,
    Lists: ListScreen
  },
  {
    initialRouteName: "Lists",
    defaultNavigationOptions: {
      title: "GoPlay Sport"
    }
  }
);

export default createAppContainer(navigator);
