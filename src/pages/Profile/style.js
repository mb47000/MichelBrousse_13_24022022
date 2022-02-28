import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const ProfileContainer = styled.section`
  background-color: ${colors.secondary900};
  min-height: 83.7vh;
  padding: 2rem 3rem;
  background: ${colors.secondary900};
  h2,
  h3 {
    margin: 0;
    color: white;
    font-size: 2rem;
    font-weight: 700;
  }
  h3 {
    margin: 0 0 1.5rem 0;
  }
  article button {
    margin: 1.5rem auto;
  }
`
export const Form = styled.form`
  margin: 1.5rem 0;
  input {
    width: 16rem;
    margin: 0 0.5rem;
    margin-bottom: 5px;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0.25rem;
    font-size: 1.5rem;
    font-weight: 700;
    &::placeholder {
      color: ${colors.neutral400};
    }
  }
`
export const ButtonContainer = styled.div`
  margin-top: 15px;
`

export const FormButton = styled.button`
  margin: 0 0.5rem;
  padding: 10px;
  width: 90px;
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  background: ${(props) => (props.color ? 'red' : '#00bc77')};
  border-color: ${(props) => (props.color ? 'red' : '#00bc77')};
  cursor: pointer;
`
