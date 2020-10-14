import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, AScreenTemplate } from "./src/screens/";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Template: AScreenTemplate,
  },
  {
    initialRouteName: "Template",
    defaultNavigationOptions: {
      title: "GoPlay Sport"
    }
  }
);

export default createAppContainer(navigator);
