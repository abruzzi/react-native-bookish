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
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

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
      <BookListItemView book={book} navigator={this.props.navigator}/>
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
            renderRow={this.renderBookItem.bind(this)}
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
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: '#FFFFFF'
  },

  search: {
    height: 32,
    borderWidth: 0,
    borderColor:'#cccccc',
    paddingLeft: 10,
    backgroundColor:'#ffffff',
    marginTop: 50,
    marginBottom: 6,
    marginLeft: 6,
    marginRight: 6,
    borderRadius: 2
  }
});