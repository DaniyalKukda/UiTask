import React from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';

class First extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>First Screen</Text>
      </View>
    );
  }
}

export default First

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
