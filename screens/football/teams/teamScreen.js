import React, {Component} from 'react';
import {
  Button,
  View,
  Text,
  ActivityIndicator,
  Image,
  FlatList,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Команда',
  };

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      error: false,
    }
  }

  render() {
    const { navigate, state } = this.props.navigation;

    if (this.state.loading) {
      return (
        <View>
           <Text>Команда "{state.params.team.name}"</Text>
           <Image
             source={{
               uri: `https://adf-saratov.ru${state.params.team.image}`,
             }}
             style={{width: 128, height: 128}}
           />
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
            <Text style={{color: 'grey'}}>{item.city}</Text>
          </View>
        )}
      />
      </View>
    )
  }
}
