import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'


import Home from '../../screens/Home'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Drawer = createDrawerNavigator()

export default function SideDrawer({navigation}) {
    const userProfile = () => {
        return (
            <View style={{height: 200}}>
                
            </View>
        )
    }


    function CustomDrawerContent(props) {
  
        return (
            <DrawerContentScrollView {...props}>
                <View>
                    <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.closeDrawerIcon}
                    onPress={() => props.navigation.closeDrawer()}
                    >
                        <Feather name='x' size={25} color='#7B7B7B' />
                    </TouchableOpacity>
                    
                    <View style={styles.profileWrapper}>
                        <Image style={styles.image} source={require("../stephen.jpg")}/>

                        <View>
                            <Text style={styles.name}>Andrews Appiah</Text>
                            <Text style={styles.mail}>andrewsappiah@gmail.com</Text>
                        </View>
                    </View>

                    <View style={{height: 1, backgroundColor: 'black', opacity: 0.1, marginBottom: 30}} />


                    <View>
                        <TouchableOpacity activeOpacity={0.7} style={styles.customLabel} onPress={() => navigation.navigate("Home")}>
                            <Feather name='bookmark' size={25} color='black' style={{opacity: 0.4}}/>
                            <Text style={styles.customLabelText}>My Courses</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} style={styles.customLabel} onPress={() => navigation.navigate("Home")}>
                            <Feather name='download' size={25} color='black' style={{opacity: 0.4}}/>
                            <Text style={styles.customLabelText}>Downloads</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} style={styles.customLabel} onPress={() => navigation.navigate("Home")}>
                            <MaterialCommunityIcons name='checkbox-marked-outline' size={25} color='black' style={{opacity: 0.4}}/>
                            <Text style={styles.customLabelText}>Assignments</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} style={styles.customLabel} onPress={() => navigation.navigate("Home")}>
                            <Feather name='clock' size={25} color='black' style={{opacity: 0.4}}/>
                            <Text style={styles.customLabelText}>Deadlines</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.7} style={styles.customLabel} onPress={() => navigation.navigate("Home")}>
                            <Feather name='settings' size={25} color='black' style={{opacity: 0.4}}/>
                            <Text style={styles.customLabelText}>Settings</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <DrawerItemList {...props} /> */}

                    <View style={{height: 1, backgroundColor: 'black', opacity: 0.1, marginBottom: 30, marginTop: 10}} />
                
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    style={styles.bottomItems}>
                        <AntDesign name='exclamationcircleo' size={25} style={{transform: [{rotate: '180deg'}], opacity: 0.4}}/>
                        <Text style={styles.bottomItemText}>info</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    activeOpacity={0.7}
                    style={styles.bottomItems}
                    >
                            <Feather name='log-out' size={25} style={{opacity: 0.4}}/>
                            <Text style={styles.bottomItemText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </DrawerContentScrollView>
        );
      }

    return (
        <Drawer.Navigator
            initialRouteName='My Courses'
            screenOptions={{
                drawerStyle: styles.drawer,
                drawerActiveBackgroundColor: null,
                drawerActiveTintColor: 'blue',
                drawerItemStyle: {width: '100%'}
            }}
            drawerContent={(props) => 
                <CustomDrawerContent {...props}/>} 
        >



                <Drawer.Screen name='Home' 
                component={Home} 
                options={{ 
                    headerShown: false,
                    drawerLabelStyle: styles.drawerLabelDisplay,
                    drawerLabel: ({focused}) => {
                        return (
                            <View></View>
                        )
                    }
                    }} />
                
            </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawer: {
        paddingTop: 10,
        width: '80%',
    },
    drawerLabelDisplay: {
        borderBottomColor: 'blue', 
        borderBottomWidth: 1, 
        paddingBottom: 20,
        fontFamily: 'PoppinsSemiBold'
    },
    customLabel: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginHorizontal: 20,
        marginBottom: 25
    },
    customLabelText: {
        fontFamily: 'PoppinsRegular',
        fontSize: 17,
        marginLeft: 20
    },
    closeDrawerIcon: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderColor: "#C2C2C2",
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginBottom: 40,
        marginRight: 20
    },
    profileWrapper: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 35,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 70,
        marginRight: 20
    },
    name: {
        fontFamily: 'PoppinsMedium',
        fontSize: 18
    },
    mail: {
        fontFamily: 'PoppinsRegular',
        fontSize: 11
    },
    bottomItems: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 25
    },
    bottomItemText: {
        fontFamily: 'PoppinsRegular',
        fontSize: 17,
        marginLeft: 20
    }
})
