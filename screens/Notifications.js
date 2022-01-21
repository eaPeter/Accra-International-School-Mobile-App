import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, } from '@expo/vector-icons';

export default function Notifications(params){
    const navigation = params.navigation;

    return (
      <View style={styles.base}>
          <View>
          <View style={styles.headerIconsWrapper}>
              
          <View style={{position: "absolute", left: 15}}>
          <TouchableOpacity  onPress={() => {navigation.navigate("Home");
                }}>
          <View style={styles.iconsEdit}>
              <Ionicons name="chevron-back" size={24} color="#4D4D4D" />
            </View>
          </TouchableOpacity>
            
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>Notifications</Text>
          </View>
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
        paddingHorizontal: 15
    },

    title: {
        fontSize: 24,
        //marginTop: 30,
        fontFamily: 'PoppinsSemiBold',
        lineHeight: 36,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    
    headerIconsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
    },

    retryTxt: {
        fontSize: 14,
        fontFamily: "PoppinsRegular",
        marginTop: 10,
    },
  });