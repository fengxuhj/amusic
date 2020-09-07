import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   NativeModules,
} from 'react-native'

const {StatusBarManager} = NativeModules

export const S = StyleSheet.create({
   videoheader:{
      position:'relative',
      height:70,
      width:'100%',
      paddingTop:StatusBarManager.HEIGHT,
      // paddingLeft:18,
      backgroundColor: '#d53c32',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
   },
   videostv:{
      flex:1,
      // backgroundColor:'#d84139',
   },
   videorecom:{
      width:'100%',
      paddingHorizontal:'2%',
      // backgroundColor:'skyblue'
   }, 
   videoRlist:{
      width:'100%',
      height:308,
      marginBottom:6,
   },
   videorecomdes:{
      width:'100%',
      height:256,      
      borderBottomWidth:1,
      borderColor:'#eee',
   },
   ImageBackground:{
      // width:491,
      height:206,
      padding:6,
      borderRadius:6,
      overflow:'hidden',
      justifyContent:'space-between',
      marginBottom:15,
   },
   ecy:{
      width:55,
      height:21,
      borderColor:'#fff',
      borderWidth:1,
      backgroundColor:'#000',
      fontSize:12,
      textAlign:'center',
      lineHeight:21,
      borderRadius:10,
      color:'#fff',
      opacity:0.4,
   },
   backtext:{
      flexDirection:'row',
      justifyContent:'space-between',
   },
   videotext:{
      fontSize:15,
      color:'#000',
      fontWeight:'bold',
   },
   videoauorth:{
      height:50,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      borderBottomWidth:6,
      borderColor:'#eee',
   },
   videoauthormc:{
      flexDirection:'row',
   },
   authorimg:{
      width:30,
      height:30,
      borderRadius:50,
      // overflow:'hidden',
      marginRight:5,
   },
   videoauorthdes:{
      width:180,
      height:56,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
   },
   live:{
      width:55,
      height:21,
      // borderColor:'#fff',
      // borderWidth:1,
      backgroundColor:'#ff2c53',
      fontSize:12,
      textAlign:'center',
      lineHeight:21,
      borderRadius:10,
      color:'#fff',
      fontWeight:'bold',
   },
   auorthlivedes:{
      width:120,
      height:56,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
   },
   dznum:{
      alignItems:'flex-start',
      fontSize:10,
      marginLeft:5,
      color:'#d53c32',
   },
   
})