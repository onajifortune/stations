import { Text, View, Image, Animated } from "react-native";
import {
  PanGestureHandler,
  ScrollView,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import styles from "../../mainStyles";

function FifthStation({ navigation }) {
  const onSlideComplete = (event) => {
    if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX < 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Sixth Station");
    } else if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX > 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Fourth Station");
    }
  };
  return (
    <View>
      <GestureHandlerRootView>
        <PanGestureHandler onHandlerStateChange={onSlideComplete}>
          <ScrollView>
            <View style={styles.mainContent}>
              <View style={styles.mainContentCenterContainer}>
                <Text style={styles.h2}>
                  SIMON HELPS JESUS TO CARRY HIS CROSS
                </Text>
                <Image
                  source={require("../img/small/station-cross5.jpg")}
                  style={styles.mainContentImg}
                />
              </View>

              <Text style={styles.defaultText}>
                V. We adore you, O Christ, and we praise you.
              </Text>
              <Text style={styles.defaultText}>
                R. Because by your holy cross you have redeemed the world
              </Text>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>
                    READING: (MARK 15:21)
                  </Text>
                </View>
                <Text style={styles.defaultText}>
                  And they compelled a passer-by, simon of Cyrene, who was
                  coming in from the country, the father of Alexander, and
                  Rufus, to carry his cross.
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>CHRIST SPEAKS</Text>
                </View>
                <Text style={styles.defaultText}>
                  I am physically weak I can no longer bear the cross alone, so,
                  they compel simon to help me and indeed he helps me why not
                  you too? Lift the burden from another back each time you do
                  that, you lift the cross’s awful weight that crushes me
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>MAN RESPONDS</Text>
                </View>
                <Text style={styles.defaultText}>
                  Lord, make me realise that each time I pick up an object off
                  the floor, assist my colleagues in some small task, each time
                  I lend my hand in anyway. It maters not to whom my name is
                  Simon, and the kindness I extend to them I really give to you
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <Text style={styles.defaultText}>
                  V. have mercy on us, O Lord!
                </Text>
                <Text style={styles.defaultText}>R. have mercy on us.</Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>HYMN</Text>
                </View>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultText}>
                    Can the human heart refrain
                  </Text>
                  <Text style={styles.defaultText}>
                    from partaking in her pain,
                  </Text>
                  <Text style={styles.defaultText}>
                    In that Mother’s pain untold?
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

export default FifthStation;
