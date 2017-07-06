import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

class Filter extends Component {
  getTextStyle(statusName) {
    const { myFilterStatus } = this.props;
    if (statusName === myFilterStatus) return { color: 'yellow', fontWeight: 'bold' };
    return styles.buttonText;
  }

  setFilterStatus(actionType) {
    this.props.dispatch({ type: actionType });
  }

  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_SHOW_ALL')}>
          <Text style={this.getTextStyle('SHOW_ALL')}>show all</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_MEMMORIZED')}>
          <Text style={this.getTextStyle('MEMORIZED')}>memorized</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_NEED_PRACITICE')}>
          <Text style={this.getTextStyle('NEED_PRACITICE')}>need practice</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#583C3C',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonText: {
    color: 'white'
  }
});

function mapStateToProps(state) {
  return { myFilterStatus: state.filterStatus };
}
export default connect(mapStateToProps)(Filter);
