import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ListView,
  TouchableHighlight,
  View
} from 'react-native';

import BookDetailView from './book-detail-view';

export default class BookListItemView extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
  }

  detailPage() {
    let navigator = this.props.navigator;

    navigator.push({
      name: 'BookDetailView',
      component: BookDetailView,
      passProps: {
        book: this.props.book
      }
    })
  }

  render() {
    return (
      <TouchableHighlight style={styles.book} onPress={this.detailPage.bind(this)}>
        <View style={styles.bookItemContainer}>
          <Image source={{uri: `http://localhost:8081/data/images/thumbnails/${this.props.book.asin}.jpg`}} 
            style={styles.thumbnails}
          />

          <View style={styles.bookInfo}>
            <Text style={styles.title} lineBreakMode="clip" numberOfLines={1}>{this.props.book.title}</Text>
            <Text style={styles.author} lineBreakMode="clip" numberOfLines={1}>{this.props.book.author.join(', ')}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  book: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 5,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor:'#eeeeee'
  },

  bookItemContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
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
  }
});
