import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";

import { Button } from "../components/Button";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20
  },
  safearea: {
    flex: 1,
    justifyContent: "flex-start",
  },
  questionContainer: {
    flex:1,
    justifyContent: "flex-end",
    alignItems:"center",
    paddingBottom:50
  },
  button: {
    flex:1,
    marginHorizontal:0,
    justifyContent: "flex-start",
    alignItems:"center"
  },
  scoreText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 35,
    textAlign: "center",
    letterSpacing: 0,
    fontWeight: "bold"
  }
});

class FinalScore extends React.Component {

  render() {
    console.log(this.props.navigation.getParam());
    const correctCount = this.props.navigation.getParam("correctCount");
    const totalCount = this.props.navigation.getParam("totalCount");

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
            <Text style={styles.scoreText}>Votre score final est de {`${correctCount} sur ${totalCount}`}</Text>
          </View>
          <View style={styles.button}>
            <Button text="Retour au menu" onPress={() => this.props.navigation.popToTop()}/>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default FinalScore;
