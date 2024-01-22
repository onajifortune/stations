import { Text, View, Image } from "react-native";
import {
  PanGestureHandler,
  ScrollView,
  State,
} from "react-native-gesture-handler";
import styles from "../../mainStyles";

function FirstStation({ navigation }) {
  const onSlideComplete = (event) => {
    if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX < 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Second Station");
    } else if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX > 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Introduction");
    }
  };
  return (
    <PanGestureHandler onHandlerStateChange={onSlideComplete}>
      <ScrollView>
        <View style={styles.mainContent}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.h2}>JESUS IS CONDEMNED TO DEATH</Text>
            <Image
              source={require("../img/small/station-cross1.jpg")}
              style={styles.mainContentImg}
            />
          </View>
          <Text style={styles.defaultText}>
            V. We adore you, O Christ, and we Praise you.
          </Text>
          <Text style={styles.defaultText}>
            R. Because by your holy cross you have redeemed the world
          </Text>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>
                READING: (JOHN 19:12-16)
              </Text>
            </View>
            <Text style={styles.defaultText}>
              Pilate sought to release him, but the Jews cried out, “if you
              release this man, you are not Caesar’s friend; everyone who make
              himself a king sets himself against Caesar.” When Pilate heard
              these words, he brought Jesus out and said to the Jews “Here is
              your king!” They cried out away with him, away with him, crucify
              him!” Pilate said to them, “shall I crucify your king?” The chief
              priests answered, “We have no king but Caesar!” Then he handed him
              over to them to be crucified.
            </Text>
          </View>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>CHRIST SPEAKS</Text>
            </View>
            <Text style={styles.defaultText}>
              In Pilate’s hands, my friend, I see my father’s will it is true
              that Pilate is unjust but he is the lawful governor and he has
              power over me; and so the son of God obeys a son of man if I will
              bow to Pilate’s rule, because this is my Father’s will can you
              refuse obedience to those whom I have placed over you?
            </Text>
          </View>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>MAN RESPONDS</Text>
            </View>
            <Text style={styles.defaultText}>
              Lord Jesus, obedience cost you your life for me, it costs an act
              of will – no more and yet, how hard it is for me to bend remove
              the blinders from my eyes that I may see that it is you whom I
              obey in all who govern me Lord it is you
            </Text>
          </View>

          <View style={styles.mainContentView}>
            <Text style={styles.defaultText}>V: Have mercy on us O Lord</Text>
            <Text style={styles.defaultText}>R: Have mercy on us</Text>
          </View>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>HYMN</Text>
            </View>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultText}>
                Through her heart his sorrow sharing,
              </Text>
              <Text style={styles.defaultText}>
                all his bitter anguish bearing
              </Text>
              <Text style={styles.defaultText}>
                now at length the sword had passed.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </PanGestureHandler>
  );
}

export default FirstStation;
