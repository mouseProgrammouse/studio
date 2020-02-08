import React, { Component } from 'react';
import './App.css';
// import components
import MainDescription from './components/MainDescription';
import Logo from './imgs/main-logo.svg';
import * as data from './dict.json';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      content: data.content["RU"], // TODO: get lang from cookies;
      lang: "RU" // TODO: get lang from cookies;
    };
  }

  changeLang = (newLang) => {
    this.setState({ 
      content: data.content[newLang], // "translate" content
      lang: newLang 
    });
  }

  render () {
    const content = this.state.content;
  
    return (
      <div className="App">
        <header className="App-header">
          <MainDescription 
            header = { content.mainHeadline }
            description = { content.mainDescription }
            logo = { Logo }
            logoAlt = { "логотип ателье по ремонту одежды 'Татьяна'" } />
        </header>
      </div>
    );
  }
}

export default App;
