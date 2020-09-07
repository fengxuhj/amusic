import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   Image,
   ImageBackground,
   TouchableOpacity,
   ScrollView,
} from 'react-native'
import Antright from 'react-native-vector-icons/AntDesign'
import {S} from '../../common/FriendStyle'
import Fontplay from 'react-native-vector-icons/FontAwesome5'
import Featherplay from 'react-native-vector-icons/Feather'
import Feathershu from 'react-native-vector-icons/Feather'
import Antdz from 'react-native-vector-icons/AntDesign'
import Materialcom from 'react-native-vector-icons/MaterialCommunityIcons'
import Antsd from 'react-native-vector-icons/AntDesign'
import Antsc from 'react-native-vector-icons/AntDesign'


export default class extends Component {
    state={
        num1:false,
        num2:false,
        off1:false,
        off2:false,
        shoucang:false,
        // off3:false,
    }
    dianzan1 = () => {
        let {num1} = this.state
        num1++
        this.setState({
            num1,
        })
    }
    dianzan2 = () => {
        let {num2} = this.state
        num2++
        this.setState({
            num2,
        })
    }
    shoucang = () => {
        let {shoucang} = this.state
        shoucang = !shoucang
        this.setState({
            shoucang,
        })
    }
    guanzhu1 = () => {
        let {off1} = this.state

        off1 = !off1
        this.setState({
            off1,
        })
    }
    guanzhu2 = () => {
        let {off2} = this.state
        off2 = !off2
        
        this.setState({
            off2,
        })
    }
    ganzhuuser = () =>{
        let {off1,off2} = this.state
        if(off1){
            if(off2){
                return true
            }else{
                return true
            }
        }else{
            if(off2){
                return true
            }else{
                return false
            }
        }
    }

    render () {
        let {num1,num2,off1,off2,shoucang} = this.state
        let off3 = this.ganzhuuser()
       
        return (
            <View style={{flex:1}}>
                <ScrollView>
                <View>
                    <View style={[S.followfrd,{height:off3?125:50,paddingTop:off3?0:30}]}>
                        <View style={S.followfrdtb}>
                            <Text style={S.followfrdtext}>我关注的朋友</Text>
                            <Antright
                                name={'right'}
                                size={15}
                                color={'#000'}
                            />
                        </View>
                        <View style={S.followfrdzh}>
                            <View style={[S.followfrdlist,{display:off1?'flex':'none'}]}>
                                <Image 
                                    source={require('../../video/image/author/007.jpg')}
                                    style={S.followfrdlisttp}
                                />
                                <Text> 胡夏 </Text>
                            </View>
                            <View style={[S.followfrdlist,{display:off2?'flex':'none'}]}>
                                <Image 
                                    source={require('../../video/image/author/008.jpg')}
                                    style={S.followfrdlisttp}
                                />
                                <Text> 吴青峰 </Text>
                            </View>
                        </View>
                    </View>

                    <View style={S.frienddynamic}>
                        <View style={S.frddynamichx}>
                            <View style={S.dynamicauthor}>
                                <Image
                                    source={require('../../video/image/author/007.jpg')}
                                    style={S.dynamicauthortp}
                                />
                                <View style={S.authordes}> 
                                    <View>
                                        <View>
                                            <View style={S.authorfabu}>
                                                <Text style={{fontSize:15,color:'#5178ac'}}>胡夏 </Text>
                                                <Text style={{fontSize:15,color:'#686868'}}> 发布视频</Text>
                                            </View>
                                            <Text style={{fontSize:11,color:'#b7b7b8'}}>6666粉丝</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <TouchableOpacity 
                                            activeOpacity={0.8} 
                                            onPress={() =>{this.guanzhu1()}}
                                        >
                                            <Text style={S.guanzhu}>{off1?'- ':'+ '} 关注</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={S.dynamicdes}>
                                <Text style={{
                                    width:324,
                                    fontSize:15,
                                    color:'#000',
                                    marginBottom:8,}}
                                >电视剧我的奇妙男友挚爱主题曲《恋恋不忘2》</Text>

                                <ImageBackground
                                    source={require('../../video/image/remconend/006.jpg')}
                                    style={S.ImageBackground}
                                    resizeMode={'cover'}
                                >
                                    <View style={{alignItems:'flex-end'}}>
                                        <Text style={S.ecy}>网易云音乐</Text>
                                    </View>

                                    <View style={{alignItems:'center',justifyContent:'center',}}>
                                        <TouchableOpacity>
                                            <Fontplay 
                                                name={'play'}
                                                size={45}
                                                color={'#eee'}
                                            /> 
                                        </TouchableOpacity>
                                    </View>
                                        
                                    <View style={S.backtext}>
                                        <View style={{
                                            flexDirection:'row',
                                            justifyContent: 'center',
                                        }}>
                                            <Featherplay 
                                                name={'play'}
                                                size={15}
                                                color={'#fff'} 
                                            />
                                            <Text style={{fontSize:12,color:'#fff'}}> 87万</Text> 
                                        </View>
                                        <View style={{
                                            flexDirection:'row',
                                            justifyContent: 'center',
                                        }}>
                                            <Feathershu
                                                name={'bar-chart-2'}
                                                size={16}
                                                color={'#fff'} 
                                            />
                                            <Text style={{fontSize:12,color:'#fff'}}> 05:40</Text>
                                        </View>
                                    </View> 
                                        
                                </ImageBackground>

                                <View style={S.Followusercz}>
                                    <View style={{
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                        alignItems:'center',
                                        width:190,
                                    }}>
                                        <TouchableOpacity onPress={() =>{this.shoucang()}}>
                                            <Antsc
                                                name={'staro'}
                                                size={25}
                                                color={shoucang?'#d73146':'#666'}
                                            /> 
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <Materialcom
                                                name={'comment-text-outline'}
                                                size={22}
                                            /> 
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity
                                            onPress={()=>{this.dianzan1()}}
                                            style={{
                                                flexDirection:'row',
                                                alignItems:'flex-start',
                                            }}
                                        >
                                            <Antdz
                                                name={'like2'}
                                                size={23}
                                            />
                                            <Text style={S.dznum}>{num1}</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <TouchableOpacity>
                                        <Antsd
                                            name={'ellipsis1'}
                                            size={22}
                                            style={{marginRight:8,}}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={S.frddynamichx}>
                            <View style={S.dynamicauthor}>
                                <Image
                                    source={require('../../video/image/author/008.jpg')}
                                    style={S.dynamicauthortp}
                                />
                                <View style={S.authordes}> 
                                    <View>
                                        <View>
                                            <View style={S.authorfabu}>
                                                <Text style={{fontSize:15,color:'#5178ac'}}>吴青峰 </Text>
                                                <Text style={{fontSize:15,color:'#686868'}}> 发布最新单曲</Text>
                                            </View>
                                            <Text style={{fontSize:11,color:'#b7b7b8'}}>9999粉丝</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <TouchableOpacity 
                                            activeOpacity={0.8} 
                                            onPress={() =>{this.guanzhu2()}}
                                        >
                                            <Text style={S.guanzhu}>{off2?'- ':'+ '} 关注</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={S.dynamicdes}>
                                <Text style={{
                                    width:324,
                                    fontSize:15,
                                    color:'#000',
                                    marginBottom:8,}}
                                >电视剧加油，你是最棒的主题曲《恋恋不忘2》</Text>

                                <ImageBackground
                                    source={require('../../video/image/remconend/003.jpg')}
                                    style={S.ImageBackground}
                                    resizeMode={'cover'}
                                >
                                    <View style={{alignItems:'flex-end'}}>
                                        <Text style={S.ecy}>网易云音乐</Text>
                                    </View>

                                    <View style={{alignItems:'center',justifyContent:'center',}}>
                                        <TouchableOpacity>
                                            <Fontplay 
                                                name={'play'}
                                                size={45}
                                                color={'#eee'}
                                            /> 
                                        </TouchableOpacity>
                                    </View>
                                        
                                    <View style={S.backtext}>
                                        <View style={{
                                            flexDirection:'row',
                                            justifyContent: 'center',
                                        }}>
                                            <Featherplay 
                                                name={'play'}
                                                size={15}
                                                color={'#fff'} 
                                            />
                                            <Text style={{fontSize:12,color:'#fff'}}> 66万</Text> 
                                        </View>
                                        <View style={{
                                            flexDirection:'row',
                                            justifyContent: 'center',
                                        }}>
                                            <Feathershu
                                                name={'bar-chart-2'}
                                                size={16}
                                                color={'#fff'} 
                                            />
                                            <Text style={{fontSize:12,color:'#fff'}}> 04:20</Text>
                                        </View>
                                    </View> 
                                        
                                </ImageBackground>

                                <View style={S.Followusercz}>
                                    <View style={{
                                        flexDirection:'row',
                                        justifyContent:'space-between',
                                        alignItems:'center',
                                        width:190,
                                    }}>
                                        <TouchableOpacity onPress={() =>{this.shoucang()}}>
                                            <Antsc
                                                name={'staro'}
                                                size={25}
                                                color={shoucang?'#d73146':'#666'}
                                            /> 
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <Materialcom
                                                name={'comment-text-outline'}
                                                size={22}
                                            /> 
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity
                                            onPress={()=>{this.dianzan2()}}
                                            style={{
                                                flexDirection:'row',
                                                alignItems:'flex-start',
                                            }}
                                        >
                                            <Antdz
                                                name={'like2'}
                                                size={23}
                                            />
                                            <Text style={S.dznum}>{num2}</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <TouchableOpacity>
                                        <Antsd
                                            name={'ellipsis1'}
                                            size={22}
                                            style={{marginRight:8,}}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>  
                </View>
                </ScrollView>
            </View>
        )
    }

}