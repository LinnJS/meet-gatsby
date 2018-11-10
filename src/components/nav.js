import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavWrapper = styled.nav`
  background: #f3f1f6;
  display: flex;
  flex-direction: row;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  justify-content: space-around;
  width: 100%;

  .link {
    height: 100%;
    padding: 10px 0;
    text-decoration: none;
    &:hover {
      border-bottom: 1.2px solid rebeccapurple;
    }
    link:active {
      border-bottom: 1.2px solid rebeccapurple;
    }
  }
`

const Header = () => (
  <NavWrapper>
    <Link className="link" to="/">
      Home
    </Link>
    <Link className="link" to="/about">
      About
    </Link>
    <Link className="link" to="/slides/first-slide">
      Slides
    </Link>
    <Link className="link" to="/learnMore">
      Learn More
    </Link>
  </NavWrapper>
)

export default Header
