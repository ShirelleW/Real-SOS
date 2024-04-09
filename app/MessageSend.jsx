import React, { useState } from "react";
import { Button, Text, TextInput, View, StyleSheet } from "react-native";
import MessageView from "./MessageView";
import { translation } from "../utils";

const MessageSend = () => {
  const [message, setMessage] = useState("");
  const [fullMessage, setFullMessage] = useState([]);

  const translateMessage = () => {
    const individualLetters = [...message.toUpperCase().split("")];
    // console.log(individualLetters)

    const translaterMessage = individualLetters.map((letter) => {
      return translation[letter];
    });

    console.log(translaterMessage);
  };

  const sendAndTranslate = () => {
    translateMessage();
    setFullMessage((oldMessages) => [...oldMessages, message]);
  };
  console.log(fullMessage);
  return (
    <View style={styles.viewContainer}>
      <MessageView style={styles.chatbox} fullMessage={fullMessage} />
      <View style={styles.textandsend}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message"
          onChangeText={setMessage}
        ></TextInput>
        <Button title="Send" onPress={sendAndTranslate}>
          Send
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: "column",
  },
  textInput: {
    width: 250,
  },
  textandsend: {
    flex: 2,
    width: 300,
    height: 20,
    flexDirection: "row",
    alignItems: "space-between",
  },
  chatbox: {
    flex: 1,
    width: 250,
    borderWidth: 4,
  },
});
export default MessageSend;
