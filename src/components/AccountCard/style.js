import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const AccountCardContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 2rem auto 0 auto;
  padding: 1.5rem;
  text-align: left;
  background: white;
  h3 {
    color: ${colors.neutral900};
    margin: 0 0 0.125rem 0;
    font-size: 1rem;
    font-weight: 400;
  }
  p {
    margin: 0;
    line-height: initial;
  }

  @media (max-width: 720px) {
    flex-wrap: wrap;
    & > div,
    div > button {
      width: 100%;
    }
  }
`

export const Amount = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
`
