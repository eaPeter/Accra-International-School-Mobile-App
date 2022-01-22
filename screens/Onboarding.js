import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';

export default function Onboarding(params){
    const navigation = params.navigation;

    const shadowStyle={
        shadowOpacity: 0.5,
        shadowRadius: 6,
        shadowColor: '#283054',
        shadowOffset: {width:0, height: 5},
    }
    
    return (
        <View style={styles.base}>
            <Image 
                style={{width: 327.61, height: 300}} 
                source={require('../assets/Learning.png')}/>

            <Text style={styles.title}>Revise and learn ahead</Text>
            <Text style={{fontSize: 24, fontFamily: 'PoppinsSemiBold' }}>anywhere</Text>
            <Text style={styles.sub}>Resources such as books and videos</Text>
            <Text style={{fontSize: 16, fontFamily: 'PoppinsRegular' }}>are available at no cost.</Text>

            <View style={{flexDirection: 'row', }}>
                <View style={styles.rectangleMain}/>
                <View style={styles.rectangleOthers}/>
                <View style={styles.rectangleOthers}/>
            </View>

            <TouchableOpacity
            activeOpacity={0.6}
                onPress={() => {navigation.navigate("Drawer")}}
                style={styles.btn}
                >
                <Text style={styles.btnText}>Next</Text>
                <Ionicons name="chevron-forward" size={22} color="white" />
            </TouchableOpacity>

            <Text style={styles.skipTxt}>Skip</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    base: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
      fontSize: 24,
      fontFamily: 'PoppinsSemiBold',
      marginTop: 20,
    },

    sub: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'PoppinsRegular'
      },

    rectangleMain: {
        marginTop: 30,
        width: 25,
        height: 4,
        backgroundColor: '#283054',
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 2,
        borderRadius: 4,
    },

    rectangleOthers: {
        marginTop: 30,
        width: 25,
        height: 4,
        backgroundColor: '#B7B7B7',
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 2,
        borderRadius: 4,
    },

    btn: {
        height: 48,
        width: 302,
        backgroundColor: '#283054',
        marginTop: 30,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        shadowColor: '#283054',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    btnText: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 18,
        color: "white",
        marginRight: 4,
        marginTop: 4
    },

    skipTxt: {
        fontFamily: 'PoppinsMedium',
        fontSize: 18,
        fontWeight: '500',
        marginTop: 20,
    },
  });