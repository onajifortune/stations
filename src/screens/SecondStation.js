import { Text, View, Image } from "react-native";
import {
  PanGestureHandler,
  ScrollView,
  State,
} from "react-native-gesture-handler";
import styles from "../../mainStyles";

function SecondStation({ navigation }) {
  const onSlideComplete = (event) => {
    if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX < 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Third Station");
    } else if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX > 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("First Station");
    }
  };
  return (
    <PanGestureHandler onHandlerStateChange={onSlideComplete}>
      <ScrollView>
        <View style={styles.mainContent}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.h2}>JESUS TAKES HIS CROSS</Text>
            <Image
              source={require("../img/small/station-cross2.jpg")}
              style={styles.mainContentImg}
            />
          </View>

          <Text style={styles.defaultText}>
            V. We adore you, O Christ, and we praise you.
          </Text>
          <Text style={styles.defaultText}>
            R. Because by your holy cross you Have redeemed the world
          </Text>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>READING: (JOHN 19:17)</Text>
            </View>
            <Text style={styles.defaultText}>
              So they took Jesus, and he went out, bearing his own cross, to the
              place of a skull, which is called in Hebrew Golgotha.
            </Text>
          </View>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>CHRIST SPEAKS</Text>
            </View>
            <Text style={styles.defaultText}>
              This cross this chunk of tree, is what my father chose for me. the
              crosses you must bear are largely products of your daily life.
              Your weakness, dissatisfaction, insufficiency. And yet my father,
              your father chose them too, for you. Receive them from his hands.
            </Text>
          </View>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>MAN RESPONDS</Text>
            </View>
            <Text style={styles.defaultText}>
              Lord Jesus, I take my daily cross I welcome the monotony,
              discomfort of all kinds, my disappointments, tensions, setback,
              cares, worries, all of them. I accept them remind me often that in
              carrying my cross, I am carrying yours with you.
            </Text>
          </View>

          <View style={styles.mainContentView}>
            <Text style={styles.defaultText}>
              V. Grant us your help, O Lord
            </Text>
            <Text style={styles.defaultText}>R: Grant us your help!</Text>
          </View>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>HYMN</Text>
            </View>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultText}>
                Oh, how sad and sore distressed
              </Text>
              <Text style={styles.defaultText}>
                was that mother highly blessed
              </Text>
              <Text style={styles.defaultText}>Of the sole-begotten one!</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </PanGestureHandler>
  );
}

export default SecondStation;
