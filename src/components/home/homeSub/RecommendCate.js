import React, {Component} from 'react'
import {
   View,
   Text,
   Image,
   TouchableOpacity,
} from 'react-native'

import {S} from '../../common/Style'

export default class Cate extends Component {

    render () {
        let {navigate,state} = this.props.navigation

        return (
            <View style={S.cate}>
                <TouchableOpacity onPress={()=>{navigate('Neiye',{title:'私人FM',state})}}>
                    <View style={S.catelist}>
                        <Image 
                            source={require('../image/cate/cate1.png')}
                            resizeMode={'center'}  
                            style={S.cateimg}
                        />
                        <Text style={S.catetext}> 私人FM </Text>
                    </View>
                </TouchableOpacity>
                   
                <TouchableOpacity onPress={()=>{navigate('Neiye',{title:'每日推荐',state})}}>
                    <View style={S.catelist}>
                        <Image 
                            source={require('../image/cate/cate2.png')}
                            resizeMode={'center'}
                            style={S.cateimg}
                        />
                        <Text style={S.catetext}> 每日推荐 </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigate('Neiye',{title:'歌单',state})}}>
                    <View style={S.catelist}>
                        <Image
                            source={require('../image/cate/cate3.png')}
                            resizeMode={'center'}
                            style={S.cateimg}
                        />
                        <Text style={S.catetext}> 歌单 </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigate('Neiye',{title:'排行榜',state})}}>
                    <View style={S.catelist}>
                        <Image
                            source={require('../image/cate/cate4.png')}
                            resizeMode={'center'}
                            style={S.cateimg}
                        />
                        <Text style={S.catetext}> 排行榜 </Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }

}
