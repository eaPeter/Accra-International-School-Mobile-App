import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, Feather } from '@expo/vector-icons';

export default function Home(params){
    const navigation = params.navigation;

    return (
      <View style={styles.base}>
        <View style={{ flexDirection: "row", marginTop: 43 }}>
          <View style={{ flexDirection: "row", marginLeft: 15 }}>
            <View style={styles.iconsEdit}>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("../assets/moreIcon.png")}
              />
            </View>
          </View>

          <View
            style={{ flexDirection: "row", marginLeft: 255, marginRight: 15 }}
          >
            <View style={styles.iconsEdit}>
              <Ionicons
                name="md-notifications-outline"
                size={24}
                color="#4D4D4D"
              />
            </View>
          </View>
        </View>

        <Text style={styles.title}>Seek knowledge</Text>

        <View style={{flexDirection: "row"}}>
          <View style={styles.searchbox}>
            <View style={{ marginLeft: 15 }}>
              <Feather name="search" size={22} color="#A3A3A2" />
            </View>

            <Text style={styles.searchTxt}>Search</Text>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
        fontFamily: "Poppins",
    },

    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 30,
      marginLeft: 15,
    },

    schoolMotto: {
        fontSize: 16,
        fontWeight: "regular",
        marginTop: 10,
      },

    iconsEdit: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 45,
        height: 45,
        borderWidth: 1,
        borderColor: "#C2C2C2",
        borderRadius: 45,
        paddingHorizontal: 15,
    },

    searchbox: {
        flexDirection: "row",
        marginLeft: 15,
        width: 285,
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#A3A3A2",
        marginTop: 20,
        alignItems: "center",
    },

    searchTxt: {
        fontSize: 14,
        color: "#A3A3A2",
        paddingLeft: 10,
    },
  });