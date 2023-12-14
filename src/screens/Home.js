import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import styles from "../../mainStyles";

function Home({ navigation }) {
  data = [
    { id: "In", title: "Introduction" },
    { id: "I", title: "First Station" },
    { id: "II", title: "Second Station" },
    { id: "III", title: "Third Station" },
    { id: "IV", title: "Fourth Station" },
    { id: "V", title: "Fifth Station" },
    { id: "VI", title: "Sixth Station" },
    { id: "VII", title: "Seventh Station" },
    { id: "VIII", title: "Eighth Station" },
    { id: "IX", title: "Nineth Station" },
    { id: "X", title: "Tenth Station" },
    { id: "XI", title: "Eleventh Station" },
    { id: "XII", title: "Twelfth Station" },
    { id: "XIII", title: "Thirteenth Station" },
    { id: "XIV", title: "Fourteenth Station" },
    { id: "Co", title: "Conclusion" },
  ];

  return (
    <SafeAreaView style={styles.mainContent}>
      <View style={styless.home}>
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styless.item}
              onPress={() => {
                navigation.navigate(item.title);
              }}
            >
              <Text style={styless.itemText} key={index}>
                {item.id}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
          numColumns={5}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styless = StyleSheet.create({
  home: {
    marginTop: 50,
  },
  item: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 52,
  },
  itemText: {
    textAlign: "center", // Center the text within the item
  },
});
