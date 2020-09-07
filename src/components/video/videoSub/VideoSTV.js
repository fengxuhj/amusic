import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
} from 'react-native'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import {S} from '../../common/VideoStyle'

import VideoRecom from './VideoRecom'
import VideoLive from './VideoLive'
import VideoAppearance from './VideoAppearance'
import VideoPart from './VideoPart'
import VideoHappy from './VideoHappy'


export default class VideoSTV extends Component {

    render () {
        return (
            <View style={S.videostv}>
                <ScrollableTabView
                    tabBarInactiveTextColor={'#fff'}  //Tab未选中是的文字颜色 
                    tabBarActiveTextColor={'#fff'}  //Tab选中时的文字颜色
                    tabBarBackgroundColor={'#d53c32'}  //TabBar的背景色
                    // tabBarPosition={'bottom} 
                    scrollWithoutAnimation={true}
                    tabBarUnderlineStyle={{
                        backgroundColor:'#fff',
                        height:4,
                        borderRadius:3,
                        marginBottom:6,
                    }} //下滑横线的样式
                    renderTabBar={()=> (<ScrollableTabBar
                        style={{
                            height:45,
                            borderWidth: 0, //默认有白色边框线
                            // elevation: 2,
                            marginBottom:10,
                        }}
                    />)}
                >
                    <VideoRecom tabLabel={'推荐'} />
                    
                    <VideoLive tabLabel={'LOOK直播'} />
                    
                    <VideoAppearance tabLabel={'有颜又会唱'} />
                    
                    <VideoPart tabLabel={'好心分手'} />
                    
                    <VideoHappy tabLabel={'爆笑根本停不下来'} />
                    
                </ScrollableTabView>
            </View>
        )
    }

}