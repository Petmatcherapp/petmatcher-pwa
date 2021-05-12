import { useEffect, useState } from "react"
import loadAudioContext from "../audio/AudioContext"
import MetaData from "../Components/Misc/MetaData"
import DesktopNav from "../Components/Nav/DesktopNav"
import MobileNav from "../Components/Nav/MobileNav"
import "../styles/globals.css"

function PetmatcherApp({ Component, pageProps }) {
  const [OptionComponent, setOptionComponent] = useState(null)

  const handleOptionRender = (Component) => {
    setOptionComponent(Component)
  }

  useEffect(() => {
    loadAudioContext()
  }, [])

  return (
    <>
    <MetaData />
    <DesktopNav {...pageProps} />
    <MobileNav OptionComponent={OptionComponent} {...pageProps} />
    <Component handleOptionRender={handleOptionRender} {...pageProps} />
    </>
  )
}

export default PetmatcherApp
