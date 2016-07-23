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

import BookListView from './views/book-list-view';
import BookDetailView from './views/book-detail-view';
import LoadingView from './views/loading-view';

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

  render() {
    if(!this.state.loaded) {
      return <LoadingView />;
    }
    
    return <BookListView books={this.state.dataSource} />;
  }
};

AppRegistry.registerComponent('RNBookish', () => RNBookish);
