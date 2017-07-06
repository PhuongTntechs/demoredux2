import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, TextInput
} from 'react-native';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      en: '',
      vn: ''
    };
    this.onAdd = this.onAdd.bind(this);
  }
  onAdd() {
    const { en, vn } = this.state;
    this.props.dispatch({
      type: 'ADD_WORD',
      en,
      vn
    });
    this.props.dispatch({
      type: 'TOGGLE_IS_ADDING'
    });
  }
  render() {
    const { textInput, container } = styles;
    return (
      <View style={container}>
        <TextInput
          style={textInput}
          value={this.state.en}
          onChangeText={text => this.setState({ en: text })}
          placeholder='EngLish word'
        />
        <TextInput
          style={textInput}
          value={this.state.vn}
          onChangeText={text => this.setState({ vn: text })}
          placeholder='meaning'
        />
        <TouchableOpacity onPress={this.onAdd}>
          <Text>add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    backgroundColor: '#E4F6D4',
    margin: 10,
    paddingHorizontal: 10
  },
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect()(Form);
