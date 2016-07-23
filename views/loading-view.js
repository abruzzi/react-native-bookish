import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class LoadingView extends Component {
	render() {
		return (
	      <View style={styles.loading}>
	        <Text>Loading books</Text>
	      </View>
	    );	
	}
}

const styles = StyleSheet.create({
  loading: {    
  },
});