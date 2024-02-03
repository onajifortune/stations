import { Text, View, Image, Animated } from "react-native";
import {
  PanGestureHandler,
  ScrollView,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import styles from "../../mainStyles";

function EleventhStation({ navigation }) {
  const onSlideComplete = (event) => {
    if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX < 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Twelfth Station");
    } else if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX > 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Tenth Station");
    }
  };
  return (
    <View>
      <GestureHandlerRootView>
        <PanGestureHandler onHandlerStateChange={onSlideComplete}>
          <ScrollView>
            <View style={styles.mainContent}>
              <View style={styles.mainContentCenterContainer}>
                <Text style={styles.h2}>JESUS IS CRUCIFIED</Text>
                <Image
                  source={require("../img/small/station-cross11.jpg")}
                  style={styles.mainContentImg}
                />
              </View>

              <Text style={styles.mainContentHymn}>
                V. We adore you, O Christ, and we praise you.
              </Text>
              <Text style={styles.defaultText}>
                R: Because by your holy cross you have redeemed the world
              </Text>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>
                    READING: (JOHN 19:18-19)
                  </Text>
                </View>
                <Text style={styles.defaultText}>
                  “There they crucified him, and with him two others, one on
                  either side and Jesus between them. Pilate also wrote a title
                  and put it on the cross; it read, “Jesus of Nazareth, the king
                  of the Jews.”
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>CHRIST SPEAKS</Text>
                </View>
                <Text style={styles.defaultText}>
                  My executioners pressed the nail into my hand until it stabbed
                  my flesh. Then a heavy hammer-blow smashed. And pain exploded
                  like a bomb of fire in my brain then they seized my other arm.
                  And my legs and each time agony again exploded all – for you.
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>MAN RESPONDS</Text>
                </View>
                <Text style={styles.defaultText}>
                  My God am I worth all this? What can I give you in return?
                  Here and now I accept for the rest of my life whatever
                  sickness, torment, agony that will come to me you suffered to
                  be my redeemer I will suffer to be a co-redeemer of my
                  fellowmen.
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <Text style={styles.defaultText}>
                  V. Give us your help, O Lord
                </Text>
                <Text style={styles.defaultText}>R. Give us your help.</Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>HYMN</Text>
                </View>

                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultText}>
                    let me share with thee his pain
                  </Text>
                  <Text style={styles.defaultText}>
                    who for all my sins was slain
                  </Text>
                  <Text style={styles.defaultText}>
                    Who for me in torments died.
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
}

export default EleventhStation;
