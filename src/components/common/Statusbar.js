import React, {Component} from 'react'
import { 
   StyleSheet,
   StatusBar,
} from 'react-native'

export default class extends Component {

    render () {
        return (
            <StatusBar
                barStyle={"light-content"}
                backgroundColor={'transparent'}
                translucent={true}
            />
        )
    }

}

const S = StyleSheet.create({})