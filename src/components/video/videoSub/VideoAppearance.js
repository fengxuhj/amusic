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

export default class VideoAppearance extends Component {
    state={
        num1:false,
        num2:false,

    }
    dianzan1 = () => {
        let {num1} = this.state
        num1++
        this.setState({
            num1,
        })
    }
    dianzan2 = () => {
        let {num2} = this.state
        num2++
        this.setState({
            num2,
        })
    }

    render () {
        return (
            <View style={S.videorecom}>
                <ScrollView>
                    <View style={S.videoRlist}>
                        <View style={S.videorecomdes}>
                            <ImageBackground
                                source={require('../image/remconend/006.jpg')}
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
                                        <Text style={{fontSize:12,color:'#fff'}}> 456万</Text> 
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
                                        <Text style={{fontSize:12,color:'#fff'}}> 03:32</Text>
                                    </View>
                                </View> 
                                
                            </ImageBackground>  
                            <Text style={S.videotext}>胡夏深情演唱，挚爱主题曲《恋恋不忘》</Text>
                        </View>
                        <View style={S.videoauorth}>
                            <View style={S.videoauthormc}>
                                <Image
                                    source={require('../image/author/007.jpg')}
                                    resizeMode={'center'}
                                    style={S.authorimg}
                                />
                                <Text style={{fontSize:12,color:'#000',lineHeight:30,}}>胡夏</Text>
                            </View>
                            <View style={S.videoauorthdes}>
                                <TouchableOpacity
                                    onPress={()=>{this.dianzan1()}}
                                    style={{
                                        flexDirection:'row',
                                        alignItems:'flex-start',
                                    }}
                                >
                                    <Antdz
                                        name={'like2'}
                                        size={23}
                                    /> 
                                    <Text style={S.dznum}>{this.state.num1}</Text>
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
                                source={require('../image/remconend/003.jpg')}
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
                                        <Text style={{fontSize:12,color:'#fff'}}> 582万</Text> 
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
                                        <Text style={{fontSize:12,color:'#fff'}}> 04:20</Text>
                                    </View>
                                </View> 
                                
                            </ImageBackground>  
                            <Text style={S.videotext}>2019年超强热单《起风了》连续31天霸榜</Text>
                        </View>
                        <View style={S.videoauorth}>
                            <View style={S.videoauthormc}>
                                <Image
                                    source={require('../image/author/008.jpg')}
                                    resizeMode={'center'}
                                    style={S.authorimg}
                                />
                                <Text style={{fontSize:12,color:'#000',lineHeight:30,}}>吴青峰</Text>
                            </View>
                            <View style={S.videoauorthdes}>
                                <TouchableOpacity
                                    onPress={()=>{this.dianzan2()}}
                                    style={{
                                        flexDirection:'row',
                                        alignItems:'flex-start',
                                    }}
                                >
                                    <Antdz
                                        name={'like2'}
                                        size={23}
                                    /> 
                                    <Text style={S.dznum}>{this.state.num2}</Text>
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

                </ScrollView>
            </View>
        )
    }

}
