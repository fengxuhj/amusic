import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   NativeModules,
} from 'react-native'

const {StatusBarManager} = NativeModules

export const S = StyleSheet.create({
    myheader:{
        position:'relative',
        height:78,
        width:'100%',
        paddingTop:StatusBarManager.HEIGHT,
        backgroundColor: '#d53c32',
        justifyContent:'space-around',
    },
    myheadqq:{
        paddingHorizontal:'1%',
        flexDirection:'row',
        alignItems:'center',
    },
    myheadqqtext:{
        color:'#fff',
        fontSize:10,
        fontWeight:'bold',
    },
    myheadmusic:{
        width:'100%',
        flexDirection:'row',
        paddingHorizontal:'3%',
        justifyContent:'space-between',
        alignItems:'center',
    },
    myheadmusictext:{
        fontSize:18,
        color:'#fff',
    },
    mymusic:{
        width:'100%',
        // paddingRight:'2%',
        paddingLeft:19,
    },
    mymusiclist:{
        height:55,
        // borderWidth:1,
        // borderColor:'red',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    mymusiclistdes:{
        width:315,
        height:55,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        borderBottomWidth:1,
        borderColor:'#eee',
    },
    listdestext:{
        fontSize:16,
        color:'#000',
    },
    listdesnum:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:'2%',
    },
    cresongsheet:{
        width:'100%',
        // height:210,
        overflow:'hidden',
    },
    songsheetdes:{
        width:'100%',
        height:30,
        backgroundColor:'#edf0f0',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    songsheettext:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    songsheetlist:{
        width:'100%',
        height:60,
        marginLeft:'3%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    sheetlistimg:{
        width:54,
        height:54,
        borderRadius:3,
        overflow:'hidden',
    },
    sheetlistimgxin:{
        textAlign:'center',
        lineHeight:54,
        backgroundColor:'#000',
        opacity:0.5,
    },
    sheetlistdes:{
        width:'80%',
        height:60,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'#ddd',
    },
    sheetlistdesxd:{
        width:91,
        height:25,
        marginRight: 20,
        borderWidth:1,
        borderColor:'#d53f34',
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
    },
})