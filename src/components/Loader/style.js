import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  padding: 10px;
  border: 6px solid grey;
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

export const LoaderWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
