import { Text, View, Image } from "react-native";
import {
  PanGestureHandler,
  ScrollView,
  State,
} from "react-native-gesture-handler";
import styles from "../../mainStyles";

function FourteenthStation({ navigation }) {
  const onSlideComplete = (event) => {
    if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX < 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Conclusion");
    } else if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX > 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Thirteenth Station");
    }
  };
  return (
    <PanGestureHandler onHandlerStateChange={onSlideComplete}>
      <ScrollView>
        <View style={styles.mainContent}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.h2}>JESUS IS BURIED</Text>
            <Image
              source={require("../img/small/station-cross14.jpg")}
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
                READING: (JOHN 19:40-42)
              </Text>
            </View>
            <Text style={styles.defaultText}>
              They took the Body of Jesus, and bound it in lines clothes with
              the spices, as is the burial customs of the Jews. Now in the place
              where he was crucified there was a garden, and in the garden a new
              tomb where no one had ever been laid, so because of the Jewish day
              of preparation, as the tomb was close at hand, they laid Jesus
              there.
            </Text>
          </View>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>CHRIST SPEAKS</Text>
            </View>
            <Text style={styles.defaultText}>
              So ends my mortal life but now another life begins for Mary and
              for Magdalene for Peter and John for you my work as man is done.
              My work within and through the church must now commence. I look to
              you. You are my friend you are my apostle.
            </Text>
          </View>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>MAN RESPONDS</Text>
            </View>
            <Text style={styles.defaultText}>
              Lord Jesus, it is hard to be your apostle the demands are great.
              You have completed your work, what is left is mine, that of my
              fellowmen that of your church. The teachings you could not impart,
              let me impart. The sufferings you could not bear, let me bear. The
              work of love you could not do in you short life on earth. Let me
              do- all through you for you are all in all.
            </Text>
          </View>

          <View style={styles.mainContentView}>
            <Text style={styles.defaultText}>V. Come to our aide O Lord.</Text>
            <Text style={styles.defaultText}>R: Come to our aid.</Text>
          </View>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>HYMN</Text>
            </View>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultText}>while my body here decays;</Text>
              <Text style={styles.defaultText}>
                may my soul thy goodness praise
              </Text>
              <Text style={styles.defaultText}>
                Safe in paradise with thee. Amen.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </PanGestureHandler>
  );
}

export default FourteenthStation;
