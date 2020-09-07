import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   ImageBackground,
   TouchableOpacity,
} from 'react-native'

import {S} from '../../common/Style'
import Ioniej from 'react-native-vector-icons/MaterialIcons'
import Antjt from 'react-native-vector-icons/AntDesign'

export default class NAME extends Component {

    render () {
        let {navigate,state} = this.props.navigation

        return (
            <View style={S.recommend}>
                <View style={S.recommendsongs}>
                    <Text style={S.songtext}>推荐歌单</Text>
                    <Antjt
                        name={'right'}
                        size={18}
                        color={'#636363'}
                    />
                </View> 
                <View style={S.songsheet}>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'推荐歌单',state})}}>
                        <View style={S.sheetlist}>
                            <ImageBackground
                                source={require('../image/sheet/1.jpg')}
                                style={S.sheetimg}
                            >
                                <Ioniej 
                                    name={'headset'}
                                    size={14}
                                    color={'#fff'}
                                />
                                <Text style={S.erjitext}> 333万 </Text>
                            </ImageBackground>
                            <Text style={S.sheettext}>洒脱生活，做酷酷的自己才美丽 </Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'推荐歌单',state})}}>
                        <View style={S.sheetlist}>
                            <ImageBackground
                                source={require('../image/sheet/2.jpg')}
                                style={S.sheetimg}
                            >
                                <Ioniej 
                                    name={'headset'}
                                    size={14}
                                    color={'#fff'}
                                />
                                <Text style={S.erjitext}> 65万 </Text>
                            </ImageBackground>
                            <Text style={S.sheettext}>柔情蜜意|女子心头万顷清澈的爱意 </Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'推荐歌单',state})}}>
                        <View style={S.sheetlist}>
                            <ImageBackground
                                source={require('../image/sheet/3.jpg')}
                                style={S.sheetimg}
                            >
                                <Ioniej 
                                    name={'headset'}
                                    size={14}
                                    color={'#fff'}
                                />
                                <Text style={S.erjitext}> 218万 </Text>
                            </ImageBackground>
                            <Text style={S.sheettext}>香港四大“天王天后” | 经典珍藏 </Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'推荐歌单',state})}}>
                        <View style={S.sheetlist}>
                            <ImageBackground
                                source={require('../image/sheet/4.jpg')}
                                style={S.sheetimg}
                            >
                                <Ioniej 
                                    name={'headset'}
                                    size={14}
                                    color={'#fff'}
                                />
                                <Text style={S.erjitext}> 278万 </Text>
                            </ImageBackground>
                            <Text style={S.sheettext}>高考考研国考刷题专用轻音乐 </Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'推荐歌单',state})}}>
                        <View style={S.sheetlist}>
                            <ImageBackground
                                source={require('../image/sheet/5.jpg')}
                                style={S.sheetimg}
                            >
                                <Ioniej 
                                    name={'headset'}
                                    size={14}
                                    color={'#fff'}
                                />
                                <Text style={S.erjitext}> 524万 </Text>
                            </ImageBackground>
                            <Text style={S.sheettext}>「纯音乐」你偶尔需要安静的发泄 </Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'推荐歌单',state})}}>
                        <View style={S.sheetlist}>
                            <ImageBackground
                                source={require('../image/sheet/6.jpg')}
                                style={S.sheetimg}
                            >
                                <Ioniej 
                                    name={'headset'}
                                    size={15}
                                    color={'#fff'}
                                />
                                <Text style={S.erjitext}> 168万 </Text>
                            </ImageBackground>
                            <Text style={S.sheettext}>100首经典英文歌曲排行榜 </Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>
        )
    }

}
