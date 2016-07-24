import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  ListView,
  TextInput,
  View
} from 'react-native';

import LoadingView from './loading-view';
import BookListItemView from './book-list-item-view';

export default class BookListView extends Component {
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
    let books = require('../data/books.json');
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(books),
      loaded: true
    });
  }

  renderBookItem(book) {
    return (
      <BookListItemView book={book} />
    );
  }

  search(term) {
    let books = require('../data/books.json');
    let filtered = books.filter((book) => book.author.join(' ').match(term));

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(filtered)
    })
  }

  render() {
    if(!this.state.loaded) {
      return <LoadingView />;
    }

    return (
      <View style={styles.container}>
        <TextInput style={styles.search} placeholder="Search" onChangeText={(text) => this.search(text)}/>
        <View style={styles.listContainer}>
          <ListView style={styles.listView}
            dataSource={this.state.dataSource}
            renderRow={this.renderBookItem}
          >
          </ListView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#319B42',
    paddingTop: 20,
  },

  listContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  listView: {
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: '#FFFFFF'
  },

  search: {
    height: 32,
    borderWidth: 0,
    borderColor:'#cccccc',
    paddingLeft: 10,
    backgroundColor:'#ffffff',
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 4,
  }
});