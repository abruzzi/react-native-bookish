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
  ListView,
  View
} from 'react-native';

class RNBookish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let books = require('./data/books.json');
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(books),
      loaded: true
    });
  }

  renderLoading() {
    return (
      <View style={styles.loading}>
        <Text>Loading books</Text>
      </View>
    );
  }

  renderBook(book) {
    return (
      <View style={styles.book} >
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
    if(!this.state.loaded) {
      return this.renderLoading();
    }

    return (
      <View style={styles.container}>
        <ListView style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this.renderBook}
        >
        </ListView>
      </View>        
    )
  }
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },

  loading: {
    
  },

  book: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
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
  },

  listView: {
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: '#FFFFFF'
  }
});

AppRegistry.registerComponent('RNBookish', () => RNBookish);
