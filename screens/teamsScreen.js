import React, {Component} from 'react';
import { Button, View, Text, ActivityIndicator, Image, FlatList } from 'react-native';

import { getTeams } from '../api/teams';

import TeamItem from '../components/TeamItem';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Команды АДФС',
  };

  constructor(props){
    super(props);
    this.state = {
        loading: true,
        error: false,
    }

    this.fetchData();
  }

  async fetchData() {
    const teams = await getTeams();
    console.log('TeAMS:');
    console.log(teams);

    this.setState({ teams, loading: false });
  }

  _renderItem = ({ item }) => (
    <TeamItem
      id={item.id}
      onPressItem={this._onPressItem}
      name={item.name}
      city={item.city}
      image={item.image}
      key={item.id}
    />
  );

  render() {
    const { navigate, state } = this.props.navigation;
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <View>
      <FlatList
        data={this.state.teams}
        renderItem={this._renderItem}
        keyExtractor={item => item.id}
      />
      </View>
    )
  }
}
