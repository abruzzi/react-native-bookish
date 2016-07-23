import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ListView,
  View
} from 'react-native';

export default class BookListItemView extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render() {
    return (
      <View style={styles.book} >
          <Image source={{uri: `http://localhost:8081/data/images/thumbnails/${this.props.book.asin}.jpg`}} 
            style={styles.thumbnails}
          />

          <View style={styles.bookInfo}>
            <Text style={styles.title}>{this.props.book.title}</Text>
            <Text style={styles.author}>{this.props.book.author.join(', ')}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  book: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 5,

    borderTopWidth: 1, 
    borderTopColor:'#eeeeee'
  },

  thumbnails: {
    width: 38,
    height: 50
  },

  bookInfo: {
    flex: 1,
    marginLeft: 10
  },

  title: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 8,
  },

  author: {
    color: '#666666'
  }
});
