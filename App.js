import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Task from "./components/Task.js";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [tasks, setTasks] = useState();
  // normally the line below would be an API call to some kind of database
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, tasks]);
    // reset the state management to handle individual input
    setTasks(null);
  };
  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Task Master</Text>
        {/* individual task container using Task.js */}
        <View style={styles.items}>
          {/* iterate over the list that stores all tasks and render them on UI */}
          {/* index is important in this case because we have a delete feature. each item needs a unique id so that it can be identified and updated. */}
          {taskItems.map((item, index) => {
            return (
              // touchable opacity does not render as a viewable element, it is more like an event listener
              <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/* input area, keyboard shouldn't bleed over this */}
      {/* ios uses padding, while android uses height */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add todo items"}
          value={tasks}
          onChangeText={(text) => setTasks(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <AntDesign name="pluscircleo" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sctionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper : {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
