import Banner from '../../components/Banner'
import FeatureCard from '../../components/FeatureCard'
import homeCards from '../../mocks/homeCards'
import { FeatureContainer } from './style'

const Home = () => {
  return (
    <>
      <Banner />
      <FeatureContainer>
        {homeCards.map(({ icon, altText, title, text }, index) => (
          <FeatureCard
            key={`feature-${index}`}
            icon={icon}
            altText={altText}
            title={title}
            text={text}
          />
        ))}
      </FeatureContainer>
    </>
  )
}

export default Home
