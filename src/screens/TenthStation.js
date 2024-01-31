import { Text, View, Image, Animated } from "react-native";
import {
  PanGestureHandler,
  ScrollView,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import styles from "../../mainStyles";

function TenthStation({ navigation }) {
  const onSlideComplete = (event) => {
    if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX < 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen1 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Eleventh Station");
    } else if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX > 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a negative velocity (leftward)
      navigation.navigate("Nineth Station");
    }
  };
  return (
    <Animated.View>
      <GestureHandlerRootView>
        <PanGestureHandler onHandlerStateChange={onSlideComplete}>
          <ScrollView>
            <View style={styles.mainContent}>
              <View style={styles.mainContentCenterContainer}>
                <Text style={styles.h2}>JESUS IS STRIPPED</Text>
                <Image
                  source={require("../img/small/station-cross10.jpg")}
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
                    READING: (JOHN 19:23-24)
                  </Text>
                </View>
                <Text style={styles.defaultText}>
                  When the soldiers had crucified Jesus they took his garments
                  and made four parts, one for each soldiers; also his tunic,
                  but the tunic was without seam, woven from top to bottom; so
                  they said to one another, “Let us not tear it, but cast lots
                  for it to see whose it shall be. “This was to fulfil the
                  scripture, “They parted my garments among them, and for my
                  clothing they cast lots”.
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>CHRIST SPEAKS</Text>
                </View>
                <Text style={styles.defaultText}>
                  Beholds the poorest king that ever lived before the creatures
                  of my own hand I stand stripped the cross – my deathbed is not
                  even my own possessing nothing I own all I own my father’s
                  love you too own everything so do not worry about your food,
                  your clothes and your life.
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>MAN RESPONDS</Text>
                </View>
                <Text style={styles.defaultText}>
                  Lord, strip me of the craving for prestige position, wealth
                  and priviledges. Root out of me all traces of envy of my
                  neighbour who has more than i. release me from the vice of
                  pride, my longing to exalt myself, teach me that there is
                  something called humility may I be poor in spirit lord.
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <Text style={styles.defaultText}>
                  V. Come to our aid, O Lord!
                </Text>
                <Text style={styles.defaultText}>R: Come to our aid.</Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>HYMN</Text>
                </View>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultText}>
                    Holy Mother! Pierce me through
                  </Text>
                  <Text style={styles.defaultText}>
                    in my heart each wound renew,
                  </Text>
                  <Text style={styles.defaultText}>
                    of my saviour crucified.
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

export default TenthStation;
