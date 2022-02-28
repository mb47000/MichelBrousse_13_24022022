import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const StyledFeatureCard = styled.article`
  flex: 1;
  padding: 2.5rem;
  img {
    width: 10rem;
    padding: 1rem;
    border: 0.5rem solid ${colors.primary500};
    border-radius: 50%;
  }
  h3 {
    margin: 1.25rem 0 0.5rem 0;
    color: ${colors.primary700};
    font-size: 1.25rem;
    font-weight: 700;
  }
`
