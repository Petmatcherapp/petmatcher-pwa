import '../styles/globals.css'
import MetaData from "../Components/MetaData"

function PetmatcherApp({ Component, pageProps }) {
  return (
    <>
    <MetaData />
    <Component {...pageProps} />
    </>
  )
}

export default PetmatcherApp
