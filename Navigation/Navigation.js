import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from '../Components/Search';

const searchStackNavigator = createStackNavigator({
	Search: {
		screen : Search,
		navigationOptions: {
			title: 'Rechercher'
		}
	}
})

export default createAppContainer(searchStackNavigator);