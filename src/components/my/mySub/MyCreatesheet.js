import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   TouchableHighlight,
   ImageBackground,
} from 'react-native'
import {S} from '../../common/MyStyle'
import Antdown from 'react-native-vector-icons/AntDesign'
import Antell from 'react-native-vector-icons/AntDesign'
import Antheart from 'react-native-vector-icons/AntDesign'
import Fontxd from 'react-native-vector-icons/FontAwesome'

// transform([{roateX:'90deg'}])
export default class MyCreateSheet extends Component {
    state = {
        off:false,
    }

    shoufang = () =>{
        let {off} = this.state
        off = !off
        // alert(off)
        this.setState({
            off,
        })
    }
    render () {
        let {off} = this.state
        return (
            <View>
                <View style={[S.cresongsheet,{height:off?30:210}]}>
                    <TouchableHighlight
                        activeOpacity={0.8}
                        onPress={()=>{this.shoufang()}}
                    >
                        <View style={S.songsheetdes}>
                            <View style={S.songsheettext}>
                                <Antdown
                                    name={'down'}
                                    size={11}
                                    
                                    style={{marginHorizontal:5,transform:[{rotateZ:off?'-90deg':'0deg'}]}}
                                />
                                <Text style={{fontSize:12,}}> 我创建的歌单(3) </Text>
                            </View>
                            <Antell
                                name={'ellipsis1'}
                                size={13}
                                style={{marginRight:10,}} 
                            />
                        </View>
                    </TouchableHighlight>

                    <View style={S.songsheetlist}>
                        <ImageBackground
                            source={require('../image/3.jpg')}
                            resresizeMode={'center'}
                            style={S.sheetlistimg}
                        >
                            <Antheart
                                name={'hearto'} 
                                size={35}
                                color={'#fff'}
                                style={S.sheetlistimgxin}
                            />   
                        </ImageBackground>
                        <View style={S.sheetlistdes}>
                            <View>
                                <Text style={{fontSize:15,color:'#000'}}>我喜欢的音乐</Text>
                                <Text style={{fontSize:12,}}>0首</Text>
                            </View>

                            <View style={S.sheetlistdesxd}>
                                <Fontxd
                                    name={'heartbeat'}
                                    size={18}
                                    color={'#d53f34'}
                                />
                                <Text style={{fontSize:11,color:'#d53f34'}}> 心动模式</Text>
                            </View>
                        </View>
                    </View>

                    <View style={S.songsheetlist}>
                        <ImageBackground
                            source={require('../image/2.jpg')}
                            resresizeMode={'center'}
                            style={S.sheetlistimg}
                        ></ImageBackground>
                        <View style={S.sheetlistdes}>
                            <View>
                                <Text style={{fontSize:15,color:'#000'}}>专心敲代码</Text>
                                <Text style={{fontSize:12,}}>0首</Text>
                            </View>
                        </View>
                    </View>

                    <View style={S.songsheetlist}>
                        <ImageBackground
                            source={require('../image/5.jpg')}
                            resresizeMode={'center'}
                            style={S.sheetlistimg}
                        ></ImageBackground>
                        <View style={S.sheetlistdes}>
                            <View>
                                <Text style={{fontSize:15,color:'#000'}}>纯音乐</Text>
                                <Text style={{fontSize:12,}}>0首</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
            
        )
    }

}