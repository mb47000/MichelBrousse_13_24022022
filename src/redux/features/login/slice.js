import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { selectLogin } from '../../selectors'

const initialState = {
  status: 'void',
  token: null,
  error: null,
}

export function fetchToken(userInput) {
  // return a thunk
  return async (dispatch, getState) => {
    const status = selectLogin(getState()).status

    if (status === 'pending' || status === 'updating') {
      return
    }

    dispatch(actions.fetching())

    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        {
          email: userInput.email,
          password: userInput.password,
        }
      )

      dispatch(actions.resolved(response.data.body))
    } catch (error) {
      dispatch(actions.rejected(error))
    }
  }
}

const { actions, reducer } = createSlice({
  name: 'login',
  initialState,
  reducers: {
    fetching: (draft) => {
      if (draft.status === 'void') {
        draft.status = 'pending'
        return
      }
      if (draft.status === 'rejected') {
        draft.error = null
        draft.status = 'pending'
        return
      }
      if (draft.status === 'resolved') {
        draft.status = 'updating'
        return
      }
    },
    resolved: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.token = action.payload.token
        draft.status = 'resolved'
        return
      }
      return
    },
    rejected: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.error = action.payload
        draft.token = null
        draft.status = 'rejected'
        return
      }
      return
    },
    logout: () => initialState,
  },
})

export { actions }
export default reducer
