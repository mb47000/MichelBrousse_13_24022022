import { StyledButton } from './style'

const Button = ({
  type,
  text,
  fullWidth = false,
  center = false,
  fontSize = '1.2rem',
  padding = '0.5rem 1.5rem',
  handleClick,
}) => {
  return (
    <StyledButton
      type={type}
      fullWidth={fullWidth}
      center={center}
      padding={padding}
      fontSize={fontSize}
      onClick={handleClick}
    >
      {text}
    </StyledButton>
  )
}

export default Button
