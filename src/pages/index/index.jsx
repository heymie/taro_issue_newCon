import Taro, { Component } from '@tarojs/taro'
import withWeapp from '@tarojs/with-weapp'
import { View, Text } from '@tarojs/components'
import './index.scss'

let page = {
  onLoad(){
    console.log('.............')
  }
}

@withWeapp(page)
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  // componentWillMount () { }

  // componentDidMount () { }

  // componentWillUnmount () { }

  // componentDidShow () { }

  // componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
