import { useEffect, useState } from "react"
import {loadAudioContext, AudioContext, OptionContext} from "../lib/context"
import MetaData from "../Components/Misc/MetaData"
import DesktopNav from "../Components/Nav/DesktopNav"
import MobileNav from "../Components/Nav/MobileNav"
import clickSoundButton from "../audio/buttonClick1.mp3"
import clickSoundConfirm from "../audio/buttonClick2.mp3"
import clickSoundWarning from "../audio/buttonClick3.mp3"
import MobileNavigation from "../Components/Nav/OptionMenus/MobileNavigation"
import "../globals.css"

function PetmatcherApp({ Component, pageProps }) {
  const [option, setOption] = useState({
    OptionComponent: <MobileNavigation activeRoute={pageProps.activeRoute} />,
    optionData: null,
    optionStatus: "hideOption"
  })
  const [playAudio] = useState({
    buttonNormal: () => new Audio(clickSoundButton).play(),
    buttonConfirm: () => new Audio(clickSoundConfirm).play(),
    buttonWarning: () => new Audio(clickSoundWarning).play(),
  })

  const handleOptionChange = (option) => {
    setOption(option)
  }

  useEffect(() => {
    loadAudioContext()
  }, [])

  return (
    <AudioContext.Provider value={{playAudio}}>
      <OptionContext.Provider value={{option, handleOptionChange}}>
        <MetaData />
        <DesktopNav {...pageProps} />
        <MobileNav {...pageProps} />
        <Component {...pageProps} />
      </OptionContext.Provider>
    </AudioContext.Provider>
  )
}

export default PetmatcherApp
