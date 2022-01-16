import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Splash(){
    return (
        <View style={styles.base}>
            <Image 
                style={{width: 214, height: 162}} 
                source={require('../images/my_school_logo.png')}/>
            <Text style={styles.schoolName}>Accra International School</Text>
            <Text style={styles.schoolMotto}>Training our leaders for today</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins",
    },
    schoolName: {
      fontSize: 24,
      fontWeight: "bold",
      paddingTop: 30,
    },
    schoolMotto: {
        fontSize: 14,
        fontWeight: "regular",
        paddingTop: 10,
      }
  });