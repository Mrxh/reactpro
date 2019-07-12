import React from 'react';

export default class Item extends React.Component{
    render(){
        let item = this.props.item
        return <tr className={(item.like?"like":"")+(item.selected?" select":"")}>
                <td><input type="checkbox"
                           checked={item.selected?true:false}
                           onChange={(e)=>{
                               this.props.setCheck(this.props.index,e.target.checked)
                           }}/></td>
                <td>{item.title}</td>
                <td>{item.singer}</td>
                <td><input type="checkbox"
                           checked={item.like?true:false}
                           onChange={(e)=>{
                              this.props.setLike(this.props.index,e.target.checked)
                           }}/></td>
                <td><a onClick={()=>{
                    this.props.remove(this.props.index)
                }}>X</a></td>
               </tr>
    }
}