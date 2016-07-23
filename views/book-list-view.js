import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  ListView,
  TextInput,
  View
} from 'react-native';


import BookListItemView from './book-list-item-view';

export default class BookListView extends Component {
  static propTypes = {
    books: PropTypes.object.isRequired
  }
  renderBookItem(book) {
    return (
      <BookListItemView book={book} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.search} placeholder="Search"/>
        <View style={styles.listContainer}>
          <ListView style={styles.listView}
            dataSource={this.props.books}
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