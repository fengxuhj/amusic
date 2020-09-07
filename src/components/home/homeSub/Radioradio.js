import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   ImageBackground,
   TouchableOpacity,
   Dimensions,
} from 'react-native'
import Matersx from 'react-native-vector-icons/MaterialCommunityIcons'
import Ioniej from 'react-native-vector-icons/MaterialIcons'

export default class Radioradio extends Component {
    state={
        off:true,
    }
    
    huanyihuan = ()=>{
        let off = !this.state.off
        this.setState({
            off:off,
        })
    }

    render () {
        const {off} = this.state
        let {navigate,state} = this.props.navigation
        
        return (
            <View style={S.radio}>
                <View style={S.radiorecommend}>
                    <Text style={S.radiotext}>电台推荐</Text>
                    <TouchableOpacity 
                        style={S.radiosx}
                        onPress={this.huanyihuan}
                        activeOpacity={0.5}
                    >
                            <Matersx 
                                name={'refresh'}
                                size={15}
                                color={'#565656'}
                                style={{marginRight:5}}
                            />
                            <Text style={{fontSize:12}}>换一换</Text>
                    </TouchableOpacity>
                </View> 
                <View style={S.songradio}>

                    {/* list1 start*/}
                    <View style={[S.list1,{display:off?'flex':'none'}]}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'电台:南木大叔',state})}}>
                            <View style={S.radiolist}>
                                <ImageBackground
                                    source={require('../image/radio/1.jpg')}
                                    style={S.radioimg}
                                >
                                    <Ioniej 
                                        name={'headset'}
                                        size={14}
                                        color={'#fff'}
                                    />
                                    <Text style={S.erjitext}> 1.37万 </Text>
                                </ImageBackground>
                                <Text style={S.radioauthor}>南木大叔</Text>
                                <Text style={S.radiodes}> 放下防备，治愈你的不安与疲惫 </Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'电台:有一间电台',state})}}>
                            <View style={S.radiolist}>
                                <ImageBackground
                                    source={require('../image/radio/2.jpg')}
                                    style={S.radioimg}
                                >
                                    <Ioniej 
                                        name={'headset'}
                                        size={14}
                                        color={'#fff'}
                                    />
                                    <Text style={S.erjitext}> 1.25万 </Text>
                                </ImageBackground>
                                <Text style={S.radioauthor}>有一间电台</Text>
                                <Text style={S.radiodes}> 认真聆听你我都是故事的主角 </Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'电台:有一间电台',state})}}>
                            <View style={S.radiolist}>
                                <ImageBackground
                                    source={require('../image/radio/3.jpg')}
                                    style={S.radioimg}
                                >
                                    <Ioniej 
                                        name={'headset'}
                                        size={14}
                                        color={'#fff'}
                                    />
                                    <Text style={S.erjitext}> 5.34万 </Text>
                                </ImageBackground>
                                <Text style={S.radioauthor}>名校大师课</Text>
                                <Text style={S.radiodes}> 1天1节清华人大名师课重塑学习力 </Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>

                    {/* list2 start*/}

                    <View style={S.list2}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'电台:一星期一本书',state})}}>
                            <View style={S.radiolist}>
                                <ImageBackground
                                    source={require('../image/radio/4.jpg')}
                                    style={S.radioimg}
                                >
                                    <Ioniej 
                                        name={'headset'}
                                        size={14}
                                        color={'#fff'}
                                    />
                                    <Text style={S.erjitext}> 9.9万 </Text>
                                </ImageBackground>
                                <Text style={S.radioauthor}>一星期一本书</Text>
                                <Text style={S.radiodes}> 为你读一本书，叫做“感动” </Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'电台:粤知一二',state})}}>
                            <View style={S.radiolist}>
                                <ImageBackground
                                    source={require('../image/radio/5.jpg')}
                                    style={S.radioimg}
                                >
                                    <Ioniej 
                                        name={'headset'}
                                        size={14}
                                        color={'#fff'}
                                    />
                                    <Text style={S.erjitext}> 1.11万 </Text>
                                </ImageBackground>
                                <Text style={S.radioauthor}>粤知一二</Text>
                                <Text style={S.radiodes}> 听了就会上瘾的粤语脱口秀 </Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigate('Neiye',{title:'电台:轻课朗读',state})}}>
                            <View style={S.radiolist}>
                                <ImageBackground
                                    source={require('../image/radio/6.jpg')}
                                    style={S.radioimg}
                                >
                                    <Ioniej 
                                        name={'headset'}
                                        size={14}
                                        color={'#fff'}
                                    />
                                    <Text style={S.erjitext}> 6.36万 </Text>
                                </ImageBackground>
                                <Text style={S.radioauthor}>轻课朗读</Text>
                                <Text style={S.radiodes}> 让朗读走进生活，使阅读不再功利 </Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>
        )
    }

}

let {width,height} = Dimensions.get('window')
const S = StyleSheet.create({
    radio:{
        width:'100%',
        paddingHorizontal:'2%',
        // borderWidth:1,
        // borderColor:'red',
        paddingTop:20,
        backgroundColor:'#fff',
        
    },
    radiorecommend:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:15,
    },
    radiotext:{
        fontSize:16,
        fontWeight:'bold',
        color:'#000',
        marginRight:5,
    },
    radiosx:{
        width:60,
        flexDirection:'row',
        alignItems:'center',
    },
    songradio:{
        width:'100%',
        height:172,
        overflow:'hidden',
        justifyContent:'space-between',
    },
    list1:{
        width:'100%', 
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    list2:{
        width:'100%', 
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    radiolist:{
        width:width/3-10,
        height:172,
    },
    radioimg:{
        width:width/3-10,
        height:width/3-10,
        padding:3,
        borderRadius:3,
        overflow:'hidden',
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    erjitext:{
        color:'#fff',
        fontSize:11,
    },
    radioauthor:{
        color:'#000',
        textAlign:'center',
        fontSize:14,
    },
    radiodes:{
        fontSize:10,
        textAlign:'center',
        color:'#666',
    },
    radiobotton:{
        fontSize:12,
        backgroundColor:'#fff',
    },
})
