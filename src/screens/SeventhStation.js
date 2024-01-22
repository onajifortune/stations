import { Text, View, Image } from "react-native";
import {
  PanGestureHandler,
  ScrollView,
  State,
} from "react-native-gesture-handler";
import styles from "../../mainStyles";

function SeventhStation({ navigation }) {
  const onSlideComplete = (event) => {
    if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX < 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Eighth Station");
    } else if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX > 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Sixth Station");
    }
  };
  return (
    <PanGestureHandler onHandlerStateChange={onSlideComplete}>
      <ScrollView>
        <View style={styles.mainContent}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.h2}>JESUS FALLS AGAIN</Text>
            <Image
              source={require("../img/small/station-cross7.jpg")}
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
                READING: (ISAIAH 53:4-6)
              </Text>
            </View>
            <Text style={styles.defaultText}>
              Surely he has borne our griefs and carried our sorrows; yet we
              esteemed him stricken, smitten by God, and afflicted. But he was
              wounded for our transgressions, he was bruised for our iniquities;
              upon him was the chastisement that made us whole, and with his
              stripes we are healed. All we, like sheep, have gone astray; we
              have turned everyone to his own way; and the lord has laid on him
              the iniquity of us all.
            </Text>
          </View>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>CHRIST SPEAKS</Text>
            </View>
            <Text style={styles.defaultText}>
              This seventh step, my child, is one that tests your will from this
              fall learn to persevere in doing good, never say, I can’t go on.
              Come to me and I will give you rest trust me and carry on.
            </Text>
          </View>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>MAN RESPONDS</Text>
            </View>
            <Text style={styles.defaultText}>
              Difficulties remain difficult, Lord! When failure presses heavily
              on me and I am desolate, discouraged, stretch out your hand to
              lift me up. Alone, there is nothing I can do. With you, I can do
              all things, I will.
            </Text>
          </View>

          <View style={styles.mainContentView}>
            <Text style={styles.defaultText}>V. come to our aid, o lord!</Text>
            <Text style={styles.defaultText}>R: come to our aid.</Text>
          </View>

          <View style={styles.mainContentView}>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultTextHead}>HYMN</Text>
            </View>
            <View style={styles.mainContentCenterContainer}>
              <Text style={styles.defaultText}>
                For the sins of his own nation
              </Text>
              <Text style={styles.defaultText}>saw him hang in desolation</Text>
              <Text style={styles.defaultText}>
                Till his spirit forth he sent.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </PanGestureHandler>
  );
}

export default SeventhStation;
