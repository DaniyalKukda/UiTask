import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

class Second extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Second Screen</Text>
      </View>
    );
  }
}

export default Second

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
