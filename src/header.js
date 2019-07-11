import React from 'react';

export default class Header extends React.Component{
    constructor(){
        super(...arguments)
        this.state={
            title:"",
            singer:""
        }
    }
    render(){
        return <header>
                  <h4>播放列表</h4>
                  <input type="text" placeholder="请输入歌曲名字"
                         value={this.state.title}
                         onChange={
                             (e)=>{
                                 this.setState({
                                     title:e.target.value
                                 })
                             }
                         }/>
                  <input type="text" placeholder="请输入歌手名字"
                         value={this.state.singer}
                         onChange={(e)=>{
                             this.setState({
                                 singer:e.target.value
                             })
                         }}/>
                  <input type="button" onClick={()=>{
                      this.props.add(this.state.title,this.state.singer)
                  }} value="添加音乐"/>
               </header>
    }
}
