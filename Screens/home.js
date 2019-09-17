import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="First Screen" onPress={() => this.props.navigation.navigate("First")} />
        <Button title="Second Screen" onPress={() => this.props.navigation.navigate("Second")} />
        <Button title="Third Screen" onPress={() => this.props.navigation.navigate("Third")} />
      </View>
    );
  }
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
