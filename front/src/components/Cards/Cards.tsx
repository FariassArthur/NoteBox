import styles from './Cards.module.scss'

//components
import Card from '../Card/Card'

const Cards = () => {
  return (
    <section id={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </section>
  )
}

export default Cards