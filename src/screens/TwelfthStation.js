import { Text, View, Image } from "react-native";
import {
  PanGestureHandler,
  ScrollView,
  State,
} from "react-native-gesture-handler";
import styles from "../../mainStyles";

function TwelfthStation({ navigation }) {
  const onSlideComplete = (event) => {
    if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX < 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Thirteenth Station");
    } else if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX > 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Eleventh Station");
    }
  };
  return (
    <PanGestureHandler onHandlerStateChange={onSlideComplete}>
      <ScrollView>
        <View style={styles.mainContent}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.h2}>JESUS DIES</Text>
            <Image
              source={require("../img/small/station-cross12.jpg")}
              style={styles.mainContentImg}
            />
            <Text style={styles.defaultText}>
              (All kneel silently for a moment)
            </Text>
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
                READING: (JOHN 19:28-30)
              </Text>
            </View>
            <Text style={styles.defaultText}>
              That the scriptures might be fulfilled Jesus said: I thirst. A
              bowl of vinegar stood there; so they put a sponge of vinegar on
              hyssop and held it to his mouth. When jesus had received the
              vinegar, he said, “it is finished”, and he bowed his head and gave
              up his spirit.
            </Text>
          </View>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>CHRIST SPEAKS</Text>
            </View>
            <Text style={styles.defaultText}>
              Now, the cross has become a pulpit listen to the good news I
              proclaim from it:-“Forgive them, father you will be with me in
              paradise there is your mother, there your son, I thirst, it is
              complete
            </Text>
          </View>
          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>MAN RESPONDS</Text>
            </View>
            <Text style={styles.defaultText}>
              Lord Jesus, what can I say or do? I offer you my death. I accept
              now the time and kind of death in store for me I offer you my
              death for my own sins and those of all my fellowmen.
            </Text>
          </View>

          <View style={styles.mainContentView}>
            <Text style={styles.defaultText}>
              V. Forgive us our sins, O Lord!
            </Text>
            <Text style={styles.defaultText}>R: Forgive us our sins.</Text>
          </View>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>HYMN</Text>
            </View>

            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultText}>
                let me mingle tears with thee,
              </Text>
              <Text style={styles.defaultText}>
                mourning him who mourned for me,
              </Text>
              <Text style={styles.defaultText}>
                all the days that I may live.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </PanGestureHandler>
  );
}

export default TwelfthStation;
