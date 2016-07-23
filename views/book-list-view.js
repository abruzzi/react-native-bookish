import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  ListView,
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
        <ListView style={styles.listView}
          dataSource={this.props.books}
          renderRow={this.renderBookItem}
        >
        </ListView>
      </View>
    )
  }
}

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