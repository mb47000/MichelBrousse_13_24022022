import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/login/reducer'
import userReducer from './features/user/reducer'

const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
  },
})
export default store
