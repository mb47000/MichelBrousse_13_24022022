import { Fragment } from 'react'
import GlobalStyle from './utils/styles/GlobalStyle'

import { useDispatch, useSelector } from 'react-redux'
import loginActions from './redux/features/login/actions'
import userActions from './redux/features/user/actions'
import { selectLogin, selectUser } from './redux/selectors'

function App() {
  const dispatch = useDispatch()
  const login = useSelector(selectLogin)
  const user = useSelector(selectUser)

  return (
    <Fragment>
      <GlobalStyle />
      <div>Hello Projet 13</div>
      <div>Login: {login?.status}</div>
      <div>UserFirstName: {JSON.stringify(user?.profile?.firstName)}</div>
      <div>UserLastName: {JSON.stringify(user?.profile?.lastName)}</div>
      <button
        onClick={async () => {
          await dispatch(
            loginActions.fetchToken('tony@stark.com', 'password123')
          )
          dispatch(userActions.fetchProfile())
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(userActions.updateProfile('Michel', 'Brousse'))
        }}
      >
        Update Michel Brousse
      </button>
      <button
        onClick={() => {
          dispatch(userActions.updateProfile('Duncan', 'Mcleod'))
        }}
      >
        Update Duncan
      </button>

      <button
        onClick={() => {
          dispatch(loginActions.logout())
          dispatch(userActions.logout())
        }}
      >
        Logout
      </button>
    </Fragment>
  )
}

export default App
