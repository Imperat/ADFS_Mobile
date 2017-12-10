import React, {Component} from 'react';
import { Button, View, Text, ActivityIndicator, Image, FlatList } from 'react-native';

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
    const response = await fetch("https://adf-saratov.ru/logic/api/teams/");
    const json = await response.json();
    console.log(response);
    console.log(json);
    this.setState({ teams: json || [], loading: false });
  }

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
        renderItem={({item}) => (
          <View>
            <Image
              source={{
                uri: `https://adf-saratov.ru${item.image}`,
              }}
              style={{width: 64, height: 64}}
            />
            <Text>{item.name}</Text>
            <Button onPress={() => navigate('Team', { team: item })} title="Learn More"/>
            <Text style={{color: 'grey'}}>{item.city}</Text>
          </View>
        )}
      />
      </View>
    )
  }
}
