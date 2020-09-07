import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   Button,
} from 'react-native'

//alert(routeName)
export default class extends Component {

    render () {
        let {params} = this.props.navigation.state
        let {navigate} = this.props.navigation

        return (
            <View style={S.box}>
                <View style={S.button}>
                    <Button 
                        title={'返回'}
                        onPress={()=>{
                            navigate(params.state)
                        }}
                    />  
                </View>

                <Text style={S.text}> 欢迎进入{params.title}页面 </Text>
                <Text style={S.text}> 相关功能正在努力开发中 </Text>
            </View>
        )
    }

}

const S = StyleSheet.create({
    box:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff',
        alignItems: 'center',
        padding: '2%',
    },
    button:{
        width:'100%',
        alignItems:'flex-start',  
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        marginVertical: 20,
    },
})