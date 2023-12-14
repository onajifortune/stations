import { useState } from "react";
// import "../main.css";
// import { Outlet, Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import sideIcon from "../img/download.jpg";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import styles from "../../mainStyles";
import { Feather } from "@expo/vector-icons";

function Header() {
  const [display, setDisplay] = useState("");

  const toggleDisplay = () => {
    if (display === "") {
      setDisplay("block");
      styles.sidebar.display = display;
      console.log(display);
    } else if (display === "block") {
      setDisplay("");
      styles.sidebar.display = display;
      console.log(display);
    }
  };

  const noDisplay = () => {
    setDisplay("");
  };

  return (
    <View>
      <View className="main-header">
        <View style={styles.mainHeader}>
          <Image
            source={require("../img/download.jpg")}
            style={styles.mainHeaderImage}
          />
          <Feather
            name="menu"
            size={24}
            color="black"
            onPress={toggleDisplay}
          />
        </View>
      </View>
      <View style={styles.sidebar}>
        <Text>Yo</Text>
      </View>
      <View style={[styles.mainTitle, styles.mainContent]}>
        <Text style={styles.h1}>STATIONS OF THE CROSS</Text>
      </View>
    </View>

    // <>
    //   <header className="main-header">
    //     <View>
    //       <Link onClick={noDisplay} to="/" className="main-header__brand">
    //         <Image src={sideIcon} style={styles.mainContentImg} />
    //         {/* Stations of the cross */}
    //       </Link>
    //       <MenuIcon onClick={toggleDisplay} />
    //     </View>
    //   </header>
    //   <aside className="sidebar" style={{ display: display }}>
    //     <nav className="main-nav">
    //       <ul className="main-nav__items">
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="first">
    //             First Station
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="second">
    //             Second Station
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="third">
    //             Third Station
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="fourth">
    //             Fourth Station
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="fifth">
    //             Fifth Station
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="sixth">
    //             Sixth Station
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="seventh">
    //             Seventh Station
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="eighth">
    //             Eighth Station
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="nineth">
    //             Nineth Station
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="tenth">
    //             Tenth Station
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="eleventh">
    //             Eleventh Station
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="twelveth">
    //             Twelveth Station
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="thirteenth">
    //             Thirteenth Station
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="fourteenth">
    //             Fourteenth Station
    //           </Link>
    //         </li>
    //         <li className="main-nav__item">
    //           <Link onClick={noDisplay} to="conclusion">
    //             Conclusion
    //           </Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </aside>
    //   <Outlet />
    // </>
  );
}

export default Header;
