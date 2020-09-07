import React, {Component} from 'react'
import { 
    Platform,
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
} from 'react-native'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'

import StatusBar from '../common/Statusbar.js'
import HomeHead from './homeSub/homeHead'
import RecommendBanner from './homeSub/RecommendBanner'
import RecommendCate from './homeSub/RecommendCate'
import RecommendSong from './homeSub/RecommendSong'

import RadioBanner from './homeSub/RadioBanner'
import RadioCate from './homeSub/RadioCate'
import RadioRecommend from './homeSub/RadioRecommend'
import MySong from './homeSub/MySong'
import Radioradio from './homeSub/Radioradio'
import {S} from '../common/Style'

let {height,width} = Dimensions.get('window') 
export default class extends Component {

    render () {
        return (
            <View style={{flex:1}}>
                <StatusBar />
                <HomeHead {...this.props} />
                <View
                    style={{
                        height:height-120,
                        // backgroundColor:'#d53c32',
                        position:'relative',
                    }}
                >
                    <View style={S.background}></View>

                    <ScrollableTabView
                        tabBarInactiveTextColor={'#fff'}  //Tab未选中是的文字颜色 
                        tabBarActiveTextColor={'#fff'}  //Tab选中时的文字颜色
                        // tabBarBackgroundColor={'red'}  //TabBar的背景色
                        // tabBarPosition={'bottom} 
                        tabBarUnderlineStyle={{
                            backgroundColor:'#fff',
                            height: 4,
                            width: 32,
                            borderRadius:3,
                            marginHorizontal:33,
                        }} //下滑横线的样式
                        renderTabBar={()=> (<ScrollableTabBar
                            style={{
                                height:45,
                                borderWidth: 0, //默认有白色边框线
                                // elevation: 2,
                                // zIndex:10,
                                
                            }}
                        />)}
                    >
                        <View tabLabel={'个性推荐'} >
                            <ScrollView style={{}}>
                                <RecommendBanner />

                                <RecommendCate {...this.props} />

                                <RecommendSong {...this.props} />

                                <MySong {...this.props} />
                            </ScrollView>
                        </View>

                        <View tabLabel={'主播电台'}>
                            <ScrollView style={{}}>
                                
                                <RadioBanner />
                                
                                <RadioCate {...this.props} />
                                <RadioRecommend {...this.props} />
                                <Radioradio {...this.props} />
                                
                            </ScrollView>
                        </View>
                    </ScrollableTabView>
                </View>
                
            </View>
        )
    }

}

