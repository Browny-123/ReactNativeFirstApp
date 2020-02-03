import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  StyleSheet
} from "react-native";

export default function FetchExample() {
  const [winningNumber, setWinningNumber] = useState(0);
  const [winner, setWinner] = useState(false);
  const [guess, setGuess] = useState(0);
  const [previousGuesses, setPreviousGuesses] = useState([]);

  const handleSubmit = e => {
    if (Number(guess) == winningNumber) {
      setWinner(!winner);
      alert("You Win");
      setPreviousGuesses([null]);
      return;
    } else {
      alert("Try Again");
    }
    setPreviousGuesses(prevState => [...prevState, guess]);
  };
  const styles = StyleSheet.create({
    scroll: {
      alignItems: "center",
      justifyContent: "space-around",
      flex: 1,
      paddingTop: 45
    }
  });
  useEffect(() => {
    const random = Math.floor(Math.random() * 50);
    console.log(random);
    setWinningNumber(random);
  }, [winner]);
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={{ fontSize: 22 }}>Guess the number from 0 - 50</Text>
      <Text style={{ fontSize: 150 }}>{guess}</Text>
      <TextInput
        style={{
          height: 50,
          width: 300,
          backgroundColor: "black",
          textAlign: "center",
          color: "white"
        }}
        value={String(guess)}
        placeholder="Please guess here"
        onChangeText={text => setGuess(text)}
        keyboardType="number-pad"
        maxLength={2}
      ></TextInput>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {previousGuesses.length !== 0
          ? previousGuesses.map((item, i) => (
              <Text
                key={i}
                style={{
                  textDecorationLine: "line-through"
                }}
              >
                {item}
                {"  "}
              </Text>
            ))
          : null}
      </View>
      <Button title="Submit Answer" onPress={handleSubmit}></Button>
    </ScrollView>
  );
}
