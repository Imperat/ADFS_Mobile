import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Добро пожаловать в АДФС',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button title="Команды" onPress={() => navigate('Teams')}/>
        <Button title="Чемпионаты" onPress={() => true}/>
        <Button title="Стадионы" onPress={() => true}/>
        <Button title="Игроки" onPress={() => true}/>
      </View>
    );
  }
}
