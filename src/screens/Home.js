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
    { id: "Introduction", title: "Introduction" },
    { id: "First Station", title: "First Station" },
    { id: "Second Station", title: "Second Station" },
    { id: "Third Station", title: "Third Station" },
    { id: "Fourth Station", title: "Fourth Station" },
    { id: "Fifth Station", title: "Fifth Station" },
    { id: "Sixth Station", title: "Sixth Station" },
    { id: "Seventh Station", title: "Seventh Station" },
    { id: "Eighth Station", title: "Eighth Station" },
    { id: "Nineth Station", title: "Nineth Station" },
    { id: "Tenth Station", title: "Tenth Station" },
    { id: "Eleventh Station", title: "Eleventh Station" },
    { id: "Twelfth Station", title: "Twelfth Station" },
    { id: "Thirteenth Station", title: "Thirteenth Station" },
    { id: "Fourteenth Station", title: "Fourteenth Station" },
    { id: "Conclusion", title: "Conclusion" },
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
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styless = StyleSheet.create({
  home: {
    marginTop: 16,
  },
  item: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "47%",
  },
  itemText: {
    textAlign: "center", // Center the text within the item
  },
});
