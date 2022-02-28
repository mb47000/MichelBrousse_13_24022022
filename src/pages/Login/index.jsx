import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import loginActions from '../../redux/features/login/actions'
import userActions from '../../redux/features/user/actions'
import { LoginContainer, Form, ErrorMsg } from './style'
import { selectLogin, selectUser } from '../../redux/selectors'
import Loader from '../../components/Loader'

const Login = () => {
  const dispatch = useDispatch()
  const login = useSelector(selectLogin)
  const user = useSelector(selectUser)

  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const inputName = event.target.id

    setUserInputs({
      ...userInputs,
      [inputName]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await dispatch(loginActions.fetchToken(userInputs))
    dispatch(userActions.fetchProfile())
  }

  if (
    login.status === 'resolved' &&
    login.token &&
    user.status === 'resolved' &&
    user.profile
  )
    return <Navigate to="/profile" />

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <i className="fa fa-user-circle"></i>

        <h2>Sign In</h2>

        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            required
          />
        </div>

        <span>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </span>

        <button type="submit" text="Sign In">
          Sign In
        </button>
        {(login.status === 'rejected' || user.status === 'rejected') && (
          <ErrorMsg>Erreur lors de la tentative de connexion</ErrorMsg>
        )}

        {(login.status === 'updating' ||
          user.status === 'updating' ||
          login.status === 'pending' ||
          user.status === 'pending') && <Loader />}
      </Form>
    </LoginContainer>
  )
}

export default Login
