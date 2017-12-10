import React, {Component} from 'react';
import { Button, View } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Добро пожаловать в АДФС',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button title="Команды" onPress={() => navigate('Teams', { name: 'Jane' })}/>
        <Button title="Чемпионаты"/>
        <Button title="Стадионы"/>
        <Button title="Игроки" />
      </View>
    );
  }
}
