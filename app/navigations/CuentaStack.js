import {createStackNavigator} from 'react-navigation-stack';
import CuentaScreen from '../screens/Cuenta';

const CuentaScreenStacks= createStackNavigator({
    Negocios: {
        screen:CuentaScreen,
        navigationOptions: ()=> ({
            title:"Mi Cuenta"
        })
    }
});

export default CuentaScreenStacks;