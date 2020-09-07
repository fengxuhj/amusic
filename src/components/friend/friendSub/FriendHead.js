import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
} from 'react-native'
import {S} from '../../common/FriendStyle'
import Antcaret from 'react-native-vector-icons/AntDesign'
import Antaddfriend from 'react-native-vector-icons/AntDesign'
import Feathershu from 'react-native-vector-icons/Feather'
import Feathervideo from 'react-native-vector-icons/Feather'
import Fontfs from 'react-native-vector-icons/FontAwesome'

export default class extends Component {
    state = {
        off:false,
    }
    kuaiguan1 = ()=>{
        this.setState({
            off:false,
        })
    }
    kuaiguan2 = ()=>{
        this.setState({
            off:true,
        })
    }


    render () {
        let {off,FDT,FSP} = this.state
        let {navigate,state} = this.props.navigation
        
        return (
            <View style={S.frdhead}>
                <TouchableOpacity opacity={0.5} onPress={()=>{navigate('Neiye',{title:'QQ',state})}}>
                    <View style={S.frdheadqq}>
                        <Antcaret 
                            name={'caretleft'}
                            size={10}
                            color={'#fff'}
                        />
                        <Text style={S.frdheadqqtext}> QQ </Text>
                    </View>
                </TouchableOpacity>
                
                <View style={S.frdheadadduser}>
                    <TouchableOpacity opacity={0.5} onPress={()=>{navigate('Neiye',{title:'添加好友',state})}}>
                        <Antaddfriend 
                            name={'adduser'}
                            size={28}
                            color={'#fff'}
                        />
                    </TouchableOpacity>

                    <View style={S.frdheaddt}>
                        <TouchableOpacity opacity={1} onPress={this.kuaiguan1}>
                            <Text
                                style={[S.frdheaddttext,{
                                    backgroundColor:off?'#d53c32':'#fff',
                                    color:off?'#fff':'#d53c32',}]}
                            >动态</Text>
                        </TouchableOpacity>
                    
                        <TouchableOpacity opacity={1} onPress={this.kuaiguan2}>
                            <Text
                                style={[S.frdheaddttext,{
                                    backgroundColor:off?'#fff':'#d53c32',
                                    color:off?'#d53c32':'#fff',}]}
                            >附近</Text>
                        </TouchableOpacity>
                    </View> 

                    <TouchableOpacity opacity={0.5} onPress={()=>{navigate('Neiye',{title:'播放列表',state})}}>
                        <Feathershu
                            name={'bar-chart-2'}
                            size={28}
                            color={'#fff'}
                        />
                    </TouchableOpacity>
                </View>

                <View style={S.frdusercz}>
                    <TouchableOpacity 
                        activeOpacity={0.5} 
                        style={S.usercz} 
                        onPress={()=>{navigate('Neiye',{title:'发动态',state})}}
                    >
                        <Fontfs 
                            name={'pencil-square-o'}
                            size={24}
                            color={'#fff'}
                            style={{marginRight:6}}
                        />
                        <Text style={S.usercztex}> 发动态 </Text>
                    </TouchableOpacity> 
                    
                    <TouchableOpacity 
                        activeOpacity={0.5} 
                        style={S.usercz}
                        onPress={()=>{navigate('Neiye',{title:'发视频',state})}}
                    >
                        <Feathervideo 
                            name={'video'}
                            size={24}
                            color={'#fff'}
                            style={{marginRight:6}}
                        />
                        <Text style={S.usercztex}> 发视频 </Text>
                    </TouchableOpacity> 
                </View>
            </View>
        )
    }

}