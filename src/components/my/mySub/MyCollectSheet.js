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

export default class MyCollectSheet extends Component {
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
                                <Text style={{fontSize:12,}}> 我收藏的歌单(2) </Text>
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
                            source={require('../image/1.jpg')}
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
                            source={require('../image/7.jpg')}
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