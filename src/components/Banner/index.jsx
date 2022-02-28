import { BannerCard, BannerContainer } from './style'

const Banner = () => {
  return (
    <BannerContainer>
      <BannerCard>
        <h2 className="sr-only">Promoted Content</h2>

        <h3>No fees.</h3>
        <h3>No minimum deposit.</h3>
        <h3>Hign interest rates.</h3>

        <p>Open a saving account with Argent Bank today!</p>
      </BannerCard>
    </BannerContainer>
  )
}

export default Banner
