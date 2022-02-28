import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const LoginContainer = styled.section`
  background-color: ${colors.secondary900};
  min-height: 83.7vh;
  padding: 3rem;
`

export const Form = styled.form`
  width: 20rem;
  margin: 0 auto;
  padding: 2rem;
  background: white;

  & > div {
    display: flex;
    flex-direction: column;
    margin: 0 0 1.5rem 0;
    text-align: left;
    label {
      margin: 0 0 0.25rem 0;
      font-size: 1.1rem;
      font-weight: 700;
    }
    input {
      padding: 0.5rem;
      border: 1px solid ${colors.neutral900};
      border-radius: 0.25rem;
      font-size: 1.2rem;
    }
  }

  & > span {
    display: flex;
    align-items: center;
    label {
      margin: 0 0 0 0.5rem;
    }
  }

  i {
    color: ${colors.secondary900};
    font-size: inherit;
  }

  button {
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    border-style: none;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 415px) {
    width: 15rem;
  }
`

export const ErrorMsg = styled.div`
  padding-top: 10px;
  color: red;
`
