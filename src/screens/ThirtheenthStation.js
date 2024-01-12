import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import styles from "../../mainStyles";

function ThirteenthStation() {
  return (
    <ScrollView>
      <View style={styles.mainContent}>
        <View style={styles.mainContentCenterContainer}>
          <Text style={styles.h2}>JESUS IS TAKEN DOWN FROM THE CROSS</Text>
          <Image
            source={require("../img/small/station-cross13.jpg")}
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
            <Text style={styles.defaultTextHead}>READING: (JOHN 19:38-39)</Text>
          </View>
          <Text style={styles.defaultText}>
            After this joseph of Arimathea who was a disciple of Jesus, but
            secretly, for fear of the Jews, asked pilate that the might take
            away the body of Jesus, and Pilate gave him leave. So he came and
            took away his body. Nicodemus also, who had at first come to him by
            night, came bringing a mixture of myrrh and aloes, about a hundred
            pounds weight.
          </Text>
        </View>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultTextHead}>CHRIST SPEAKS</Text>
          </View>
          <Text style={styles.defaultText}>
            The sacrifices is done. Yes, my mass is complete. But not my
            mother’s and not yours those you love will part from you and grief
            will come to you. You too will die one day-a day you do not know.
            Are you prepared for it?
          </Text>
        </View>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultTextHead}>MAN RESPONDS</Text>
          </View>
          <Text style={styles.defaultText}>
            Lord, help me to accept the partings that must come from friends who
            go away, and most of all my dear ones when you shall call them to
            eternal life. Help me to get ready so that the D-Day whenever it
            comes will not be a shock to me
          </Text>
        </View>

        <View style={styles.mainContentView}>
          <Text style={styles.defaultText}>V. Have mercy on us, O Lord</Text>
          <Text style={styles.defaultText}>R: Have mercy on us.</Text>
        </View>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultTextHead}>HYMN</Text>
          </View>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>
              by the cross with thee to stay;
            </Text>
            <Text style={styles.defaultText}>
              there with thee to weep and pray,
            </Text>
            <Text style={styles.defaultText}>is all I ask thee to give.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ThirteenthStation;
