import Navigation from '../components/Navigation'
import Head from 'next/head'

const Container = (props) => (
  <div>
    <Head>
      <title>Next.js Project</title>
      <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css'/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation/>
    <div>
        {props.children}
    </div>
  </div>
)

export default Container