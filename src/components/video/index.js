import React, {Component} from 'react'
import { 
   Platform,
   View,
   Text,
} from 'react-native'
import Statusbar from '../common/Statusbar.js'

import Foundvideo from 'react-native-vector-icons/Entypo'
import VideoHead from './videoSub/VideoHead'
import VideoSTV from './videoSub/VideoSTV'


export default class extends Component {
    static navigationOptions={
        tabBarLabel:'视频',
        tabBarIcon(props){
            const {focused} = props
            return (<Foundvideo
                name={'folder-video'}
                size={24}
                color={focused?'#c8412d':'#9b9a9a'}
            />)
        },
    }

    render () {
        return (
            <View style={{flex:1}}>
                <Statusbar />

                <VideoHead {...this.props} />
                
                <VideoSTV />
            </View>
        )
    }

}