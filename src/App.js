import React from 'react';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { GlobalStyle } from './components/GlobalStyle';


export class App extends React.Component {

  render() {

    return (
      <div>
        <GlobalStyle />
        <Header />
        <Menu />
      </div>
    )

}
}