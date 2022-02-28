import {
  HeaderContainer,
  Nav,
  LogoContainer,
  StyledLink,
  NavList,
} from './style'
import Logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { selectLogin, selectUser } from '../../redux/selectors'
import { useSelector, useDispatch } from 'react-redux'
import loginActions from '../../redux/features/login/actions'
import userActions from '../../redux/features/user/actions'

const Header = () => {
  const dispatch = useDispatch()
  const login = useSelector(selectLogin).token
  const user = useSelector(selectUser).profile

  const logout = () => {
    dispatch(loginActions.logout())
    dispatch(userActions.logout())
  }

  return (
    <HeaderContainer>
      <Nav>
        <Link to="/">
          <LogoContainer>
            <img src={Logo} alt="Argent Bank Logo" />
          </LogoContainer>
        </Link>
        <NavList>
          <li>
            <i className="fa fa-user-circle"></i>
            {user ? (
              <StyledLink to="/profile">{user.firstName}</StyledLink>
            ) : (
              <StyledLink to="/login">Sign In</StyledLink>
            )}
          </li>
          {login && (
            <li>
              <i className="fas fa-sign-out-alt"></i>
              <StyledLink to="/" onClick={logout}>
                Sign Out
              </StyledLink>
            </li>
          )}
        </NavList>
      </Nav>
    </HeaderContainer>
  )
}
export default Header
