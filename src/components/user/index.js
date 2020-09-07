import React, {Component} from 'react'
import { 
   Platform,
   StyleSheet,
   View,
   Text,
   Dimensions,
   ScrollView,
   NativeModules,
} from 'react-native'
import Fontuser from 'react-native-vector-icons/FontAwesome5'


let {width,height} = Dimensions.get('window')
let {StatusBarManager} = NativeModules
export default class extends Component {
    static navigationOptions={
        tabBarLabel:'我的',
        tabBarIcon(props){
            const {focused} = props
            return (<Fontuser
                name={'user-alt'}
                size={24}
                color={focused?'#c8412d':'#9b9a9a'}
            />)
        },
        
    }
    render () {
        return (
            <View style={S.box}>
                <Text style={S.course}> 我的课程 </Text>
                <ScrollView>
                <View style={S.contain}>
                    <Text style={S.reactjs}> ReactJS介绍 </Text>
                    <Text style={S.text}>- React使用 Virtual DOM</Text>
                    <Text style={S.text}>- 提供了响应式 (Reactive) 和组件化 (Composable) 的视图组件</Text>
                    <Text style={S.text}>- 将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库</Text>
                    <Text style={S.text}>- React采用的JSX语法，angular推崇使用typescript，也可以直接用js写。配合上ts还是很爽，后端的也能很快习惯ts的开发。react更注重的是在【view ui】层，用state的改变去re-render页面。angular是双向绑定，更加注重的是【model 数据】层，更加擅长对数据的处理和业务逻辑。</Text>
                    <Text style={S.text}>- React和Vue都有props的概念，props在组件中是一个特殊的属性，允许父组件往子组件传送数据</Text>
                    <Text style={S.text}>- React和Vue都有自己的构建工具，你可以使用它快速搭建开发环境</Text>
                    <Text style={S.text}>- React采用 SSR(server side render) 服务器端渲染</Text>
                    <Text style={S.text}>- 最重要的的一点是学习了React就可以使用react native框架 开发跨平台app了 </Text>
                    <Text style={S.text}>- 开发出的app和原生app 几乎无法区分 接近原生app</Text>
                </View>
                </ScrollView>
            </View>
        )
    }

}

const S = StyleSheet.create({
    box:{
        width,
        flex:1,
        backgroundColor:'skyblue',
        paddingHorizontal: '2%',
        paddingTop:StatusBarManager.HEIGHT,
    },
    contain:{
        width:'100%',
        height:605,
        justifyContent: 'space-around',
        
    },
    course:{
        fontSize:22,
        alignItems: 'center',
        textAlign:'center',
        fontWeight:'bold'
    },
    reactjs:{
        fontSize:18,

    },
    text:{
        // whiteSpace:'wrap',
    }
})