import React from 'react';

export default class Footer extends React.Component{
    render(){
        let selectedLength = this.props.selectedLength
        let likeLength = this.props.likeLength
        let listState = this.props.listState
        return <footer style={{display:this.props.data.length?"block":"none"}}>
                <div className="info">
                    <span className="rt" style={{display:this.props.selectedLength?"block":"none"}}>
                        当前选中
                        {this.props.selectedLength}
                        首歌曲
                    </span>
                    <span>共{this.props.data.length}首歌曲</span>
                </div>
                <input type="button" value="删除选中歌曲"
                       onClick={()=>{
                           this.props.removeSel()
                       }} style={{display:selectedLength?"inline-block":"none"}}/>
                <input type="button" value="收藏选中歌曲"
                       onClick={()=>{
                           this.props.likeSel(true)
                       }} style={{display:selectedLength?"inline-block":"none"}}/>
                <input type="button" value="取消收藏选中歌曲"
                       onClick={()=>{
                           this.props.likeSel(false)
                       }} style={{display:selectedLength?"inline-block":"none"}}/>
                <input type="button" value="查看收藏清单"
                       onClick={()=>{
                           this.props.searchList("like")
                       }} style={{display:(listState && likeLength)?"inline-block":"none"}}/>
                <input type="button" value="查看所有清单"
                       onClick={()=>{
                           this.props.searchList("all")
                       }} style={{display:!(listState && likeLength)?"inline-block":"none"}}/>
              </footer>
    }
}