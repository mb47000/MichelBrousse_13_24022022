import { ProfileContainer, Form, FormButton, ButtonContainer } from './style'
import { useState } from 'react'
import bankAccountInfo from '../../mocks/bankAccountInfo'
import { Navigate } from 'react-router'
import userActions from '../../redux/features/user/actions'
import { useDispatch, useSelector } from 'react-redux'
import { selectLogin, selectUser } from '../../redux/selectors'
import AccountCard from '../../components/AccountCard'
import Button from '../../components/Button'
import Loader from '../../components/Loader'

const Profile = () => {
  const dispatch = useDispatch()
  const login = useSelector(selectLogin)
  const user = useSelector(selectUser)
  const [isEditing, setIsEditing] = useState(false)

  const [currentUser, setCurrentUser] = useState({
    firstName: user.profile?.firstName,
    lastName: user.profile?.lastName,
  })

  if (!login.token || !user.profile) return <Navigate to="/login" />

  const handleChange = (event) => {
    const inputName = event.target.id

    setCurrentUser({
      ...currentUser,
      [inputName]: event.target.value,
    })
  }

  const updateProfile = async (event) => {
    event.preventDefault()
    await dispatch(
      userActions.updateProfile(currentUser.firstName, currentUser.lastName)
    )

    if (user.status === 'resolved') setIsEditing(false)
  }

  return (
    <ProfileContainer>
      <h2>Welcome back</h2>
      {isEditing ? (
        <Form>
          <input
            type="text"
            id="firstName"
            value={currentUser.firstName}
            placeholder="your first name"
            onChange={handleChange}
          />
          <input
            type="text"
            id="lastName"
            value={currentUser.lastName}
            placeholder="your last name"
            onChange={handleChange}
          />
          <ButtonContainer>
            <FormButton
              onClick={(event) => {
                updateProfile(event)
              }}
            >
              Save
            </FormButton>
            {(login.status === 'rejected' || user.status === 'rejected') && (
              <div>Erreur lors de la tentative de mise à jour du profil</div>
            )}
            {(user.status === 'updating' || user.status === 'pending') && (
              <Loader />
            )}
            <FormButton
              color="red"
              onClick={(event) => {
                event.preventDefault()
                setIsEditing(false)
                setCurrentUser({
                  firstName: user.profile.firstName,
                  lastName: user.profile.lastName,
                })
              }}
            >
              Cancel
            </FormButton>
          </ButtonContainer>
        </Form>
      ) : (
        <>
          <h3>
            {user.profile.firstName} {user.profile.lastName} !
          </h3>
          <Button
            handleClick={() => {
              setIsEditing(true)
            }}
            text="Edit Name"
            center={true}
            fontSize="0.8rem"
            padding="10px"
          />
        </>
      )}

      <h2 className="sr-only">Accounts</h2>

      {bankAccountInfo.map(({ accountName, amount, balanceType }, index) => (
        <AccountCard
          key={`account-${index}`}
          accountName={accountName}
          amount={amount}
          balanceType={balanceType}
        />
      ))}
    </ProfileContainer>
  )
}

export default Profile
