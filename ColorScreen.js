import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
	flex: 1,
    },
});

export default class ColorScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
	title: `${navigation.state.params.color}`,
	headerStyle: {
	    backgroundColor: '#fff',
	}
    });
    
    render() {
	const { params } = this.props.navigation.state;
	return (
	    <View style = {{ flex: 1, backgroundColor: params.color }}></View>
	);
    }
}
