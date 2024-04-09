import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.squareIcon}>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
      </View>
      <View>
        <FontAwesome name="remove" size={24} color="black" />
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightgray',
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  squareIcon: {
    width: "80%",
    maxWidth: "80%",
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.44,
    borderRadius: 5,
    marginRight: 15,
    paddingLeft: 5,
  },
  itemText: {
    maxWidth: "80%",
  },
});
