import { SafeAreaView, Text, View } from "react-native";
import {
  PanGestureHandler,
  ScrollView,
  State,
} from "react-native-gesture-handler";
import styles from "../../mainStyles";

function Base({ navigation }) {
  const onSlideComplete = (event) => {
    if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX < 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("First Station");
    } else if (
      event.nativeEvent.state === State.END &&
      event.nativeEvent.velocityX > 0 &&
      Math.abs(event.nativeEvent.velocityX) >
        Math.abs(event.nativeEvent.velocityY)
    ) {
      // Navigate to Screen2 only if the gesture ends and has a positive velocity (rightward)
      navigation.navigate("Stations of the Cross");
    }
  };
  return (
    <SafeAreaView style={styles.mainContent}>
      <PanGestureHandler onHandlerStateChange={onSlideComplete}>
        <ScrollView>
          <View style={styles.introduction}>
            <Text style={styles.defaultText}>
              In the name of the Father, and of the Son and of the Holy Spirit
              Amen.
            </Text>

            <View style={styles.mainContentView}>
              <View style={styles.mainContentCenterContainer}>
                <Text style={styles.h2}>CHRIST SPEAKS</Text>
              </View>
              <Text style={styles.defaultText}>
                These fourteen steps you are about to walk, you do not take
                alone. I am with you, we are truly one. And therefore my way of
                the cross, two thousand years ago and your own “way” now are
                also one. Yet there is a difference; my life was incomplete
                until crowned it with my death. Your fourteen steps will not be
                complete until you crown them with your life.
              </Text>
            </View>

            <View style={styles.mainContentView}>
              <View style={styles.mainContentCenterContainer}>
                <Text style={styles.h2}>MAN RESPONDS</Text>
              </View>
              <Text style={styles.defaultText}>
                My Lord Jesus Christ, you walked this road of suffering even to
                your death. You did this for me. and yet I have so often failed
                to love of you by my sins. Now I want to love you with all my
                heart and to turn away from everything that offends you. Pardon
                me my God. Allow me to follow you on this journey. You went out
                to die for love of me. give me the courage and the faith to be
                able to die with love of you whenever the right time comes. I
                want to live and die always united to you, Amen.
              </Text>
            </View>

            <View style={styles.mainContentView}>
              <View style={styles.mainContentCenterContainer}>
                <Text style={styles.h2}>HYMN</Text>
              </View>
              <View style={styles.mainContentCenterContainer}>
                <Text style={styles.defaultText}>
                  At the Cross her station keeping.
                </Text>
                <Text style={styles.defaultText}>
                  stood the mournful mother weeping
                </Text>
                <Text style={styles.defaultText}>
                  close to Jesus to the last.
                </Text>
                <View style={{ height: 83 }}></View>
              </View>
            </View>
          </View>
        </ScrollView>
      </PanGestureHandler>
    </SafeAreaView>
  );
}

export default Base;
