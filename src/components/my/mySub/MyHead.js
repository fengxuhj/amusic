import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
} from 'react-native'
import Feathershu from 'react-native-vector-icons/Feather'
import Antyun from 'react-native-vector-icons/AntDesign'
import Antcaret from 'react-native-vector-icons/AntDesign'
import {S} from '../../common/MyStyle'


export default class MyHead extends Component {

    render () {
        let {navigate,state} = this.props.navigation

        return (
            <View>
                <View style={S.myheader}>
                    <TouchableOpacity opacity={0.5} onPress={()=>{navigate('Neiye',{title:'QQ',state})}}>
                        <View style={S.myheadqq}>
                            <Antcaret 
                                name={'caretleft'}
                                size={10}
                                color={'#fff'}
                            />
                            <Text style={S.myheadqqtext}> QQ </Text>
                        </View>
                    </TouchableOpacity>
                    
                    <View style={S.myheadmusic}>
                        <TouchableOpacity opacity={0.5} onPress={()=>{navigate('Neiye',{title:'音乐云',state})}}>
                            <Antyun 
                                name={'cloudo'}
                                size={28}
                                color={'#fff'}
                            />
                        </TouchableOpacity>

                        <Text style={S.myheadmusictext}> 我的音乐 </Text> 

                        <TouchableOpacity opacity={0.5} onPress={()=>{navigate('Neiye',{title:'播放列表',state})}}>
                            <Feathershu
                                name={'bar-chart-2'}
                                size={28}
                                color={'#fff'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

}