import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.js'
import Main from './main.js'
import Footer from './footer.js'

class App extends React.Component {
    render(){
        return <div id="musiclist">
                   <Header/>
                   <Main/>
                   <Footer/>
               </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

