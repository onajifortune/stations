import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainHeader: {
    width: "100%",
    backgroundColor: "purple",
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 38,
  },
  mainHeaderContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainHeaderImage: {
    height: 24,
    width: 24,
    top: 0,
    left: 0,
  },
  mainHeaderBrand: {
    color: "white",
    textDecorationLine: "none",
  },
  sidebar: {
    width: "40%",
    flex: 1,
    backgroundColor: "gold",
    position: "absolute",
    zIndex: 1,
    top: 30,
    right: 0,
    padding: 0,
    marginTop: 38,
  },
  sidebarUl: {
    paddingHorizontal: 16,
  },
  mainNavItems: {
    // listStyle is not applicable in React Native
  },
  mainNavItemA: {
    textDecorationLine: "none",
  },
  mainTitle: {
    marginTop: 100,
  },
  mainContent: {
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 16,
    marginBottom: 16,
    // justifyContent: "center",
    // alignItems: "center",
  },
  mainContentView: {
    marginTop: 16,
  },
  mainContentCenterContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 8,
  },
  mainContentImg: {
    width: 240,
    height: 275,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 48,
    marginTop: 16,
    marginBottom: 16,
  },
  mainContentHymn: {
    // marginLeft: 50,
  },
  // Media queries are not supported in React Native
  // You can adjust styles dynamically in your component logic instead.
  button: {
    height: 10,
    marginLeft: 650,
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 20,
  },
  defaultText: {
    fontSize: 16,
  },
});

export default styles;
