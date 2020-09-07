import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   ImageBackground,
   Dimensions,
   StatusBar,
   TouchableOpacity,
} from 'react-native'

let {width,height} = Dimensions.get('window')
export default class extends Component {
    state={
        num:5,
    }

    componentDidMount(){
        let {num} = this.state
        this.timer = setInterval(()=>{
            num > 0 && num--
            this.setState({
                num,
            })

            if(num == 0){
                clearInterval(this.timer)
                this.handlegotobt()
            }

        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    handlegotobt = ()=>{
        let {navigate} = this.props.navigation
        navigate('Home')
    }


    render () {
        return (
            <View>
                <StatusBar
                    hidden={false}
                />
                <ImageBackground
                    source={require('../components/home/image/recommend/happy.jpg')}
                    resizeMode={'cover'}
                    style={S.bgc}
                >

                    <TouchableOpacity activeOpacity={0.7} onPress={this.handlegotobt}>
                        <Text style={S.time}> 跳过广告 {this.state.num} </Text> 
                    </TouchableOpacity>   
                </ImageBackground>
            </View>
        )
    }

}

const S = StyleSheet.create({
    bgc:{
        width,
        height,
        alignItems:'flex-end',
    },
    time:{
        width:100,
        height:25,
        borderWidth: 1,
        borderRadius: 15,
        borderColor:'#666',
        marginTop:30,
        marginRight:15,
        textAlign:'center',
        lineHeight:25,
        fontSize: 16,
        color:'#666',
        backgroundColor:'#fff',
    },
})