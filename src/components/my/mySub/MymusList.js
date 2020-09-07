import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   TouchableHighlight,
} from 'react-native'
import {S} from '../../common/MyStyle.js'

import Ionmusic from 'react-native-vector-icons/Ionicons'
import Antright from 'react-native-vector-icons/AntDesign'

import Materradioc from 'react-native-vector-icons/MaterialCommunityIcons'
import Matersc from 'react-native-vector-icons/AntDesign'
import Fontkj from 'react-native-vector-icons/FontAwesome5'
	
export default class MymusList extends Component {

    render () {
        let {navigate,state} = this.props.navigation

        return (
            <View style={S.mymusic}>
                <TouchableHighlight
                    activeOpacity={0.5}
                    onPress={()=>{navigate('Neiye',{title:'本地音乐',state})}}
                >
                    <View style={S.mymusiclist}>
                        <Ionmusic
                            name={'md-musical-notes'}
                            size={25}
                            color={'#c43931'}
                        />

                        <View style={S.mymusiclistdes}>
                            <Text style={S.listdestext}>本地音乐</Text>
                            <View style={S.listdesnum}>
                                <Text> 0 </Text>
                                <Antright
                                    name={'right'}
                                    size={16}
                                />
                            </View>
                        </View>
                    </View>

                </TouchableHighlight>
                
                <TouchableHighlight
                    activeOpacity={0.5}
                    onPress={()=>{navigate('Neiye',{title:'最近播放',state})}}
                >
                    <View style={S.mymusiclist}>
                        <Materradioc
                            name={'play-speed'}
                            size={25}
                            color={'#c43931'}
                        />

                        <View style={S.mymusiclistdes}>
                            <Text style={S.listdestext}>最近播放</Text>
                            <View style={S.listdesnum}>
                                <Text> 0 </Text>
                                <Antright
                                    name={'right'}
                                    size={16}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    activeOpacity={0.5}
                    onPress={()=>{navigate('Neiye',{title:'我的电台',state})}}
                >
                    <View style={S.mymusiclist}>
                        <Materradioc
                            name={'library-music'}
                            size={25}
                            color={'#c43931'}
                        />

                        <View style={S.mymusiclistdes}>
                            <Text style={S.listdestext}>我的电台</Text>
                            <View style={S.listdesnum}>
                                <Text> 0 </Text>
                                <Antright
                                    name={'right'}
                                    size={16}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    activeOpacity={0.5}
                    onPress={()=>{navigate('Neiye',{title:'我的收藏',state})}}
                >
                    <View style={S.mymusiclist}>
                        <Matersc
                            name={'staro'}
                            size={25}
                            color={'#c43931'}
                        />

                        <View style={S.mymusiclistdes}>
                            <Text style={S.listdestext}>我的收藏</Text>
                            <View style={S.listdesnum}>
                                <Text> 专辑/歌手/视频/专栏 </Text>
                                <Antright
                                    name={'right'}
                                    size={16}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    activeOpacity={0.5}
                    onPress={()=>{navigate('Neiye',{title:'Sati 空间',state})}}
                >
                    <View style={S.mymusiclist}>
                        <Fontkj
                            name={'star-and-crescent'}
                            size={25}
                            color={'#c43931'}
                        />

                        <View style={S.mymusiclistdes}>
                            <Text style={S.listdestext}>Sati 空间</Text>
                            <View style={S.listdesnum}>
                                <Text> 特别的聆听模式 </Text>
                                <Antright
                                    name={'right'}
                                    size={16}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }

}