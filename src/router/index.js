import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
} from 'react-native'

import {createBottomTabNavigator,createSwitchNavigator} from 'react-navigation'
import Home from '../components/home'
import Video from '../components/video'
import My from '../components/my'
import Friend from '../components/friend'
import User from '../components/user'
import ADV from './adv'
import Neiye from './neiye'



import Fontfind from 'react-native-vector-icons/FontAwesome5'


export const BottomTabNavigator = createBottomTabNavigator(
    {
        Home:{
            screen: Home,
            navigationOptions: () => ({
                tabBarLabel:'发现',
                tabBarIcon(props){
                    const {focused} = props
                    return(
                        <Fontfind 
                            name={'fingerprint'}
                            size={24}
                            color={focused?'#c8412d':'#9b9a9a'}
                        />
                    )
                }
            	
            })
        },
        Video:{
            screen: Video
        },
        My:{
            screen: My 
        },
        Friend:{
            screen: Friend
        },
        User:{
            screen: User
        },
        
        
    },
    {   
        initialRouteName:'Home',
        tabBarOptions:{
            inactiveTintColor:'#9b9a9a',
            activeTintColor: '#c8412d',
            style:{
                backgroundColor:'#f5f5f5'
            },
            pressColor:'blue', //按压时显示的颜色
            lableStyle:{ 
                fontSize:10 
            },
            tabStyle:{
                // height:60,
                backgroundColor:"#f5f5f5"
            },
        }
    }
)

export const SwitchNavigator = createSwitchNavigator({
    ADV,
    BottomTabNavigator,
    Neiye,
})

