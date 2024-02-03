import { Text, View, Image, Animated } from "react-native";
import {
  PanGestureHandler,
  ScrollView,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import styles from "../../mainStyles";

function NinethStation({ navigation }) {
  const onSlideComplete = (event) => {
    if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX < 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Tenth Station");
    } else if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX > 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Eighth Station");
    }
  };
  return (
    <View>
      <GestureHandlerRootView>
        <PanGestureHandler onHandlerStateChange={onSlideComplete}>
          <ScrollView>
            <View style={styles.mainContent}>
              <View style={styles.mainContentCenterContainer}>
                <Text style={styles.h2}>JESUS FALLS THE THIRD TIME</Text>
                <Image
                  source={require("../img/small/station-cross9.jpg")}
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
                    READING: (ISAIAH 53:8-10)
                  </Text>
                </View>
                <Text style={styles.defaultText}>
                  By oppression and judgement he was taken away; and as for his
                  generation, who considered that he was cut out of the land of
                  the living, stricken for the transgression of my people? And
                  they made his grace with the wicked and with a rich man in his
                  death, although he had done no violent action and there was no
                  deceit in his mouth. Yet it was the will of the Lord to Bruise
                  him; he has put him to grief; when he makes himself an
                  offering for sin he shall see his offspring, he shall prolong
                  his days; the will of the Lord shall prosper in his hand.
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>CHRIST SPEAKS</Text>
                </View>
                <Text style={styles.defaultText}>
                  I have fallen down again completely drained of strength my
                  body cannot move and yet my will is mine and so is yours. My
                  child, this one thing is certain, your body may be broken but
                  no force on earth and none in hell can take away your will,
                  your will is yours.
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>MAN RESPONDS</Text>
                </View>
                <Text style={styles.defaultText}>
                  My Lord, after a moment’ rest you took off again and staggered
                  on. I can do the same because my will is mine when all my
                  strength is gone and guilt and self-reproach press me to earth
                  and seem to hold me fast, when I am pressed down by the
                  consideration that I am of a fallen race protect me from the
                  sin of judas save me from despair Lord, never let me feel that
                  any sin of mine is greater than your love. No matter what my
                  past has been, I can begin anew.
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <Text style={styles.defaultText}>
                  V. Have mercy on us, O Lord!
                </Text>
                <Text style={styles.defaultText}>R: Have mercy on us.</Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>HYMN</Text>
                </View>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultText}>
                    Make me feel as thou hast felt;
                  </Text>
                  <Text style={styles.defaultText}>
                    make my soul to glow and melt
                  </Text>
                  <Text style={styles.defaultText}>
                    With the love of Christ my lord.
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

export default NinethStation;
