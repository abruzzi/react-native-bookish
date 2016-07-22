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

import books from './data/books.json';

class RNBookish extends Component {

  
  render() {
    let book = books[0];
    let bookThumbnails = `http://localhost:8081/data/images/thumbnails/${book.asin}.jpg`;
    
    return (
      <View style={styles.container}>
        <Image source={{uri: bookThumbnails}} 
          style={styles.thumbnails}
        />

        <View style={styles.bookInfo}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author.join(', ')}</Text>
        </View>
        
      </View>
    );
  }
}

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
