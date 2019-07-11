import React from 'react';

export default class Item extends React.Component{
    render(){
        let item = this.props.item
        return <tr className={(item.like?"like":"")+(item.selected?"select":"")}>
                <td><input type="checkbox" checked={item.selected?true:false}/></td>
                <td>{item.title}</td>
                <td>{item.singer}</td>
                <td><input type="checkbox" checked={item.like?true:false}/></td>
                <td><a>X</a></td>
               </tr>
    }
}