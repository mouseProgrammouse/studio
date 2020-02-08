import React, { Component } from 'react';
import './App.css';
//import components
import MainDescription from './components/MainDescription';
import * as data from './dict.json';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      content: data.content,
      lang: "RU" // TODO: get lang from cookies;
    };
  }

  changeLang = (newLang) => {
    this.setState({ lang: newLang });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <MainDescription header={this.state.content.RU.mainHeadline}/>
        </header>
      </div>
    );
  }
}

export default App;
