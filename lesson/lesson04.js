import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "shaun", id: 1 },
    { name: "kishanth", id: 2 },
    { name: "mario", id: 3 },
    { name: "luigi", id: 4 },
    { name: "yoshi", id: 5 },
    { name: "browser", id: 6 },
    { name: "ios", id: 7 },
    { name: "android", id: 8 },
    { name: "colorOS", id: 9 },
    { name: "MiUi", id: 9 }
  ]);

  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
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
    backgroundColor: "pink",
    marginHorizontal: 10
  }
});
