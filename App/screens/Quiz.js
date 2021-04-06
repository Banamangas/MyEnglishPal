import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";

import { Button, ButtonContainer } from "../components/Button";
import { Alert } from "../components/Alert";

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

class Quiz extends React.Component {
  state = {
    correctCount: 0,
    totalCount: this.props.navigation.getParam("questions", []).length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    backgroundColor: this.props.navigation.getParam("color")
  };

  answer = correct => {
    this.setState(
      state => {
        const nextState = { answered: true };

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      }
    );
  };

  nextQuestion = () => {
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount) {
        return (
          setTimeout(() => this.props.navigation.navigate("FinalScore", {
            correctCount: state.correctCount,
            totalCount: state.totalCount,
            color: state.backgroundColor
          }), 750)
        )
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false
      };
    });
  };

  render() {
    const questions = this.props.navigation.getParam("questions", []);
    const question = questions[this.state.activeQuestionIndex];
    const questionNumber = this.state.activeQuestionIndex+1;

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
            <Text style={styles.questionNumberText}>Question N°{questionNumber}</Text>
            <Text style={styles.text}>{question.question}</Text>

            <ButtonContainer>
              {question.answers.map(answer => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)}
                />
              ))}
            </ButtonContainer>
          </View>

          <Text style={styles.scoreText}>
            Score : {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>
        </SafeAreaView>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
      </View>
    );
  }
}

export default Quiz;
