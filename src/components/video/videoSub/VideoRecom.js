import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   ImageBackground,
   Image,
   ScrollView ,
   TouchableOpacity,
} from 'react-native'

import {S} from '../../common/VideoStyle'
import Fontplay from 'react-native-vector-icons/FontAwesome5'
import Featherplay from 'react-native-vector-icons/Feather'
import Feathershu from 'react-native-vector-icons/Feather'
import Antdz from 'react-native-vector-icons/AntDesign'
import Materialcom from 'react-native-vector-icons/MaterialCommunityIcons'
import Materialsc from 'react-native-vector-icons/MaterialCommunityIcons'
import Antsd from 'react-native-vector-icons/AntDesign'
import Simplehuo from 'react-native-vector-icons/SimpleLineIcons'
	

export default class VideoRecom extends Component {
    state={
        num:false,
    }
    dianzan = () => {
        let {num} = this.state
        num++
        this.setState({
            num,
        })
    }

    render () {
        return (
            <View style={S.videorecom}>
                <ScrollView>
                    <View style={S.videoRlist}>
                        <View style={S.videorecomdes}>
                            <ImageBackground
                                source={require('../image/remconend/001.jpg')}
                                style={S.ImageBackground}
                                resizeMode={'cover'}
                            >
                                <View style={{alignItems:'flex-end'}}>
                                    <Text style={S.ecy}>二次元</Text>
                                </View>

                                <View style={{alignItems:'center'}}>
                                    <TouchableOpacity>
                                        <Fontplay 
                                            name={'play'}
                                            size={45}
                                            color={'#eee'}
                                        /> 
                                    </TouchableOpacity>
                                </View>
                                 
                                <View style={S.backtext}>
                                    <View style={{
                                        flexDirection:'row',
                                        justifyContent: 'center',
                                    }}>
                                        <Featherplay 
                                            name={'play'}
                                            size={15}
                                            color={'#fff'} 
                                        />
                                        <Text style={{fontSize:12,color:'#fff'}}> 87万</Text> 
                                    </View>
                                    <View style={{
                                        flexDirection:'row',
                                        justifyContent: 'center',
                                    }}>
                                        <Feathershu
                                           name={'bar-chart-2'}
                                           size={16}
                                           color={'#fff'} 
                                        />
                                        <Text style={{fontSize:12,color:'#fff'}}> 05:40</Text>
                                    </View>
                                </View> 
                                
                            </ImageBackground>  
                            <Text style={S.videotext}>Aimyon 发布最新专辑《瞬间的第六感》莫名戳中泪点</Text>
                        </View>
                        <View style={S.videoauorth}>
                            <View style={S.videoauthormc}>
                                <Image
                                    source={require('../image/author/001.jpg')}
                                    resizeMode={'center'}
                                    style={S.authorimg}
                                />
                                <Text style={{fontSize:12,color:'#000',lineHeight:30,}}>音乐诊疗室</Text>
                            </View>
                            <View style={S.videoauorthdes}>
                                <TouchableOpacity
                                    onPress={()=>{this.dianzan()}}
                                    style={{
                                        flexDirection:'row',
                                        alignItems:'flex-start',
                                    }}
                                >
                                    <Antdz
                                        name={'like2'}
                                        size={23}
                                    />
                                    <Text style={S.dznum}>{this.state.num}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Materialcom
                                        name={'comment-text-outline'}
                                        size={22}
                                    /> 
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Materialsc
                                        name={'music-circle-outline'}
                                        size={25}
                                    /> 
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Antsd
                                        name={'ellipsis1'}
                                        size={22}
                                        style={{marginRight:8,}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={S.videoRlist}>
                        <View style={S.videorecomdes}>
                            <ImageBackground
                                source={require('../image/remconend/004.jpg')}
                                style={S.ImageBackground}
                                resizeMode={'cover'}
                            >
                                <View style={{alignItems:'flex-end'}}>
                                    <Text style={S.live}>· Live</Text>
                                </View>

                                <View style={{alignItems:'center'}}>
                                    <TouchableOpacity>
                                        <Fontplay 
                                            name={'play'}
                                            size={45}
                                            color={'#eee'}
                                        /> 
                                    </TouchableOpacity> 
                                </View>
                                 
                                <View style={S.backtext}>
                                    <View style={{
                                        flexDirection:'row',
                                        justifyContent: 'center',
                                    }}>
                                        <Featherplay 
                                            name={'play'}
                                            size={15}
                                            color={'#fff'}
                                        />
                                        <Text style={{fontSize:12,color:'#fff'}}> 106万</Text> 
                                    </View>
                                    
                                </View> 
                                
                            </ImageBackground>  
                            <Text style={S.videotext}>云村听歌会，特别的日子唱一首特别的歌</Text>
                        </View>
                        <View style={S.videoauorth}>
                            <View style={S.videoauthormc}>
                                <Image
                                    source={require('../image/author/004.jpg')}
                                    resizeMode={'center'}
                                    style={S.authorimg}
                                />
                                <Text style={{fontSize:12,color:'#000',lineHeight:30,}}>Bruno Major</Text>
                            </View>
                            <View style={S.auorthlivedes}>
                                <TouchableOpacity
                                    onPress={()=>{}}
                                >
                                    <Simplehuo
                                        name={'fire'}
                                        size={20}
                                    /> 
                                </TouchableOpacity>
                                <Text> 35621 </Text>
                                <TouchableOpacity>
                                    <Antsd
                                        name={'ellipsis1'}
                                        size={22}
                                        style={{marginRight:8,}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>
        )
    }

}