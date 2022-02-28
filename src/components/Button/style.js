import styled from 'styled-components'
import colors from '../../utils/styles/colors'

export const StyledButton = styled.button`
  display: block;
  margin: 0;
  padding: ${(props) => props.padding};
  color: white;
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  background: ${colors.primary500};
  border-color: ${colors.primary500};
  cursor: pointer;
  ${(props) =>
    props.fullWidth
      ? `
        width: 100%;`
      : ``}
  ${(props) =>
    props.center
      ? `
        margin: 0 auto;`
      : ``}

${(props) =>
    props.fontSize
      ? `
        margin: 0 auto;`
      : ``}
`
