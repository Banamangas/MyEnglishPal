import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    fontSize: 28,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "900",
    marginVertical:20,
    lineHeight:45
  },
  questionNumberText: {
    color: "rgb(255, 255, 255)",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    textDecorationLine: 'underline',
    marginVertical:20
  },
  safearea: {
    flex: 1,
    justifyContent: "space-around",
  },
  questionContainer: {
    flex:5,
    justifyContent: "flex-start"
  },
  scoreText: {
    flex:1,
    alignItems: "flex-end",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 35,
    textAlign: "center",
    letterSpacing: 0,
    fontWeight: "bold"
  }
});

class ComingSoon extends React.Component {

  render() {

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.navigation.getParam("color") }
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View style={styles.questionContainer}>
            <Text style={styles.text}>Work in Progress...</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default ComingSoon;
