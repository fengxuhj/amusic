import React, {Component} from 'react'
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
} from 'react-native'

import Feathervideo from 'react-native-vector-icons/Feather'
import Evilsear from 'react-native-vector-icons/EvilIcons'
import Entypoxian from 'react-native-vector-icons/Entypo'
import {S} from '../../common/VideoStyle'

export default class VideoHead extends Component {

    render () {
        let {navigate,state} = this.props.navigation

        return (
            <View style={S.videoheader}>
                <TouchableOpacity 
                    opacity={0.5}
                    onPress={()=>{navigate('Neiye',{title:'录制视频',state})}}
                >
                    <Feathervideo 
                        name={'video'}
                        size={24}
                        color={'#fff'}
                    />
                </TouchableOpacity>
                
                <TextInput
                    placeholder={'East Of Eden - Zella Day'}
                    placeholderTextColor={'#fff'}
                    keyboardType={'email-address'}
                    style={{
                        height:31,
                        width:'70%',
                        backgroundColor:"#e0655d",
                        padding:0,
                        paddingHorizontal:40,
                        borderRadius:20,
                        color:'#fff',
                        textAlign:'center',
                    }}
                    
                /> 
         
                <Evilsear 
                    name={'search'}
                    size={20}
                    color={'#fff'}
                    style={{
                        position:'absolute',
                        left:'18%',
                        top:39,
                    }}
                />

                <TouchableOpacity 
                    opacity={0.5}
                    onPress={()=>{navigate('Neiye',{title:'视频列表',state})}}
                >
                    <Entypoxian
                        name={'menu'}
                        size={28}
                        color={'#fff'}
                    />
                </TouchableOpacity>
                
            </View>
        )
    }

}
