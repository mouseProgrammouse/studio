import React, { Component } from 'react';
import './App.css';
// import components
import MainDescription from './components/MainDescription';
import SectionAbout from './components/SectionAbout';
import ServicesSection from './components/ServicesSection';
import HowSection from './components/HowSection';
// import 

// import imgs
import Logo from './imgs/main-logo.svg';
import AboutImg from './imgs/aboutImg.png';
import IndLogo from './imgs/individual.svg';
import OptLogo from './imgs/opt.svg';
import RepairLogo from './imgs/repair.svg';
import HowImg from './imgs/howImg.png';
// import data
import * as data from './dict.json';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      content: data.content["RU"], // TODO: get lang from cookies;
      servicesIcons: [
        { 
          img: IndLogo,
          imgAlt: "Пошив и вязка индивидуальных заказов."
        },
        { 
          img: OptLogo,
          imgAlt: "Вязка оптовых заказов."
        },
        { 
          img: RepairLogo,
          imgAlt: "Ремонт одежды."
        }
      ],
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
    const { content, servicesIcons } = this.state;
  
    return (
      <div className="App">
        <header className="App-header">
          <MainDescription 
            header = { content.mainHeadline }
            description = { content.mainDescription }
            logo = { Logo }
            logoAlt = { "логотип ателье по ремонту одежды 'Татьяна'" }
          />
        </header>
        <section className="main-content">
          <SectionAbout
            sectionId = {"#about"}
            header = { content.headlineAbout }
            description = { content.descriptionAbout }
            img = { AboutImg }
            imgAlt = { "Наша основная специализация – трикотаж, на фото стопка наших шерстяных свитеров." }
          />
          <ServicesSection 
            sectionId = {"#services"}
            header = { content.headlineServices }
            services = { content.services }
            servicesIcons = { servicesIcons }
          />
          <HowSection
            sectionId = {"#how"}
            header = { content.headlineHow }
            steps = { content.stepsHow }
            img = { HowImg }
            imgAlt = { "Изготовление одежды на заказ." }
          />
        </section>
      </div>
    );
  }
}

export default App;
