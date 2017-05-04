import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const cellStyles = StyleSheet.create({
    container: {
	flex: 1,
	height: 44,
	justifyContent: 'center',
	alignItems: 'flex-start',
	backgroundColor: 'white',
	marginLeft: 8
    },
});

export default class StandardCellView extends Component {
    render() {
	return (
	    <View style = { cellStyles.container }>
	      <Text> {this.props.name} </Text>
	    </View>
	)
    }
}

