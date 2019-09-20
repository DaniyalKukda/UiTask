import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Button, Text, Icon, Content, Card, CardItem, Container, Thumbnail, Left, Body, Right } from 'native-base';

class Third extends React.Component {
  static navigationOptions = {
    headerTitle: <Image style={{ height: 50, width: 50, marginLeft: 25 }} source={require('../assets/Logo.png')} />,
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerRight: (
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: 155, marginRight: 20 }}>
        <Button style={{ backgroundColor: "#ffea03", borderRadius: 17, height: 33 }}>
          <Text style={{ color: "black", fontWeight: "700" }}><Icon type="FontAwesome" name="user" style={{ fontSize: 14 }} /> Master</Text>
        </Button>
        <Button style={{ backgroundColor: "#329BEC", borderRadius: 15, height: 33 }}>
          <Text style={{ color: "white", fontWeight: "700" }}><Icon type="FontAwesome" name="gamepad" style={{ fontSize: 17, color: "white" }} /> 5</Text>
        </Button>
      </View>
    ),
  };
  render() {
    return (
      <Container>
        <Content style={{ width: 330, alignSelf: "center" , flex:1 }}>
          <Card style={{ marginTop: 20, elevation: 5, flex:1 }}>
            <CardItem cardBody>
              <Image source={require("../assets/card.jpg")} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <CardItem>
              <View style={{ flexDirection: "column", flex:1 }}>
                <Text style={{ color: "#079bf7" }}>Veterans Day</Text>
                <Text note>By GeekyAnts</Text>
              </View>
            </CardItem>
          </Card>
          <View style={{ flexDirection: "row", flex:1, alignSelf: "center", padding: 10 }}>
            <View style={{ height: 8, width: 8, borderRadius: 8, borderColor: "#a1a9ad", borderWidth: 1, borderStyle: "solid" }}></View>
            <View style={{ height: 8, width: 8, borderRadius: 8, borderColor: "#a1a9ad", borderWidth: 1, borderStyle: "solid", marginLeft: 5 }}></View>
            <View style={{ height: 8, width: 8, borderRadius: 8, borderColor: "#a1a9ad", borderWidth: 1, borderStyle: "solid", marginLeft: 5 }}></View>
            <View style={{ height: 8, width: 8, borderRadius: 8, borderColor: "#a1a9ad", borderWidth: 1, borderStyle: "solid", marginLeft: 5 }}></View>
          </View>
          <View>
            <Text style={{ color: "#7c8082", fontWeight: "600" }}>IN PROGRESS</Text>
          </View>
          <View style={{ marginTop: 18, flexDirection: "row", flex:1, marginLeft: 0 }}>
            <ImageBackground source={require("../assets/1.jpg")} style={{ width: 100, height: 100, opacity: 0.9 }}>
              <Text style={{ color: "#ffffff", fontSize: 16, textAlign: "justify", padding: 10, marginTop: 45 }}>Here is the First Item...</Text>
            </ImageBackground>
            <ImageBackground source={require("../assets/2.jpg")} style={{ width: 100, height: 100, opacity: 0.9, marginLeft: 15 }}>
              <Text style={{ color: "#ffffff", fontSize: 16, textAlign: "justify", padding: 10, marginTop: 45 }}>Here is the Secod Item...</Text>
            </ImageBackground>
            <ImageBackground source={require("../assets/3.jpg")} style={{ width: 100, height: 100, opacity: 0.9, marginLeft: 15 }}>
              <Text style={{ color: "#ffffff", fontSize: 16, textAlign: "justify", padding: 10, marginTop: 45 }}>Here is the Third Item...</Text>
            </ImageBackground>
          </View>
          <View style={{ marginTop: 10 , flex:1}}>
            <Text style={{ color: "#7c8082", fontWeight: "600" }}>TOP PIECES</Text>
          </View>
          <View style={{ marginTop: 65 , flex:1}}>
            <Card>
              <CardItem style={{ height: 90 }} cardBody>
                <Image source={require("../assets/4.jpg")} style={{ height: 200, width: null, flex: 1 }} />
              </CardItem>
              <CardItem>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "#079bf7" }}>GeekyAnts Day</Text>
                  <Text note>By Veterans</Text>
                </View>
                <Right>
                  <Text note>11h ago</Text>
                </Right>
              </CardItem>
            </Card>
          </View>
          <View style={{ marginTop: 65 , flex:1}}>
            <Card>
              <CardItem style={{ height: 90 }} cardBody>
                <Image source={require("../assets/5.jpg")} style={{ height: 200, width: null, flex: 1 }} />
              </CardItem>
              <CardItem>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "#079bf7" }}>GeekyAnts Day</Text>
                  <Text note>By Veterans</Text>
                </View>
                <Right>
                  <Text note>two Days ago</Text>
                </Right>
              </CardItem>
            </Card>
          </View>
        </Content>
      </Container>
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
