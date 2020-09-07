import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   Image,
   TouchableOpacity,
} from 'react-native'

import {S} from '../../common/Style'

export default class NAME extends Component {

    render () {
        let {navigate,state} = this.props.navigation

        return (
            <View style={S.cate}>
                <TouchableOpacity onPress={()=>{navigate('Neiye',{title:'电台分类',state})}}>
                    <View style={S.catelist}>
                        <Image 
                            source={require('../image/cate/cate5.png')}
                            resizeMode={'center'}  
                            style={S.cateimg}
                        />
                        <Text style={S.catetext}> 电台分类 </Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{navigate('Neiye',{title:'电台排行',state})}}>
                    <View style={S.catelist}>
                        <Image 
                            source={require('../image/cate/cate6.png')}
                            resizeMode={'center'}
                            style={S.cateimg}
                        />
                        <Text style={S.catetext}> 电台排行 </Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{navigate('Neiye',{title:'DI电台',state})}}>
                    <View style={S.catelist}>
                        <Image
                            source={require('../image/cate/cate7.png')}
                            resizeMode={'center'}
                            style={S.cateimg}
                        />
                        <Text style={S.catetext}> DI电台 </Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{navigate('Neiye',{title:'小冰电台',state})}}>
                    <View style={S.catelist}>
                        <Image
                            source={require('../image/cate/cate8.png')}
                            resizeMode={'center'}
                            style={S.cateimg}
                        />
                        <Text style={S.catetext}> 小冰电台 </Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        )
    }

}
