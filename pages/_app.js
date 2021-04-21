import { useEffect } from "react"
import loadAudioContext from "../audio/AudioContext"
import MetaData from "../Components/Misc/MetaData"
import DesktopNav from "../Components/Nav/DesktopNav"
import MobileNav from "../Components/Nav/MobileNav"
import "../styles/globals.css"

function PetmatcherApp({ Component, pageProps }) {

  useEffect(() => {
    loadAudioContext()
  }, [])

  return (
    <>
    <MetaData />
    <DesktopNav {...pageProps} />
    <MobileNav {...pageProps} />
    <Component {...pageProps} />
    </>
  )
}

export default PetmatcherApp
