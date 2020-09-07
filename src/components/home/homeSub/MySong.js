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


export default class MySong extends Component {

    render () {
        let {navigate,state} = this.props.navigation

        return (
            <View style={S.recommend}>
                <View style={S.recommendsongs}>
                    <Text style={S.songtext}>我的歌单</Text>
                    <Antjt
                        name={'right'}
                        size={18}
                        color={'#636363'}
                    />
                </View> 
                <View style={S.songsheet}>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'我的歌单',state})}}>
                        <View style={S.sheetlist}>
                            <ImageBackground
                                source={require('../image/sheet/7.jpg')}
                                style={S.sheetimg}
                            >
                                <Ioniej 
                                    name={'headset'}
                                    size={14}
                                    color={'#fff'}
                                />
                                <Text style={S.erjitext}> 66 </Text>
                            </ImageBackground>
                            <Text style={S.sheettext}>猪年不努力，啥都配不齐 </Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'我的歌单',state})}}>
                        <View style={S.sheetlist}>
                            <ImageBackground
                                source={require('../image/sheet/8.jpg')}
                                style={S.sheetimg}
                            >
                                <Ioniej 
                                    name={'headset'}
                                    size={14}
                                    color={'#fff'}
                                />
                                <Text style={S.erjitext}> 102 </Text>
                            </ImageBackground>
                            <Text style={S.sheettext}>音乐糖果盒✨拯救你的听觉审美疲劳 </Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'我的歌单',state})}}>
                        <View style={S.sheetlist}>
                            <ImageBackground
                                source={require('../image/sheet/9.jpg')}
                                style={S.sheetimg}
                            >
                                <Ioniej 
                                    name={'headset'}
                                    size={14}
                                    color={'#fff'}
                                />
                                <Text style={S.erjitext}> 88 </Text>
                            </ImageBackground>
                            <Text style={S.sheettext}>《晚安曲》月亮今晚盖上了软fufu的棉被 </Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </View>        
        )
    }

}