import React from 'react';

export default class Main extends React.Component{
    render(){
        return <table className="main">
                       <thead>
                            <tr>
                                <td>
                                    <input type="checkbox"/>
                                    全选
                                </td>
                                <td>歌曲</td>
                                <td>歌手</td>
                                <td>收藏</td>
                                <td>删除</td>
                            </tr>
                       </thead>
                       <tbody>
                       <tr className="like">
                           <td><input type="checkbox"/></td>
                           <td>空白格</td>
                           <td>蔡健雅</td>
                           <td><input type="checkbox" checked/></td>
                           <td><a>X</a></td>
                       </tr>
                       <tr>
                           <td><input type="checkbox"/></td>
                           <td>unicorn</td>
                           <td>泽野弘之</td>
                           <td><input type="checkbox"/></td>
                           <td><a>X</a></td>
                       </tr>
                       <tr className="select">
                           <td><input type="checkbox" checked/></td>
                           <td>夏伤</td>
                           <td>sara</td>
                           <td><input type="checkbox"/></td>
                           <td><a>X</a></td>
                       </tr>
                       </tbody>
                   </table>
    }
}