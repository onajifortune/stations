import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../Header";
import Introduction from "../../screens/Introduction";
import Conclusion from "../../screens/Conclusion";
import EighthStation from "../../screens/EighthStation";
import EleventhStation from "../../screens/EleventhStation";
import FifthStation from "../../screens/FifthStation";
import FirstStation from "../../screens/FirstStation";
import FourteenthStation from "../../screens/FourteenthStation";
import FourthStation from "../../screens/FourthStation";
import NinethStation from "../../screens/NinethStation";
import SecondStation from "../../screens/SecondStation";
import SeventhStation from "../../screens/SeventhStation";
import SixthStation from "../../screens/SixthStation";
import TenthStation from "../../screens/TenthStation";
import ThirdStation from "../../screens/ThirdStation";
import ThirteenthStation from "../../screens/ThirtheenthStation";
import TwelfthStation from "../../screens/TwelfthStation";
import Home from "../../screens/Home";

const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stations of the Cross" component={Home} />
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="Conclusion" component={Conclusion} />
      <Stack.Screen name="First Station" component={FirstStation} />
      <Stack.Screen name="Second Station" component={SecondStation} />
      <Stack.Screen name="Third Station" component={ThirdStation} />
      <Stack.Screen name="Fourth Station" component={FourthStation} />
      <Stack.Screen name="Fifth Station" component={FifthStation} />
      <Stack.Screen name="Sixth Station" component={SixthStation} />
      <Stack.Screen name="Seventh Station" component={SeventhStation} />
      <Stack.Screen name="Eighth Station" component={EighthStation} />
      <Stack.Screen name="Nineth Station" component={NinethStation} />
      <Stack.Screen name="Tenth Station" component={TenthStation} />
      <Stack.Screen name="Eleventh Station" component={EleventhStation} />
      <Stack.Screen name="Twelfth Station" component={TwelfthStation} />
      <Stack.Screen name="Thirteenth Station" component={ThirteenthStation} />
      <Stack.Screen name="Fourteenth Station" component={FourteenthStation} />
    </Stack.Navigator>
  );
}

export default Tabs;
