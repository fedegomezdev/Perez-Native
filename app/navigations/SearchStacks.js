import {createStackNavigator} from 'react-navigation-stack';
import Search from '../screens/Search';


const SearchScreenStack = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: ()=> ({
            title : 'Buscador de Negocios'
        })
    }
})


export default SearchScreenStack;