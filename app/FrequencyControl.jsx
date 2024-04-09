import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

const FrequencyControl = () => {
  const [frequency, setFrequency] = useState(0);

  return (
    <View>
      <Text>Dot/Dit Speed</Text>
      <View style={styles.slidebar}>
        <Slider
          value={frequency}
          minimumValue={0}
          maximumValue={10}
          step={1}
          onValueChange={(value) => setFrequency(value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slidebar: {
    borderWidth: 4,
    borderColor: "black",
    width: 300,
  },
});
export default FrequencyControl;
