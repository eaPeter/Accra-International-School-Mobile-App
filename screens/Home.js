import React, {useState} from "react";
import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';


export default function Home({navigation}){



  const englishdata = [
    {
        id: 1,
        image: require("../assets/English1.jpg"),
        title: 'The Good English Academy Aljamar ',
        edition: 'Junior High Edition',
        rating: '5.0',
    },
    {
        id: 2,
        image: require("../assets/English2.jpg"),
        title: 'Learn to Speak Good English',
        edition: 'Primary Edition',
        rating: '4.0',
    }
  ]

  
  const mathdata = [
    {
        id: 1,
        image: require("../assets/math1.jpg"),
        title: 'Know your numbers - For kids',
        edition: 'Kindergarten Edition',
        rating: '4.0',
    },
    {
        id: 2,
        image: require("../assets/math2.jpg"),
        title: 'Complete Youtube Guide on Algebra - Organic Chemistry',
        edition: 'Junior High Edition',
        rating: '5.0',
    }
 ]



  const renderAppropriateStarCount = (item_rating) => {
    if(item_rating === '5.0'){
      return(
        <View style={styles.stars}>
          <AntDesign name="star" size={12} color="#FFC700" style={styles.star}/>
          <AntDesign name="star" size={12} color="#FFC700" style={styles.star}/>
          <AntDesign name="star" size={12} color="#FFC700" style={styles.star}/>
          <AntDesign name="star" size={12} color="#FFC700" style={styles.star}/>
          <AntDesign name="star" size={12} color="#FFC700" style={styles.star}/>
        </View>
      )
    }else if(item_rating === '4.0'){
      return(
        <View style={styles.stars}>
          <AntDesign name="star" size={12} color="#FFC700" style={styles.star}/>
          <AntDesign name="star" size={12} color="#FFC700" style={styles.star}/>
          <AntDesign name="star" size={12} color="#FFC700" style={styles.star}/>
          <AntDesign name="star" size={12} color="#FFC700" style={styles.star}/>
          <AntDesign name="staro" size={12} color="#FFC700" style={styles.star}/>
        </View>
      )
    }
  }

  const renderData = ({item}) => {
    return(
      <View style={{width: 230, marginRight: 20, borderRadius: 10, marginLeft: item.id === 1 ? 15 : 0}}>
          <View style={styles.imageWrapper}>
            <Image source={item.image} style={styles.image}/>
          </View>

          <Text style={styles.tutorialTitle}>{item.title}</Text>

          <View style={{position: 'absolute', bottom: 0}}>
          <Text style={styles.edition}>{item.edition}</Text>

          <View style={styles.ratingsWrapper}>
            <Text style={styles.ratings}>{item.rating}</Text>
            {renderAppropriateStarCount(item.rating)}
          </View>
          </View>
      </View>
    )
  }

    return (
      <View style={styles.base}>
        <View style={styles.headerIconsWrapper}>
          <TouchableOpacity 
          activeOpacity={0.7}
          style={styles.iconsEdit}
          onPress={() => navigation.openDrawer()}
          >

            <Image
              style={{ width: 24, height: 24 }}
              source={require("../assets/moreIcon.png")}
            />
          </TouchableOpacity>

          <View style={styles.iconsEdit}>
            <TouchableOpacity
            activeOpacity={0.7}
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

        <View style={{ flexDirection: "row", alignItems:'center', width: '100%' ,paddingHorizontal: 15 }}>
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

        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginVertical: 10, paddingBottom: 20}}
        >
          <View style={styles.subjectHead}>
            <Text style={styles.subjectName}>English Language</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>

          <View style={{height: 280}}>
            <FlatList
            data={englishdata}
            renderItem={renderData}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />
          </View>


          <View style={styles.subjectHead}>
            <Text style={styles.subjectName}>Mathematics</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>

          <View style={{height: 280}}>
            <FlatList
            data={mathdata}
            renderItem={renderData}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
        

      </View>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "white"
    },

    title: {
      fontSize: 24,
      marginTop: 30,
      fontFamily: 'PoppinsSemiBold',
      lineHeight: 36,
      paddingHorizontal: 15
    },

    headerIconsWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15
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
        justifyContent: 'space-between',
        paddingHorizontal: 15
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
    image: {
      width: "80%",
      height: 120,
     
    },
    imageWrapper: {
      width: "100%",
      height: 150,
      borderRadius: 10,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    tutorialTitle: {
      fontFamily: "PoppinsMedium",
      fontSize: 15,
      marginTop: 15,
      paddingRight: 30
    },
    edition: {
      fontFamily: "PoppinsRegular",
      opacity: 0.45,
      fontSize: 13,
      marginTop: 5
    },
    ratingsWrapper: {
      flexDirection: 'row',
      marginTop: 4
    },
    ratings: {
      fontFamily: 'PoppinsRegular',
      opacity: 0.75,
    },
    stars: {
      flexDirection: 'row',
      paddingTop: 3,
      marginLeft: 5
    },
    star: {
      paddingRight: 3
    }
  });