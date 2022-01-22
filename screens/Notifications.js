import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, } from '@expo/vector-icons';

export default function Notifications({navigation}){

    return (
      <View style={styles.base}>
        <View>
          <View style={styles.headerIconsWrapper}>
            
              <TouchableOpacity
              activeOpacity={0.8}
              style={styles.iconsEdit}
                onPress={() => {
                  navigation.navigate("Drawer");
                }}
              >
                <Ionicons name="chevron-back" size={24} color="#4D4D4D" />
              </TouchableOpacity>
              
              <Text style={styles.title}>Notifications</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Image
            style={{ width: 300.55, height: 300 }}
            source={require("../assets/notification.png")}
          />
          <Text style={styles.noNotificationsTxt}>No notifications yet!</Text>
          <Text>Retry later to check for any new notifications</Text>
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
    base: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
        backgroundColor: 'white'
    },

    title: {
        fontSize: 24,
        fontFamily: 'PoppinsSemiBold',
        lineHeight: 36,
        marginLeft: 60
    },
    
    headerIconsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
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

    content: {
        justifyContent: "center",
        alignItems: "center",
        height: "80%",
    },

    noNotificationsTxt: {
        fontSize: 18,
        fontFamily: "PoppinsMedium",
        marginTop: 20
    },

    retryTxt: {
        fontSize: 14,
        fontFamily: "PoppinsRegular",
        marginTop: 10,
    },
  });