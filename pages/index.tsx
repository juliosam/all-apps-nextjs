import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Container from "../components/Container"

const Home: NextPage = () => {
  return (
    <Container>
      <div className={styles.container}>
        <Link href={"/hello/"}>hello</Link>
        <div></div>
        <Link href={"/tipCalc/"}>Tip calculator</Link>
      </div>
    </Container>
  )
}

export default Home
