import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import IndexScreen from "./src/screens/indexScreen";


const navigator = createStackNavigator(
    {
        Index: IndexScreen
    },
    {
        initialRouteName: 'Index',
        defaultNavigationOptions:{
            title:'Blogs'
        }
    }
);

export default createAppContainer(navigator);
