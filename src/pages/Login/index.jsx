import { useDispatch } from 'react-redux'
import { useState } from 'react'
import loginActions from '../../redux/features/login/actions'
import userActions from '../../redux/features/user/actions'

const Login = () => {
  const dispatch = useDispatch()

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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={handleChange} required />
      </div>

      <button type="submit" text="Sign In">
        Connect
      </button>
    </form>
  )
}

export default Login
