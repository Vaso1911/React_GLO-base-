import React from 'react'
import styled from 'styled-components'
import dbMenu from './DBMenu'
import { ListItem } from './ListItem'
import imgBanner from '../img/banner.jpg'
const MenuStyled = styled.main` 
  margin-top: 80px;
  background-color: #ccc;
`;
const Title = styled.h2` 
  margin-bottom: 30px;
`;
const Section = styled.section` 
  padding: 30px;
`;
const Banner = styled.div` 
  height: 210px;
  background-image: url(${imgBanner});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Menu = () => (
  <MenuStyled>
    <Banner />
    <Section>
      <Title>Бургеры</Title>
      <ListItem  itemList={dbMenu.burger}/>
    </Section>
    <Section>
      <Title>Закуски / напитки</Title>
      <ListItem  itemList={dbMenu.other}/>
    </Section>
  </MenuStyled>
)