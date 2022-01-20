import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, } from '@expo/vector-icons';

export default function Notifications(params){
    const navigation = params.navigation;

    return (
    <View style={styles.base}>
        <View style={styles.headerIconsWrapper}>
         <View style={styles.iconsEdit}>
            <Ionicons name="chevron-back" size={24} color="#4D4D4D" />
            <Text style={styles.title}>Notifications</Text>
        </View>
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
  });