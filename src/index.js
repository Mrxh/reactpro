import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            listState:true,
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
            }],
            alldata:this.data
        }
        this.add = this.add.bind(this)
        this.isCheckAll = this.isCheckAll.bind(this)
        this.setCheck = this.setCheck.bind(this)
        this.setCheckAll = this.setCheckAll.bind(this)
        this.setLike = this.setLike.bind(this)
        this.remove = this.remove.bind(this)
        this.removeSel = this.removeSel.bind(this)
        this.likeSel = this.likeSel.bind(this)
        this.searchList = this.searchList.bind(this)
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
    isCheckAll(){
        let data = this.state.data
        for(let i=0;i<data.length;i++){
            if(!data[i].selected){
                 return false
            }
        }
        return true
    }
    setCheck(index,checked){
        let data = this.state.data
        data[index].selected = checked
        this.setState({
            data
        })
    }
    setCheckAll(checked){
        let data = this.state.data.map((val)=>{
            val.selected = checked
            return val
        })
        this.setState({
            data
        })
    }
    setLike(index,checked){
        let data = this.state.data
        data[index].like = checked
        this.setState({
            data
        })
    }
    remove(index){
        let data = this.state.data.filter((val,i)=>i!==index)
        this.setState({
            data
        })
    }
    removeSel(){
        let data = this.state.data.filter(val=>!val.selected)
        this.setState({
            data
        })
    }
    likeSel(islike){
        let data = this.state.data.map((val)=>{
            if(val.selected){
                if(islike){
                    val.like = true
                }else{
                    val.like = false
                }
            }
            return val
        })
        this.setState({
            data
        })
    }
    searchList(flag){
        // if(flag==="all"){
        //
        // }
        // this.setState({
        //     alldata:this.state.data
        // })
        console.log(this.state.alldata)

        let data = this.state.data.filter(val=>val.like)
        this.setState({
            data
        })
    }
    render(){
        let data = this.state.data
        let selectedLength = data.filter((val)=>val.selected).length
        let likeLength = data.filter((val)=>val.like).length
        return <div id="musiclist">
                   <Header add={this.add}/>
                   <Main data={data}
                         isCheckAll={this.isCheckAll()}
                         setCheck={this.setCheck}
                         setCheckAll={this.setCheckAll}
                         setLike={this.setLike}
                         remove={this.remove}
                   />
                   <Footer data={data}
                           removeSel={this.removeSel}
                           likeSel={this.likeSel}
                           searchList={this.searchList}
                           selectedLength={selectedLength}
                           likeLength={likeLength}
                           listState={this.state.listState}/>
               </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

