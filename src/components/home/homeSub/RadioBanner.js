import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   ImageBackground,
   Image,
} from 'react-native'
import Swiper from 'react-native-swiper'

import {S} from '../../common/Style'

export default class NAME extends Component {

    render () {
        return (
            <View style={S.banner}>
                <Swiper 
                    style={S.wrapper} 
                    autoplay={true}
                    autoplayTimeout={3}
                    dotColor={'#666'}
                    activeDotColor={'red'}
                    dotStyle={{opacity:0.5}}
                    paginationStyle	={{
                        bottom:6
                    }}

                    >
                    <View style={S.slide}>
                        <ImageBackground 
                            source={require('../image/banner2/1.jpg')}
                            resizeMode={'cover'}
                            style={{width:'100%',height:'100%'}}
                        >
                            <Text style={S.gushi}>音乐故事</Text>
                        </ImageBackground>
                    </View>
                    <View style={S.slide}>
                        <Image 
                            source={require('../image/banner2/2.jpg')}
                            resizeMode={'cover'}
                            style={S.radiobannerimg}
                        />
                    </View>
                    <View style={S.slide}>
                        <Image 
                            source={require('../image/banner2/3.jpg')}
                            resizeMode={'cover'}
                            style={S.radiobannerimg}
                        />
                    </View>
                    <View style={S.slide}>
                        <Image 
                            source={require('../image/banner2/4.jpg')}
                            resizeMode={'cover'}
                            style={S.radiobannerimg}
                        />
                    </View>
                    <View style={S.slide}>
                        <Image 
                            source={require('../image/banner2/5.jpg')}
                            resizeMode={'cover'}
                            style={S.radiobannerimg}
                        />
                    </View>
                    <View style={S.slide}>
                        <Image 
                            source={require('../image/banner2/6.jpg')}
                            style={S.radiobannerimg}
                            resizeMode={'cover'}
                        />
                    </View>
                </Swiper>    
            </View>
        )
    }

}
