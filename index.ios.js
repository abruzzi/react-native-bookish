import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  ListView,
  Text,
  TextInput,
  Navigator,
  View
} from 'react-native';

import BookListView from './views/book-list-view';

class RNBookish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'list'
    };
  }

  render() {    
    return (
      <TabBarIOS
        unselectedTintColor="#cccccc"
        tintColor="#ffffff"
        barTintColor="#319B42">

        <TabBarIOS.Item
          title="Book List"
          systemIcon="recents"
          selected={this.state.selectedTab === 'list'}
          onPress={() => {
            this.setState({
              selectedTab: 'list',
            });
          }}>
          
          <Navigator
              initialRoute={{ name: 'BookListView', component: BookListView }}
              configureScene={(route) => {
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />

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
