import { Text, View, Image, Animated } from "react-native";
import {
  PanGestureHandler,
  ScrollView,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import styles from "../../mainStyles";

function FourthStation({ navigation }) {
  const onSlideComplete = (event) => {
    if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX < 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Fifth Station");
    } else if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX > 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Third Station");
    }
  };
  return (
    <View>
      <GestureHandlerRootView>
        <PanGestureHandler onHandlerStateChange={onSlideComplete}>
          <ScrollView>
            <View style={styles.mainContent}>
              <View style={styles.mainContentCenterContainer}>
                <Text style={styles.h2}>JESUS MEETS HIS MOTHER</Text>
                <Image
                  source={require("../img/small/station-cross4.jpg")}
                  style={styles.mainContentImg}
                />
              </View>

              <Text style={styles.defaultText}>
                V. We adore you, O Christ, and we praise you
              </Text>
              <Text style={styles.defaultText}>
                R. Because by your holy cross you have redeemed the world
              </Text>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>
                    READING: (LUKE 2:34-35)
                  </Text>
                </View>
                <Text style={styles.defaultText}>
                  “Behold, this child is set for the fall and rising of many in
                  Israel and for a sign that is spoken against, and a sword will
                  pierce through your own soul that thoughts out of my hearts
                  may be revealed”
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>CHRIST SPEAKS</Text>
                </View>
                <Text style={styles.defaultText}>
                  My mother sees me whipped. She sees me kicked and driven like
                  a beast. She sees me disgraced. But she did not utter a word
                  of protest or complaint. She shares my martyrdom.
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>MAN RESPONDS</Text>
                </View>
                <Text style={styles.defaultText}>
                  Lord Jesus, it is harder to watch the pains of those we love
                  than to bear our own pains. To carry my cross after you I too
                  must stand and watch the suffering s of my dear ones. I must
                  watch the poverty of my people, their tattered clothes,
                  malnutrition, no water, no electricity, and what is more, less
                  hope for the future. And, I must let them watch time too. I do
                  believe for those who love you, all things work together unto
                  good. They must.
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <Text style={styles.defaultText}>
                  V. come to our aid, O Lord!
                </Text>
                <Text style={styles.defaultText}>R. come to our aid.</Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultTextHead}>HYMN</Text>
                </View>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.defaultText}>
                    Is there one who would not weep,
                  </Text>
                  <Text style={styles.defaultText}>
                    whelmed in miseries so deep
                  </Text>
                  <Text style={styles.defaultText}>
                    Christ dear mother to behold?
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

export default FourthStation;
