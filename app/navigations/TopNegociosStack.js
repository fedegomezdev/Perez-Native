import {createStackNavigator} from 'react-navigation-stack';
import TopNegocios from '../screens/TopNegocios';


const TopNegociosScreenStacks = createStackNavigator({
    TopNegocios: {
        screen: TopNegocios,
        navigationOptions: ()=> ({
            title : 'Negocios Destacados'
        })
    }
})


export default TopNegociosScreenStacks;