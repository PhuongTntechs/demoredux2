import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class Words extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  memorizedWord() {
    this.props.dispatch({
      type: 'TOGGLE_MEMORIZED',
      id: this.props.myWord.id
    });
  }
  render() {
    const { en, vn, memorized } = this.props.myWord;
    const textDecorationLine = memorized ? 'line-through' : 'none';
    const { container, controller, button } = styles;
    const memorizedBtnText = memorized ? 'forget' : 'memorized';
    return (
      <View style={container}>
        <Text>{en}</Text>
        <Text style={{ textDecorationLine }}>{vn}</Text>
        <View style={controller}>
          <TouchableOpacity
            style={button}
            onPress={this.memorizedWord.bind(this)}
          >
            <Text>{memorizedBtnText}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={button}
          >
            <Text>show</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D2DEF6',
    padding: 10,
    margin: 10
  },
  controller: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    margin: 10
  }
});
//function call sate from store
/*
function mapStateToProps(state) {
  return {};
}
*/

export default connect()(Words);
