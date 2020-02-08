import React, { Component } from 'react';
import './App.css';
// import components
import MainDescription from './components/MainDescription';
import SectionAbout from './components/SectionAbout';

//import imgs
import Logo from './imgs/main-logo.svg';
import AboutImg from './imgs/aboutImg.png';
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
            <SectionAbout
            sectionId = {"#about"}
            header = { content.headlineAbout }
            description = { content.descriptionAbout }
            img = { AboutImg }
            imgAlt = { "Наша основная специализация – трикотаж, на фото стопка наших шерстяных свитеров." }
            />
        </header>
      </div>
    );
  }
}

export default App;
