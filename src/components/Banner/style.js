import styled from 'styled-components'
import bannerBackground from '../../assets/bank-tree.jpeg'

export const BannerContainer = styled.div`
  background-image: url(${bannerBackground});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`

export const BannerCard = styled.section`
  position: relative;
  top: 2rem;
  width: 264px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;

  h3 {
    font-weight: bold;
    font-size: 1rem;
    margin: 0;

    @media (min-width: 920px) {
      font-size: 1.5rem;
    }
  }

  p {
    margin-bottom: 0;
    font-size: 0.9rem;

    @media (min-width: 920px) {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 364px;
    margin: 2rem;
  }
`
