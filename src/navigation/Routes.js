import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import Dashboard from '../screen/Dashboard/Dashboard';
import ClientCreate from '../screen/ClientCreate/ClientCreate';
import Login from '../screen/Login/Login';
import PinScreen from '../screen/PinScreen/PinScreen';
import Splash from '../screen/Splash/Splash';
import ERPwebview from '../screen/ERPwebview/ERPwebview';
import AddMoreAttach from '../screen/AddMoreAttache/AddMoreAttach';

const AppSwitchNavigator = createSwitchNavigator({
  splash: { screen: Splash },
  pinScreen: { screen: PinScreen },
  dashboard: { screen: Dashboard },
  Login: { screen: Login },
  clientCreate: { screen: ClientCreate },
  ERPwebview: { screen: ERPwebview },
  AddMoreAttach: { screen: AddMoreAttach },
},
  {
    initialRouteName: 'dashboard'
  });


export default AppRoutes = createAppContainer(AppSwitchNavigator);