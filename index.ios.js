/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  ListView,
  Text,
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
      loaded: false,
      selectedTab: 'list',
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
    
    return (
      <TabBarIOS
        unselectedTintColor="#cccccc"
        tintColor="#ffffff"
        barTintColor="#F68D2E">

        <TabBarIOS.Item
          title="Book List"
          systemIcon="recents"
          selected={this.state.selectedTab === 'list'}
          onPress={() => {
            this.setState({
              selectedTab: 'list',
            });
          }}>
          <View>
            <BookListView books={this.state.dataSource} />  
          </View>          
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="favorites"
          title="Favorites"
          selected={this.state.selectedTab === 'favorites'}
          onPress={() => {
            this.setState({
              selectedTab: 'favorites',
            });
          }}>
          <Text>favorites...</Text>
        </TabBarIOS.Item>


        <TabBarIOS.Item
          systemIcon="more"
          title="More"
          selected={this.state.selectedTab === 'more'}
          onPress={() => {
            this.setState({
              selectedTab: 'more',
            });
          }}>
          <Text>More...</Text>
        </TabBarIOS.Item>

      </TabBarIOS>
    )
  }
};

AppRegistry.registerComponent('RNBookish', () => RNBookish);
