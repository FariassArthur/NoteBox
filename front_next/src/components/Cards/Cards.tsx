import styled from 'styled-components'

//components
import Card from '../Card/Card'

const CardsContainner = styled.main`
  z-index: 2;
  margin-top: -2.1rem;

  max-width: 60%;
`

const Cards = () => {
  return (
    <CardsContainner>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </CardsContainner>
  )
}

export default Cards