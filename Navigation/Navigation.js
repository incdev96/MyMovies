import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from '../Components/Search';
import FilmDetail from '../Components/FilmDetail'

const searchStackNavigator = createStackNavigator({
	Search: {
		screen : Search,
		navigationOptions: {
			title: 'Rechercher'
		}
	},
	FilmDetail: {
		screen: FilmDetail
	}
})

export default createAppContainer(searchStackNavigator);