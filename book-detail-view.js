import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BookDetailView extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <Text>{this.props.author.join(', ')}</Text>
      </View>
    )
  }
};