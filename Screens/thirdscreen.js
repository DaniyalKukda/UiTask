import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

class Third extends React.Component {
  static navigationOptions = {
    headerTitle: <Image style={{height:50,width:50,marginLeft:20}} source={require('../assets/Logo.png')} />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#ccc"
      />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Third Screen</Text>
      </View>
    );
  }
}

export default Third;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
