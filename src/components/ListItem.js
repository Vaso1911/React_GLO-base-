import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;

`
const Item = styled.li`
  position: relative;
  padding: 15px;
  width: 400px;
  height: 155px;
  font-size: 30px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  color: #ffffff;
  transition: box-shadow .3s ease-in-out;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: black;
    opacity: .5;
    transition: opacity .3s ease-in-out;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px rgba(0, 0, 0, 1);
    &::after {
      opacity: 0;
    }
  }
`

const TitleName = styled.h3`
  font-weight: 400;
`

export const ListItem = ({ itemList }) => (
  <List>
    {itemList.map(item => (
      <Item
        key={item.id}
        img={item.img}
      >
        <TitleName>{item.name}</TitleName>
        <span>{item.price.toLocaleString('ru-RU',
        {style: 'currency', currency: 'RUB'})}</span>
      </Item>
    ))}
  </List>
)