import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    View,
} from 'react-native'

export default class TeamItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        console.log('render item', this.props);
        const textColor = "black";
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    padding: 8,
                    borderWidth: 2,
                    borderColor: 'black',
                    margin: 8,
                  }}
                >
                <Image
                      source={{
                        uri: `https://adf-saratov.ru${this.props.image}`,
                      }}
                      style={{width: 64, height: 64}}
                    />
                <View style={{paddingLeft: 8}}>
                <Text style={{ color: textColor }}>
                        {this.props.name}
                    </Text>
                <Text style={{ color: 'grey' }}>
                      {this.props.city}
                </Text>
                </View>
                </View>
            </TouchableOpacity>
        );
    }
}
