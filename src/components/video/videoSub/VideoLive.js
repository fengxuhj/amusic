import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   ImageBackground,
   Image,
   TouchableOpacity,
   ScrollView,
} from 'react-native'
import {S} from '../../common/VideoStyle'
import Fontplay from 'react-native-vector-icons/FontAwesome5'
import Featherplay from 'react-native-vector-icons/Feather'
import Antsd from 'react-native-vector-icons/AntDesign'
import Simplehuo from 'react-native-vector-icons/SimpleLineIcons'

export default class VideoLive extends Component {

    render () {
        return (
            <View style={S.videorecom}>
                <ScrollView>
                <View style={S.videoRlist}>
                        <View style={S.videorecomdes}>
                            <ImageBackground
                                source={require('../image/remconend/005.jpg')}
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
                                        <Text style={{fontSize:12,color:'#fff'}}> 66万</Text> 
                                    </View>
                                    
                                </View> 
                                
                            </ImageBackground>  
                            <Text style={S.videotext}>情人节单曲《蝴蝶效应》一不小心就命中注定</Text>
                        </View>
                        <View style={S.videoauorth}>
                            <View style={S.videoauthormc}>
                                <Image
                                    source={require('../image/author/005.jpg')}
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
                                <Text>225613 </Text>
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
                                source={require('../image/remconend/7.jpg')}
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
                                        <Text style={{fontSize:12,color:'#fff'}}> 2万</Text> 
                                    </View>
                                    
                                </View> 
                                
                            </ImageBackground>  
                            <Text style={S.videotext}>日本人气摇滚天团 One Ok Rock 最新英文单曲现场直播</Text>
                        </View>
                        <View style={S.videoauorth}>
                            <View style={S.videoauthormc}>
                                <Image
                                    source={require('../image/author/006.jpg')}
                                    resizeMode={'center'}
                                    style={S.authorimg}
                                />
                                <Text style={{fontSize:12,color:'#000',lineHeight:30,}}>One Ok Rock</Text>
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
