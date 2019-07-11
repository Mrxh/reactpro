import React from 'react';
import Item from './item'

export default class Main extends React.Component{
    render(){
        let data = this.props.data
        return <table className="main" style={{display:data.length?"table":"none"}}>
                       <thead>
                            <tr>
                                <td>
                                    <input type="checkbox" name=""/>
                                    全选
                                </td>
                                <td>歌曲</td>
                                <td>歌手</td>
                                <td>收藏</td>
                                <td>删除</td>
                            </tr>
                       </thead>
                       <tbody>
                       {
                           data.map((item,index)=>{
                             return  <Item key={index} item={item}/>
                           })
                       }
                       </tbody>
                   </table>
    }
}