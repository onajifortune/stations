import { Text, View, Image, Animated } from "react-native";
import {
  PanGestureHandler,
  ScrollView,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import styles from "../../mainStyles";

function EighthStation({ navigation }) {
  const onSlideComplete = (event) => {
    if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX < 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen1 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Nineth Station");
    } else if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX > 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a negative velocity (leftward)
      navigation.navigate("Seventh Station");
    }
  };
  return (
    <Animated.View>
      <GestureHandlerRootView>
        <PanGestureHandler onHandlerStateChange={onSlideComplete}>
          <ScrollView>
            <View style={styles.mainContent}>
              <View style={styles.mainContentCenterContainer}>
                <Text style={styles.h2}>JESUS CONSOLES THE WOMEN</Text>
                <Image
                  source={require("../img/small/station-cross8.jpg")}
                  style={styles.mainContentImg}
                />
              </View>

              <Text style={styles.defaultText}>
                V. We adore you, O Christ, and we praise you.
              </Text>
              <Text style={styles.defaultText}>
                R: Because by your holy cross you have redeemed the world
              </Text>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>
                    READING: (LUKE 23:27-31)
                  </Text>
                </View>
                <Text style={styles.defaultText}>
                  And there followed him a great multitude of people, and of
                  women who bewailed and lamented him. But Jesus turning to them
                  said, “Daughters of Jerusalem, do not weep for me, but weep
                  for yourselves and for your children. for behold, the days are
                  coming when they will say, ‘Blessed are the barren, and the
                  wombs that never bore, and the breasts that never gave suck’.
                  Then they will begin to say to the mountains, ‘Fall on us’; to
                  the hills cover us’. For if they do this when the wood is
                  green, what will happen when it is dry?
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>CHRIST SPEAKS</Text>
                </View>
                <Text style={styles.defaultText}>
                  How often have I longed to gather my children. into one
                  communion with me! but they refused and now these women weep
                  for me. I mourn for them and their sorrows that will come. My
                  dear child, you can really be more gentle you too can be kind.
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>MAN RESPONDS</Text>
                </View>
                <Text style={styles.defaultText}>
                  Lord, teach me, help me to learn, when I would snap at those
                  who hurt me with their ridicule those who misunderstand me
                  those whom I think hinder my progress with some misguided
                  helpfulness. Those who intrude upon my privacy those who
                  restrict my freedom and liberty. Then help me curb my tongue
                  may gentleness become my cloak.
                </Text>
              </View>

              <Text style={styles.defaultText}>
                V. Have mercy on us, O Lord!
              </Text>
              <Text style={styles.defaultText}>R. Have mercy on us.</Text>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>HYMN</Text>
                </View>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultText}>
                    O thou mother! Fount of love!
                  </Text>
                  <Text style={styles.defaultText}>
                    touch my spirit from above,
                  </Text>
                  <Text style={styles.defaultText}>
                    make my heart with thine accord.
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </Animated.View>
  );
}

export default EighthStation;
