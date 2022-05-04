import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem>
        <MenuLink>
          Home
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          About
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          Services
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          Pages
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>
          Contact
        </MenuLink>
      </MenuItem>
    </MenuContainer>
  )
}

const MenuContainer = styled.ul`
  display: flex;
`

const MenuItem = styled.li`
  margin-right: ${rem(22)};
  &:last-child {
    margin-right: 0;
  }
`

const MenuLink = styled.a``

export default Menu