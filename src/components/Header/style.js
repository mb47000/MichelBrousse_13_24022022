import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  margin: 0;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 5px 20px;
`

export const NavList = styled.ul`
  display: flex;
  li {
    margin: 0 0.5rem;
  }
  li i {
    margin: 0 0.5rem 0 0;
  }
`

export const StyledLink = styled(Link)`
  color: ${colors.neutral700};
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const LogoContainer = styled.div`
  width: 12.5rem;
  img {
    width: 100%;
  }
`
