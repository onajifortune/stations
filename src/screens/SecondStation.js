import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import styles from "../../mainStyles";

function SecondStation() {
  return (
    <ScrollView>
      <View style={styles.mainContent}>
        <View style={styles.mainContentCenterContainer}>
          <Text style={styles.h2}>JESUS TAKES HIS CROSS</Text>
          <Image
            source={require("../img/small/station-cross2.jpg")}
            style={styles.mainContentImg}
          />
        </View>

        <Text style={styles.defaultText}>
          V. We adore you, O Christ, and we praise you.
        </Text>
        <Text style={styles.defaultText}>
          R. Because by your holy cross you Have redeemed the world
        </Text>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>READING: (JOHN 19:17)</Text>
          </View>
          <Text style={styles.defaultText}>
            So they took Jesus, and he went out, bearing his own cross, to the
            place of a skull, which is called in Hebrew Golgotha.
          </Text>
        </View>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>CHRIST SPEAKS</Text>
          </View>
          <Text style={styles.defaultText}>
            This cross this chunk of tree, is what my father chose for me. the
            crosses you must bear are largely products of your daily life. Your
            weakness, dissatisfaction, insufficiency. And yet my father, your
            father chose them too, for you. Receive them from his hands.
          </Text>
        </View>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>MAN RESPONDS</Text>
          </View>
          <Text style={styles.defaultText}>
            Lord Jesus, I take my daily cross I welcome the monotony, discomfort
            of all kinds, my disappointments, tensions, setback, cares, worries,
            all of them. I accept them remind me often that in carrying my
            cross, I am carrying yours with you.
          </Text>
        </View>

        <View style={styles.mainContentView}>
          <Text style={styles.defaultText}>V. Grant us your help, O Lord</Text>
          <Text style={styles.defaultText}>R: Grant us your help!</Text>
        </View>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>HYMN</Text>
          </View>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>
              Oh, how sad and sore distressed
            </Text>
            <Text style={styles.defaultText}>
              was that mother highly blessed
            </Text>
            <Text style={styles.defaultText}>Of the sole-begotten one!</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default SecondStation;
