import React from "react";
import { Text, View } from "react-native";

const MessageView = ({ fullMessage }) => {
  console.log(fullMessage);
  return (
    <View>
      {fullMessage.map((message) => {
        return (
          <View>
            <Text>{message}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default MessageView;
