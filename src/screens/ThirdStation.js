import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import styles from "../../mainStyles";

function ThirdStation() {
  return (
    <ScrollView>
      <View style={styles.mainContent}>
        <View style={styles.mainContentCenterContainer}>
          <Text style={styles.h2}>JESUS FALLS THE FIRST TIME</Text>
          <Image
            source={require("../img/small/station-cross3.jpg")}
            style={styles.mainContentImg}
          />
        </View>

        <Text style={styles.defaultText}>
          V. We adore you, O Christ, and we praise you.
        </Text>
        <Text style={styles.defaultText}>
          R. Because by your holy cross you Have redeemed the world.
        </Text>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>READING: (ISAIAH 50:5-7)</Text>
          </View>
          <Text style={styles.defaultText}>
            The Lord God has opened my ear, and I was not rebellious, I turned
            not backward. I gabe my back to the smiters, and my cheeks to those
            who pulled out the beard; I did not hide my face from shame and
            spitting. For the Lord God helps me; therefore I have not been
            confounded.
          </Text>
        </View>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>CHRIST SPEAKS</Text>
          </View>
          <Text style={styles.defaultText}>
            The God who made the universe and holds it in existence the God who
            directs the movement of the cosmos, this God is, as man, too weak to
            bear a piece of timber. That is the will of my father I could not be
            your model otherwise. If you would be my follower you also must
            accept without complaint your human limitations.
          </Text>
        </View>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>MAN RESPONDS</Text>
          </View>
          <Text style={styles.defaultText}>
            Lord Jesus, how can I refuse? I willingly accept my weakness
            irritation and my moods, my headaches and fatigues, my difficulties
            in work and home all my defects of body, mind and soul. These
            “handicaps” of my humanity are your will for me I accept them gladly
            after your fall, you picked yourself up now pick me up, Lord.
          </Text>
        </View>

        <View style={styles.mainContentView}>
          <Text style={styles.defaultText}>V: Grant us your help, O Lord!</Text>
          <Text style={styles.defaultText}>R: Grant us your help!</Text>
        </View>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>HYMN</Text>
          </View>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>
              Christ above in torments hangs;
            </Text>
            <Text style={styles.defaultText}>
              she – beneath beholds the pangs
            </Text>
            <Text style={styles.defaultText}>of her dying glorious son.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ThirdStation;
