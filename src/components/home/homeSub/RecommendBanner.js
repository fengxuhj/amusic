import React, {Component} from 'react'
import {
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
                    dotStyle={{opacity:0.4}}
                    paginationStyle	={{
                        bottom:6
                    }}

                    >
                    <View style={S.slide}>
                        <ImageBackground 
                            source={require('../image/banner/001.jpg')}
                            resizeMode={'cover'}
                            style={{width:'100%',height:'100%'}}
                        >
                            <Text style={S.dujia}> 独家专访 </Text>
                        </ImageBackground>
                    </View>
                    <View style={S.slide}>
                        <Image 
                            source={require('../image/banner/002.jpg')}
                            resizeMode={'cover'}
                            style={{width:'100%',height:'100%'}}
                        />
                    </View>
                    <View style={S.slide}>
                        <Image 
                            source={require('../image/banner/003.jpg')}
                            resizeMode={'cover'}
                            style={{width:'100%',height:'100%'}}
                        />
                    </View>
                    <View style={S.slide}>
                        <Image 
                            source={require('../image/banner/004.jpg')}
                            resizeMode={'cover'}
                            style={{width:'100%',height:'100%'}}
                        />
                    </View>
                    <View style={S.slide}>
                        <Image 
                            source={require('../image/banner/005.jpg')}
                            resizeMode={'cover'}
                            style={{width:'100%',height:'100%'}}
                        />
                    </View>
                    <View style={S.slide}>
                        <Image 
                            source={require('../image/banner/006.jpg')}
                            resizeMode={'cover'}
                            style={{width:'100%',height:'100%'}}
                        />
                    </View>
                    <View style={S.slide}>
                        <Image 
                            source={require('../image/banner/007.jpg')}
                            resizeMode={'cover'}
                            style={{width:'100%',height:'100%'}}
                        />
                    </View>
                    <View style={S.slide}>
                        <Image 
                            source={require('../image/banner/008.jpg')}
                            resizeMode={'cover'}
                            style={{width:'100%',height:'100%'}}
                        />
                    </View>
                </Swiper>   
            </View>
        )
    }

}
