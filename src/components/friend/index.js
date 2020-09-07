import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
} from 'react-native'
import Statusbar from '../common/Statusbar.js'
import Fontfriend from 'react-native-vector-icons/FontAwesome5'
import FriendHead from './friendSub/FriendHead'
import FollowFrd from './friendSub/FollowFrd'

export default class extends Component {
    static navigationOptions={
        tabBarLabel:'朋友',
        tabBarIcon(props){
            const {focused} = props
            return (<Fontfriend
                name={'user-friends'}
                size={24}
                color={focused?'#c8412d':'#9b9a9a'}
            />)
        },
        
    }


    render () {
        return (
            <View style={{flex:1}}>
                <Statusbar />
                <FriendHead {...this.props} />
                <FollowFrd />
            </View>
            
        )
    }

}

