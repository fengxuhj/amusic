import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   ScrollView,
} from 'react-native'
import Iconmusic from 'react-native-vector-icons/FontAwesome5'
import Statusbar from '../common/Statusbar.js'
import MyHead from './mySub/MyHead'
import MymusList from './mySub/MymusList'
import MyCreateSheet from './mySub/MyCreatesheet'
import MyCollectSheet from './mySub/MyCollectSheet'



export default class My extends Component {
    static navigationOptions={
        tabBarLabel:'音乐',
        tabBarIcon(props){
            const {focused} = props
            return (<Iconmusic
                name={'itunes-note'}
                size={25}
                color={focused?'#c8412d':'#9b9a9a'}
            />)
        },
    }    
    render () {
        return (
            <View style={{flex:1}}>
                <Statusbar />
                <MyHead {...this.props} />
                <View style={{flex:1}}>
                    <ScrollView>
                        <MymusList {...this.props} />
                        <MyCreateSheet {...this.props} /> 
                        <MyCollectSheet {...this.props} />
                    </ScrollView>   
                </View>
            </View>
        )
    }

}