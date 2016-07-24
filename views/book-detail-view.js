import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BookDetailView extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.book.title}</Text>
        <Text>{this.props.book.author.join(', ')}</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  }
});