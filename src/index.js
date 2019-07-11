import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:[{
                title:'离歌',
                singer:'阿信',
                like:false,
                selected:false,
            },{
                title:'unicorn',
                singer:'泽野弘之',
                like:true,
                selected:false,
            },{
                title:'一个人失忆',
                singer:'薛凯琪',
                like:false,
                selected:true,
            },{
                title:'夏伤',
                singer:'Sara',
                like:false,
                selected:true,
            }]
        }
    }
    add(title,singer){
        let data = this.state.data
        let musicobj = {
            title:title,
            singer:singer,
            like:false,
            selected:false
        }
        data.push(musicobj)
        this.setState({
            data
        })
    }
    render(){
        return <div id="musiclist">
                   <Header add={this.add.bind(this)}/>
                   <Main data={this.state.data}/>
                   <Footer/>
               </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

