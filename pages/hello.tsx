import Container from "../components/Container"
import Head from "next/head"

function HelloPage(){
  return(
    <Container>
    <Head>
        <title>Hello</title>
    </Head>
      <h1>Honk</h1>
    </Container>
  )
}

export default HelloPage