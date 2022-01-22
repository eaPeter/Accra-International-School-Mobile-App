import React, {useEffect} from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Splash({navigation}){
    

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Onboarding")
        }, 2000)
    })

    return (
        <View style={styles.base}>
            <Image 
                style={{width: 214, height: 162}} 
                source={require('../assets/my_school_logo.png')}/>

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
    },
    schoolName: {
      fontSize: 24,
      fontFamily: "PoppinsSemiBold",
      marginTop: 30,
    },
    schoolMotto: {
        fontFamily: "PoppinsRegular",
        fontSize: 14,
        marginTop: 10,
      },
  });