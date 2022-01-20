import React, {useState} from "react";
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';


import {englishdata, mathdata} from '../assets/component/Data'

export default function Home({navigation}){


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
              <Ionicons
                name="md-notifications-outline"
                size={24}
                color="#4D4D4D"
              />
            </View>
      
        </View>

        <Text style={styles.title}>Seek knowledge</Text>

        <View style={{ flexDirection: "row", alignItems:'center', width: '100%' }}>
          <View style={styles.searchbox}>
            
            <Feather name="search" size={24} color="#A3A3A2" style={{marginLeft: 15}}/>

            <TextInput 
            placeholder="search"
            style={styles.searchTxt}
            />
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

        <View>
          <Image source={require('../assets/English2.jpg')} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 15,
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
      justifyContent: 'space-between'
    },
    schoolMotto: {
        fontSize: 16,
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

    searchbox: {
        flexDirection: "row",
        width: '82%',
        height: 50,
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
        fontFamily: 'PoppinsLight',
        width: '100%'
    },

    filter: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#283054",
        width: 50,
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 15,
    },

    subjectHead: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        justifyContent: 'space-between'
    },

    subjectName: {
        fontSize: 16,
        fontFamily: 'PoppinsRegular'
    },

    seeAll: {
        fontSize: 14,
        color: "#A3A3A2",
        fontFamily: 'PoppinsLight'
    },
  });