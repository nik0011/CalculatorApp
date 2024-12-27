import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString()); // Calculate the result
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput(""); // Clear input
      setResult(""); // Clear result
    } else {
      setInput(input + value); // Append value to input
    }
  };

  const buttonLabels = [
    ["C", "(", ")", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <LinearGradient
      colors={["#6a11cb", "#2575fc"]} // Gradient colors for a purple-blue look
      style={styles.container}
    >
      {/* Display Section */}
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      {/* Button Section */}
      <View style={styles.buttons}>
        {buttonLabels.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((item, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[styles.button, item === "=" ? styles.equalsButton : null]}
                onPress={() => handlePress(item)}
              >
                <Text style={styles.buttonText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Calc by Nikhil</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  display: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "bold",
  },
  result: {
    fontSize: 28,
    color: "#ddd",
    marginTop: 10,
  },
  buttons: {
    flex: 2,
    justifyContent: "space-evenly",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    flex: 1,
    height: 70,
    margin: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Light background for buttons
  },
  equalsButton: {
    backgroundColor: "#00b894", // Green for "=" button
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Slightly darker footer background
    borderRadius: 10,
    marginTop: 10,
  },
  footerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
