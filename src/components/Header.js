import React from 'react';
import styled from 'styled-components';
import logoImg from '../img/logo.svg'
import userImg from '../img/user.svg'

const NavBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  width: 100%;
  background-color: #299B01;
  color: #ffffff;
  z-index: 3;
`;
const Logo = styled.a`
  display: flex;
  align-items: center;
`;
const ImgLogo = styled.img`
  
`;
const H2 = styled.h2`
  font-size: 24px;
  font-weight: 400;
`;

const ImgUser = styled.img`
  
`;

const Btn = styled.button`
display: flex;
align-items: center;
flex-direction: column;
font-size: 16px;
color: inherit;
`;

export class Header extends React.Component {
  render() {
    return (
      <NavBar>
        <Logo href='#'>
          <ImgLogo src={logoImg} alt="иконка ввиде бургера стоящего за картошкой фри" />
          <H2>MRDonald’s</H2>
        </Logo>
        <Btn>
          <ImgUser src={userImg} alt="иконка ввиде бургера стоящего за картошкой фри" />
          войти
        </Btn>
      </NavBar>
    )
  }

}