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

import BookDetailView from './views/book-detail-view';
import LoadingView from './views/loading-view';
import BookListItemView from './views/book-list-item-view';

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
      <LoadingView />
    );
  }

  renderBookItem(book) {
    return (
      <BookListItemView book={book} />
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
          renderRow={this.renderBookItem}
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

  listView: {
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: '#FFFFFF'
  }
});

AppRegistry.registerComponent('RNBookish', () => RNBookish);
