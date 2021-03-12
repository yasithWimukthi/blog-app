import {createNavigator,createAppContainer} from 'react-navigation';
import IndexScreen from "./src/screens/indexScreen";

const navigator = createNavigator(
    {
        Index : IndexScreen
    },{
        initialRouteName: 'index',
        defaultNavigationOptions: {
            title: 'blog'
        }
    }
);

export default createAppContainer(navigator);
