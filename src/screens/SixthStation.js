import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import styles from "../../mainStyles";

function SixthStation() {
  return (
    <ScrollView>
      <View style={styles.mainContent}>
        <View style={styles.mainContentCenterContainer}>
          <Text style={styles.h2}>VERONICA WIPES THE FACE OF JESUS</Text>
          <Image
            source={require("../img/small/station-cross6.jpg")}
            style={styles.mainContentImg}
          />
        </View>

        <Text style={styles.defaultText}>
          V. We adoare you, O Christ, and we praise you.
        </Text>
        <Text style={styles.defaultText}>
          R. because by your holy cross you have redeemed the world
        </Text>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>READING: (ISAIAH 53:1-3)</Text>
          </View>
          <Text style={styles.defaultText}>
            Who has believed what we have heard? And to whom has the arm of the
            Lord been revealed? For he grew up before him like a young plant,
            and like a root out of dry ground; he had no form or comeliness that
            we should look at him, and no beauty that we should desire him. He
            was despised and rejected by men; a man of sorrows, and acquainted
            with grief, and as one from whom men hide their faces he was
            despised and we esteemed him not.
          </Text>
        </View>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>CHRIST SPEAKS</Text>
          </View>
          <Text style={styles.defaultText}>
            Can you be brave enough to wipe my bloody face? “where is your
            face?” you may ask me. and I will answer; “everywhere: at home
            whenever eyes fill up with tears at work when tensions rise in the
            classroom, on playgrounds, in the remote and dirty villages, the
            court, the hospitals, the jails, wherever suffering exists, my face
            is there and there I look for you to wipe away my blood and tears.
          </Text>
        </View>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>MAN RESPONDS</Text>
          </View>
          <Text style={styles.defaultText}>
            Lord, this is hard it needs courage and self sacrifice it is an
            uncomfortable job but I will not run away from it come and act in me
            and not in me alone – in all men so that we may reveal not your
            bloody but your glorious face on earth.
          </Text>
        </View>

        <View style={styles.mainContentView}>
          <Text style={styles.defaultText}>V. Have mercy on us, O Lord!</Text>
          <Text style={styles.defaultText}>R. Have mercy on us.</Text>
        </View>

        <View style={styles.mainContentView}>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>HYMN</Text>
          </View>
          <View style={styles.mainContentCenterContainer}>
            <Text style={styles.defaultText}>
              Bruised, derided cursed, defiled,
            </Text>
            <Text style={styles.defaultText}>she beheld her tender child</Text>
            <Text style={styles.defaultText}>
              All with bloody scourges rent
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default SixthStation;
