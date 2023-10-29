import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Header } from './components/Header';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

  body {
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
  }

  img {
    max-width:100%
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
  }
`

export class App extends React.Component {

  render() {

    return (
      <div>
        <GlobalStyle />

        <Header />
      </div>
    )

}
}