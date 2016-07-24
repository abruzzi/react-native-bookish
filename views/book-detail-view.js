import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Image,
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
        <Image source={{uri: `http://localhost:8081/data/images/thumbnails/${this.props.book.asin}.jpg`}} 
            style={styles.thumbnails}
          />
        <View style={styles.info}>
          <Text style={styles.title}>{this.props.book.title}</Text>
          <Text style={styles.author}>{this.props.book.author.join(', ')}</Text>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 120,
  },
  
  info: {
    flex: 1,
  },

  thumbnails: {
    flex: 1,
    width: 240
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left'
  },

  author: {

  }
});