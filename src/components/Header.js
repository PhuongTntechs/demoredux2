import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { toggleIsAdding } from '../redux/actionCreates.js';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text />
        <Text>my Words</Text>
        <TouchableOpacity onPress={() => this.props.dispatch({ type: 'TOGGLE_IS_ADDING' })}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20
  }
});
export default connect()(Header);
