import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { selectUser } from '../../selectors'
import { selectLogin } from '../../selectors'
import { userModel } from '../../../utils/models/'

const initialState = {
  status: 'void',
  profile: null,
  error: null,
  message: null,
}

export function fetchProfile() {
  // return a thunk
  return async (dispatch, getState) => {
    const status = selectUser(getState()).status
    const token = selectLogin(getState()).token

    if (status === 'pending' || status === 'updating' || !token) {
      return
    }

    dispatch(actions.fetching())

    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/profile',
        null,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      const data = response.data
      dispatch(actions.resolved(data))
    } catch (error) {
      dispatch(actions.rejected(error))
    }
  }
}

export function updateProfile(firstName, lastName) {
  // return a thunk
  return async (dispatch, getState) => {
    const status = selectUser(getState()).status
    const profile = selectUser(getState()).profile
    const token = selectLogin(getState()).token

    if (
      status === 'pending' ||
      status === 'updating' ||
      !token ||
      (profile.firstName === firstName && profile.lastName === lastName)
    ) {
      return
    }

    dispatch(actions.fetching())

    try {
      const response = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        {
          firstName,
          lastName,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      const data = response.data
      dispatch(actions.resolved(data))
    } catch (error) {
      dispatch(actions.rejected(error.message))
    }
  }
}

const { actions, reducer } = createSlice({
  name: 'user',
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
        draft.message = null
        draft.status = 'updating'
        return
      }
    },
    resolved: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.profile = userModel(action.payload.body)
        draft.message = action.payload.message
        draft.status = 'resolved'
        return
      }
      return
    },
    rejected: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.error = action.payload
        draft.profile = null
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
