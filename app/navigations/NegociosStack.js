import {createStackNavigator} from 'react-navigation-stack';
import NegociosScreen from '../screens/Negocios';

const NegociosScreenStacks= createStackNavigator({
    Negocios: {
        screen:NegociosScreen,
        navigationOptions: ()=> ({
            title:"Negocios"
        })
    }
});

export default NegociosScreenStacks;