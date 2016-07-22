/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class RNBookish extends Component {
  constructor(props) {
    super(props);
    this.state = {books: null};
  }

  // getInitialState() {
  //   return {books: null};
  // }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    // import books from './data/books.json';
    let books = require('./data/books.json');
    this.setState({
      books: books
    });
  }

  renderLoading() {
    return (
      <View style={styles.container}>
        <Text>Loading books</Text>
      </View>
    );
  }

  renderBook(book) {
    return (
      <View style={styles.container}>
        <Image source={{uri: `http://localhost:8081/data/images/thumbnails/${book.asin}.jpg`}} 
          style={styles.thumbnails}
        />

        <View style={styles.bookInfo}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author.join(', ')}</Text>
        </View>
        
      </View>
    );
  }

  render() {
    if(!this.state.books) {
      return this.renderLoading();
    }

    let book = this.state.books[0];
    return this.renderBook(book);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
    fontSize: 20,
    color: '#333333',
    marginBottom: 10,
  },

  author: {
    color: '#cccccc'
  }
});

AppRegistry.registerComponent('RNBookish', () => RNBookish);
