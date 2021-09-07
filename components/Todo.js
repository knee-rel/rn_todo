import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Todo = (props) => {
  return (
    <View style={styles.item}>
      <Text styles={styles.todoItem}>{props.item}</Text>
      <Button
        title={"Delete"}
        color={"red"}
        onPress={() => {
          props.delete(props.item);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor:
      "linear-gradient(18.51deg, #00F0FF 54.52%, rgba(0, 240, 255, 0.5) 100%)",
    margin: 8,
    padding: 8,
  },
  todoItem: {
    color: "white",
  },
});

export default Todo;
