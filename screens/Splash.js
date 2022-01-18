import React from "react";
import { StyleSheet, Text, View, Image,  TouchableOpacity} from 'react-native';
//import { TouchableOpacity } from "react-native-gesture-handler";


export default function Splash(params){
    const navigation = params.navigation;

    return (
        <View style={styles.base}>
            <Image 
                style={{width: 214, height: 162}} 
                source={require('../assets/my_school_logo.png')}/>

            <Text style={styles.schoolName}>Accra International School</Text>
            <Text style={styles.schoolMotto}>Training our leaders for today</Text>

            <TouchableOpacity
                onPress={() => {navigation.navigate("Onboarding");
                }}
                style={{height: 50, width: 100, marginTop: 30, backgroundColor: "red", justifyContent: "center",
                alignItems: "center",}}
                >
                    <Text>Continue</Text>
            </TouchableOpacity>
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
      marginTop: 30,
    },
    schoolMotto: {
        fontSize: 14,
        fontWeight: "regular",
        marginTop: 10,
      },
  });