import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';

export default function Home(params){
    const navigation = params.navigation;

    return (
    <View style={styles.base}>

        <View style={{flexDirection: "row", marginTop: 43,}}>
            <View style={{flexDirection: "row", justifyContent: "flex-start", }}>
            <View style={styles.iconsEdit}>
                <Image
                    style={{width: 24, height: 24}} 
                    source={require('../assets/moreIcon.png')}/>
            </View>
            </View>

            <View style={{flexDirection: "row", justifyContent: "flex-end", }}>
            <View style={styles.iconsEdit}>
                <Ionicons name="md-notifications-outline" size={24} color="#4D4D4D" />
            </View>
            </View>
        </View>

        <Text>Lets goooo!</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        //justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins",
    },
    schoolName: {
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 30,
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
    },
  });