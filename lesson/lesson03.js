import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", key: 1 },
    { name: "kishanth", key: 2 },
    { name: "mario", key: 3 },
    { name: "luigi", key: 4 },
    { name: "yoshi", key: 5 },
    { name: "browser", key: 6 },
    { name: "ios", key: 7 },
    { name: "android", key: 8 },
    { name: "color", key: 9 }
  ]);

  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 50
    // alignItems: "center",
    // justifyContent: "center"
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink"
  }
});
