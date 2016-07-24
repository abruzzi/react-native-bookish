import React, {Component} from 'react';

import {
	StyleSheet,
	WebView,
	View,
} from 'react-native';

export default class MoreView extends Component {
	render() {
		return (
		<View style={styles.container}>
			<WebView source={{uri: 'https://github.com/abruzzi'}} />
		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});