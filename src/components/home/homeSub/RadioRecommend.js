import React, {Component} from 'react'
import { 
   View,
   Text,
   Image,
   TouchableOpacity,
} from 'react-native'

import Antjt from 'react-native-vector-icons/AntDesign'
import Evilplay from 'react-native-vector-icons/EvilIcons'
import Simplehuo from 'react-native-vector-icons/SimpleLineIcons'
import {S} from '../../common/Style'

export default class extends Component {

    render () {
        return (
            <View style={S.recommend}>
                <View style={S.recommendsongs}>
                    <Text style={S.songtext}>今日优选</Text>
                    <Antjt
                        name={'right'}
                        size={18}
                        color={'#636363'}
                    />
                </View> 

                <View style={S.optimization}>
                    <View style={S.optimizationlist}>
                        <Image
                            source={require('../image/recommend/1.jpg')}
                            style={S.optimizationimg}
                            resizeMode={'center'}
                        />
                        <View style={S.optimizationlistdes}>
                            <View style={S.optimizationlisttext}>
                                <Text style={S.authorsong}>红昭愿-丁译林</Text>
                                <View style={S.authordes}>
                                    <Image
                                        style={S.authorimg}
                                        source={require('../image/recommend/10.jpg')}
                                    />
                                    <Text style={S.authormc}>丁译林</Text>
                                    <Text style={S.authorshu}> | </Text>
                                    <Simplehuo
                                        name={'fire'}
                                        size={12}
                                        color={'#737373'}
                                    />
                                    <Text style={S.authormc}>2139</Text>
                                </View>
                            </View>  
                            <TouchableOpacity>
                                <Evilplay
                                    name={'play'}
                                    size={30}
                                    color={'#a3a3a3'}
                                />         
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View style={S.optimizationlist}>
                        <Image
                            source={require('../image/recommend/2.jpg')}
                            style={S.optimizationimg}
                            resizeMode={'center'}
                        />
                        <View style={S.optimizationlistdes}>
                            <View style={S.optimizationlisttext}>
                                <Text 
                                    ellipsizeMode={'tail'} 
                                    style={S.authorsong}
                                    numberOfLines={1}
                                >学一首只听一边就忍不住单曲循环的歌666</Text>
                                <View style={S.authordes}>
                                    <Image
                                        style={S.authorimg}
                                        source={require('../image/recommend/11.jpg')}
                                    />
                                    <Text style={S.authormc}>卡卡课堂</Text>
                                    <Text style={S.authorshu}> | </Text>
                                    <Simplehuo
                                        name={'fire'}
                                        size={12}
                                        color={'#737373'}
                                    />
                                    <Text style={S.authormc}>5571</Text>
                                </View>
                            </View>  
                            <TouchableOpacity>
                                <Evilplay
                                    name={'play'}
                                    size={30}
                                    color={'#a3a3a3'}
                                />         
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View style={S.optimizationlist}>
                        <Image
                            source={require('../image/recommend/3.jpg')}
                            style={S.optimizationimg}
                            resizeMode={'center'}
                        />
                        <View style={S.optimizationlistdes}>
                            <View style={S.optimizationlisttext}>
                                <Text 
                                    ellipsizeMode={'tail'} 
                                    style={S.authorsong}
                                    numberOfLines={1}
                                >高手是持续性自律，你是间歇性自虐</Text>
                                <View style={S.authordes}>
                                    <Image
                                        style={S.authorimg}
                                        source={require('../image/recommend/12.jpg')}
                                    />
                                    <Text style={S.authormc}>猫王音乐台</Text>
                                    <Text style={S.authorshu}> | </Text>
                                    <Simplehuo
                                        name={'fire'}
                                        size={12}
                                        color={'#737373'}
                                    />
                                    <Text style={S.authormc}>388</Text>
                                </View>
                            </View>  
                            <TouchableOpacity>
                                <Evilplay
                                    name={'play'}
                                    size={30}
                                    color={'#a3a3a3'}
                                />         
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View style={S.optimizationlist}>
                        <Image
                            source={require('../image/recommend/4.jpg')}
                            style={S.optimizationimg}
                            resizeMode={'center'}
                        />
                        <View style={S.optimizationlistdes}>
                            <View style={S.optimizationlisttext}>
                                <Text style={S.authorsong}>一首故事《夜空中就亮的星》</Text>
                                <View style={S.authordes}>
                                    <Image
                                        style={S.authorimg}
                                        source={require('../image/recommend/13.jpg')}
                                    />
                                    <Text style={S.authormc}> 一首故事MusicStory </Text>
                                    <Text style={S.authorshu}> | </Text>
                                    
                                    <Simplehuo
                                        name={'fire'}
                                        size={12}
                                        color={'#737373'}
                                    />
                                    <Text style={S.authormc}> 1560</Text>
                                </View>
                            </View> 
                            <TouchableOpacity>
                                <Evilplay
                                    name={'play'}
                                    size={30}
                                    color={'#a3a3a3'}
                                />         
                            </TouchableOpacity> 
                            
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}
