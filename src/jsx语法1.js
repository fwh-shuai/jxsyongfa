//引入依赖
import React, { Component } from 'react'
//引入样式
import './App.css'
//编写类组件
export default class App extends Component {
  render() {
    let title= ['Pull request', 'Issusues', 'Maketplace', 'Explore']
    return <div>
      <ul>
        {
          //箭头函数不加{},表示直接返回接下来写的东西
          title.map((item, index) => <li key={index}>{item}</li>)
          // title.map((item, index) =>{
          //   return <li key={index}>{item}</li>
          // } )           
          }
      </ul>
    </div>
  }
}
