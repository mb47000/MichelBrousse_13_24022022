import { StyledFeatureCard } from './style'

const FeatureCard = ({ icon, altText, title, text }) => {
  return (
    <StyledFeatureCard>
      <img src={icon} alt={altText} />
      <h3>{title}</h3>
      <p>{text}</p>
    </StyledFeatureCard>
  )
}

export default FeatureCard
