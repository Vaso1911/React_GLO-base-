import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export class App extends React.Component {

  render() {
    
    return (
      <div>
        <Header />
        <Main />
        <Features />
        <Contact />
        <Footer />
      </div>

    )
  }
}