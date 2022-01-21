import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home(params){
    const navigation = params.navigation;

    return (
      <View style={styles.base}>
        <View style={styles.headerIconsWrapper}>
          <View style={styles.iconsEdit}>
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/moreIcon.png")}
            />
          </View>

          <View style={styles.iconsEdit}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Notifications");
              }}
            >
              <Ionicons
                name="md-notifications-outline"
                size={24}
                color="#4D4D4D"
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.title}>Seek knowledge</Text>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.searchbox}>
            <View style={{ marginLeft: 15 }}>
              <Feather name="search" size={22} color="#A3A3A2" />
            </View>

            <Text style={styles.searchTxt}>Search</Text>
          </View>

          <View style={styles.filter}>
            <Image
              style={{ width: 21.01, height: 19.79 }}
              source={require("../assets/filterIcon.png")}
            />
          </View>
        </View>

        <View style={styles.subjectHead}>
            <Text style={styles.subjectName}>English Language</Text>
            <Text style={styles.seeAll}>See all</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15
    },

    title: {
      fontSize: 24,
      marginTop: 30,
      fontFamily: 'PoppinsSemiBold',
      lineHeight: 36
    },

    headerIconsWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
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
    },

    searchbox: {
        flexDirection: "row",
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
        fontFamily: "Poppins",
    },

    filter: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#283054",
        width: 45,
        height: 45,
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 15,
    },

    subjectHead: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "space-between",
    },

    subjectName: {
        fontSize: 16,
        fontFamily: 'PoppinsMedium',
    },

    seeAll: {
        fontSize: 14,
        color: "#A3A3A2",
        fontFamily: 'PoppinsLight',
    },
  });