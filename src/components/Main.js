import React, { Component } from 'react';
import {
  View, FlatList
} from 'react-native';
import { connect } from 'react-redux';
import Words from './Words';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getWordList() {
    const { myFilter, myWords } = this.props;
    if (myFilter === 'MEMORIZED') return myWords.filter(e => e.memorized);
    if (myFilter === 'NEED_PRACITICE') return myWords.filter(e => !e.memorized);
    return myWords;
  }
  render() {
    return (
      <View style={{ backgroundColor: 'yellow', flex: 1 }}>
        <Header />
        <View style={{ flex: 10 }}>
          {this.props.isAdding ? <Form /> : null}
          <FlatList
            data={this.getWordList()}
            renderItem={({ item }) => <Words myWord={item} />}
            keyExtractor={item => item.id}
          />
        </View>
        <Filter />
      </View>
    );
  }
}
//function call sate from store
function mapStateToProps(state) {
  return {
    myFilter: state.filterStatus,
    myWords: state.arrWords,
    isAdding: state.isAdding
  };
}
export default connect(mapStateToProps)(Main);
