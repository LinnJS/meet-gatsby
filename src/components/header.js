import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Icon from '../images/gatsby-icon.png'

const HeaderWrapper = styled.div`
  background: #f3f1f6;
`

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0 20px;
  padding: 1rem;

  img {
    height: 100px;
    margin: 10px 50px;
  }

  h1 {
    margin: 0;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img src={Icon} alt="Gatsby Icon" />
      </Link>
      <h1>
        <Link to="/" style={{ textDecoration: 'none' }}>
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
