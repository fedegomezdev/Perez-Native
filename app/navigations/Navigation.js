import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements'; 


import NegociosScreenStacks from './NegociosStack';
import TopNegociosScreenStacks from './TopNegociosStack';
import SearchScreenStack from './SearchStacks';
import CuentaScreenStacks from './CuentaStack';


const NavigationStacks = createBottomTabNavigator(
    {
        Negocios: {
            screen:NegociosScreenStacks,
            navigationOptions:()=> ({
                tabBarLabel:"Negocios",
                tabBarIcon: ({tintColor}) => (
                    <Icon 
                        type="material-community"
                        name="store"
                        size={22}
                        color={tintColor}
                    />
                )
            })
        },
        TopNegocios: {
            screen:TopNegociosScreenStacks,
            navigationOptions: ()=> ({
                tabBarLabel:"Destacados",
                tabBarIcon: ({tintColor}) => (
                    <Icon 
                        type="material-community"
                        name="star-outline"
                        size={22}
                        color={tintColor}
                    />
                )
            })
        },
        Search: {
            screen:SearchScreenStack,
            navigationOptions: ()=> ({
                tabBarLabel:"Buscar",
                tabBarIcon: ({tintColor}) => (
                    <Icon 
                        type="material-community"
                        name="magnify"
                        size={22}
                        color={tintColor}
                    />
                )
            })
        },
        Cuenta: {
            screen:CuentaScreenStacks,
            navigationOptions: ()=> ({
                tabBarLabel:"Cuenta",
                tabBarIcon: ({tintColor}) => (
                    <Icon 
                        type="material-community"
                        name="account"
                        size={22}
                        color={tintColor}
                    />
                )
            })
        }

    },
    {
        initialRouteName:"Negocios",
        order : ['Negocios', 'TopNegocios', 'Search', 'Cuenta'],
        tabBarOptions: {
            inactiveTintColor:"#646464",
            activeTintColor:"#00a680"
        }
    }
);


export default createAppContainer(NavigationStacks);