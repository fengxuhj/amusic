import React, {Component} from 'react'
import { 
   Platform,
   View,
   Text,
   TextInput,
   TouchableOpacity,
} from 'react-native'

import {S} from '../../common/Style'

import Fontmic from 'react-native-vector-icons/FontAwesome5'
import Matermusic from 'react-native-vector-icons/MaterialIcons'
import Evilsear from 'react-native-vector-icons/EvilIcons'

export default class HomeHead extends Component {

    render () {
        let {navigate,state} = this.props.navigation
        
        return (
            <View style={S.header}>
                <TouchableOpacity
                    activeOpacity={0.5} 
                    onPress={()=>{navigate('Neiye',{title:'录音',state})}}
                >
                    <Fontmic 
                        name={'microphone-alt'}
                        size={24}
                        color={'#fff'}
                    />
                </TouchableOpacity>
                
                <TextInput
                    placeholder={'Here With You-Asher Monroe'}
                    placeholderTextColor={'#fff'}
                    keyboardType={'email-address'}
                    style={S.headerinput}
                />

                <Evilsear 
                    name={'search'}
                    size={20}
                    color={'#fff'}
                    style={{
                        position:'absolute',
                        left:'18%',
                        top:40,
                    }}
                />     
                
                <TouchableOpacity
                    opacity={0.5} 
                    onPress={()=>{navigate('Neiye',{title:'音乐列表',state})}}
                >
                    <Matermusic
                        name={'queue-music'}
                        size={28}
                        color={'#fff'}
                    />
                </TouchableOpacity>
                
            </View>
        )
    }

}

