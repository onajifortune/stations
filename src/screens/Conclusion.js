import { Text, View, Image, Animated } from "react-native";
import {
  PanGestureHandler,
  ScrollView,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import styles from "../../mainStyles";

function Conclusion({ navigation }) {
  const onSlideComplete = (event) => {
    if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX < 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Stations of the Cross");
    } else if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX > 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Fourteenth Station");
    }
  };
  return (
    <View>
      <GestureHandlerRootView>
        <PanGestureHandler onHandlerStateChange={onSlideComplete}>
          <ScrollView>
            <View style={styles.mainContent}>
              <View style={styles.mainContentCenterContainer}>
                <Text style={styles.h2}>CHRIST SPEAKS</Text>
              </View>
              <Text style={styles.defaultText}>
                You remember what I told you at the beginning? When you joined
                me on the way of my cross. I said:- “My life was incomplete
                until I crowned it with my death your fourteen steps will not be
                complete until you crown them with your life” Accept each moment
                that comes to you with faith and trust. All that happens to you
                has my mark on it, seek me not in far-away places. I am very
                close to you, your home, your working place, on the streets, the
                markets, at the playgrounds these are altars where you offer
                love and I am there with you I want you to live your life. So
                now! Take up your cross and follow me.
              </Text>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.h2}>PRAYER BEFORE A CRUCIFIX</Text>
                </View>
                <Text style={styles.defaultText}>
                  “O good and gentle Jesus, before thy face I humbly kneel and
                  with the greatest fervor of spirit I beg and beseech of thee
                  to implant firmly into my heart lively sentiments of faith,
                  hope and charity; contrition for my sins and firm purpose of
                  amendment. Meanwhile, I meditate on thy five most precious
                  wounds, having ever before my eyes the words of David, the
                  prophet, concerning thee, my Jesus: ‘they have pierced my
                  hands and my feet, they have numbered all my bones.”
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <Text style={styles.defaultText}>V. Parce Domine,</Text>
                <Text style={styles.defaultText}>R. Parce populo tuo</Text>
              </View>

              <View style={styles.mainContentView}>
                <Text style={styles.defaultText}>Pie Jesu Domine;</Text>
                <Text style={styles.defaultText}>Ne in aeternum {"}"} 3x</Text>
              </View>

              <View style={styles.mainContentView}>
                <Text style={styles.defaultText}>
                  Dona eis requiem Irascaris nobis {"}"} Sempiternam.
                </Text>
              </View>

              <View style={styles.mainContentView}>
                <Text style={styles.defaultText}>Jube, Domine Benedicere</Text>
              </View>

              <View style={styles.mainContentView}>
                <View style={styles.mainContentCenterContainer}>
                  <Text style={styles.h2}>THE BLESSING</Text>
                </View>
                <Text style={styles.defaultText}>
                  May our Lord Jesus Christ, who was scourged for our sake, who
                  carried his cross, and who was crucified for our sake, bless
                  us in the name of the Father, and of the Son, and of the Holy
                  Spirit Amen.
                </Text>
              </View>
            </View>
          </ScrollView>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
}

export default Conclusion;
