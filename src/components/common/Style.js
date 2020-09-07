import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   NativeModules,
   Dimensions,
} from 'react-native'

let {width,height} = Dimensions.get('window')
const {StatusBarManager} = NativeModules
export const S = StyleSheet.create({
    header:{
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
    headerinput:{
        height:31,
        width:'70%',
        backgroundColor:"#e0655d",
        padding:0,
        paddingHorizontal:40,
        textAlign:'center',
        borderRadius:20,
        color:'#fff',
    },
    banner:{
        width:'94%',
        height:156,
        marginTop:12,
        marginHorizontal:'3%',
        overflow:'hidden',
        borderRadius:8,
    },
    background:{
        position:'absolute',
        top:0,
        width:'100%',
        height:164,
        backgroundColor: '#d53c32',
    },
    wrapper: {  
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    dujia:{
        position:'absolute',
        bottom:0,
        right:0,
        width:70,
        height:20,
        backgroundColor: '#d53c32',
        color:'#fff',
        borderRadius:5,
        textAlign:'center',
    },
    cate:{
        width:width,
        height:110,
        backgroundColor:'#fff',
        borderBottomWidth:1,
        borderBottomColor:'#ececed',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        
    },
    catelist:{
        width:55,
        height:80,
        // borderWidth:1,
        // borderColor:'red',
        backgroundColor:'#fff',
        justifyContent:'space-around',
        alignItems:'center',
    },
    cateimg:{
        width:55,
        height:55,
        borderRadius:45,
    },
    catetext:{
        fontSize:12,
        color:'#000',
    },
    recommend:{
        width:width,
        paddingHorizontal:'2%',
        // borderWidth:1,
        // borderColor:'red',
        paddingTop:20,
        backgroundColor:'#fff',
    },
    recommendsongs:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15,
    },
    songtext:{
        fontSize:16,
        fontWeight:'bold',
        color:'#000',
        marginRight:5,
    },
    songsheet:{
        width:'100%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    sheetlist:{
        width:width/3-10,
        height:172,

    },
    sheetimg:{
        width:width/3-10,
        height:width/3-10,
        padding:3,
        borderRadius:3,
        overflow:'hidden',
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    sheettext:{
        fontSize:12,
        padding:6,
    },
    erjitext:{
        color:'#fff',
        fontSize:11,
    },
    gushi:{
        position:'absolute',
        bottom:0,
        right:0,
        width:70,
        height:20,
        backgroundColor: '#66bdeb',
        color:'#fff',
        borderRadius:5,
        textAlign:'center',
    },
    radiobannerimg:{
        width:'100%',
        height:'100%',
    },
    optimization:{
        width:'100%',
        backgroundColor:'#fff'
    },
    optimizationlist:{
        height:60,
        // borderBottomWidth:1,
        // borderColor:'#737373',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    optimizationimg:{
        width:54,
        height:54,
        marginRight:10,
        borderRadius:3,
    },
    optimizationlistdes:{
        // width:'80%',
        flex:1,
        height:60,
        borderBottomWidth:1,
        borderColor:'#737373',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    optimizationlisttext:{
        height:59,
        justifyContent:'space-around',
    },
    authorsong:{
        width:width-115,
        fontSize:15,
        color:'#000',
    },
    authordes:{
        height:15,
        width:132,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    authorimg:{
        width:18,
        height:18,
        // borderWidth:1,
        // borderColor:'#000',
        borderRadius:18/2,
    },
    authormc:{
        fontSize:11,
        color:'#737373',
    },
    authorshu:{
        color:'#737373',
    },
}) 