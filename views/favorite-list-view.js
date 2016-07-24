import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  ListView,
  TextInput,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';

import LoadingView from './loading-view';
import BookListItemView from './book-list-item-view';

export default class FavoriteListView extends Component {
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
    let books = require('../data/favorites.json');
    //https://github.com/abruzzi/react-native-bookish/raw/master/data/books.json
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

  addToFavorite(book) {
    console.log(book);
  }

  renderActions(book) {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={ (secId, rowId, rowMap) => {
          console.log(book);
        } }>
          <Text style={styles.backTextWhite}>Remove</Text>
        </TouchableOpacity>
      </View>    
    );
  }

  render() {
    if(!this.state.loaded) {
      return <LoadingView />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <SwipeListView style={styles.listView}
            dataSource={this.state.dataSource}
            renderRow={this.renderBookItem.bind(this)}
            renderHiddenRow={this.renderActions.bind(this)}
            rightOpenValue={-75}
          >
          </SwipeListView>
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
    backgroundColor: '#FFFFFF',
  },

  listView: {
    flex: 1,
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
  },

  rowBack: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },

  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 75
  },

  backRightBtnRight: {
    backgroundColor: '#F68D2E',
    right: 0
  },

  backTextWhite: {
    color: '#FFFFFF'
  }
});