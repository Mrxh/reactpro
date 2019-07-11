import React from 'react';

export default class Header extends React.Component{
    render(){
        return <header>
                  <h4>播放列表</h4>
                  <input type="text" placeholder="请输入歌曲名字"/>
                  <input type="text" placeholder="请输入歌手名字"/>
                  <input type="button" value="添加音乐"/>
               </header>
    }
}