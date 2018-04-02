import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './screens/homeScreen';
import TeamsScreen from './screens/football/teams/teamsScreen';
import TeamScreen from './screens/football/teams/teamScreen';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Teams: { screen: TeamsScreen },
  Team: { screen: TeamScreen },
});

export default App;
