import React from "react";
import { ScrollView, StatusBar } from "react-native";

import feelingsAndEmotionsQuestions from "../data/feelingsAndEmotions";
import treesQuestions from "../data/trees";
import phrVerbsWithOffQuestions from "../data/phrVerbsWithOff";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Feelings & Emotions"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Feelings & Emotions",
          questions: feelingsAndEmotionsQuestions,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="Trees"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Trees",
          questions: treesQuestions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name='Phrasal Verbs with "off"'
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: 'Phrasal Verbs with "off"',
          questions: phrVerbsWithOffQuestions,
          color: "#49475B"
        })
      }
    />
    <RowItem
      name="Coming Soon !"
      color="#bdd2b6"
      onPress={() =>
        navigation.navigate("ComingSoon", {
          title: "Coming Soon !",
          color: "#bdd2b6"
        })
      }
    />
  </ScrollView>
);
