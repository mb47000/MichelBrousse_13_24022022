import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  border-top: 0.125rem solid ${colors.neutral300};
  p {
    margin: 0;
  }
`
