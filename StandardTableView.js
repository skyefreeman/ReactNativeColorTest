import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity
} from 'react-native';

import StandardCellView from './StandardCellView.js'

const rows = [
    'red', 'green', 'blue', 'yellow'
];

const styles = StyleSheet.create({
    container: {
	flex: 1,
	backgroundColor: '#fff'
    },
    separators: {
	backgroundColor: '#BBBBBB',
	height: StyleSheet.hairlineWidth,
	marginLeft: 8
    }
});

export default class StandardTableView extends Component {
    
    static navigationOptions = {
	title: "Colors!",
	headerStyle: {
	    backgroundColor: '#fff'
	},
    };

    constructor(props) {
	super(props);

	const dataSource = new ListView.DataSource({
	    rowHasChanged: (r1, r2) => r1 !== r2
	})
	this.state = { dataSource: dataSource.cloneWithRows(rows) };
    }
    
    render() {
	return (
	    <View style = { styles.container }>
	      <ListView
		dataSource = { this.state.dataSource }
		renderRow = { (rowData, rowID) => this.renderRow(rowData) }
		renderSeparator = { (s,i) => <View style={ styles.separators } key={i}></View>}
		/>
	    </View>
	);
    }

    renderRow(rowData, cellID) {
	return (
	    <TouchableOpacity onPress={() => this.handleCellPress(rowData)}>
	      <StandardCellView name={rowData} />
	    </TouchableOpacity>
	)
    }

    handleCellPress(rowData) {
	const { navigate } = this.props.navigation;
	navigate('ColorScreen', {color: rowData});
    }
}


