import {createContext, useContext} from "react"

// Adding these two lines are necessary to decrease the sound delay on safari and safari ios
// Not exactly sure why but hey... it helps ¯\_(ツ)_/¯
export function loadAudioContext() {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    const audioCtx = new AudioContext()
    console.log("AudioContextLoaded: ", audioCtx)
}

export const AudioContext = createContext({
    buttonNormal: null,
    buttonConfirm: null,
    buttonWarning: null,
})

export const OptionContext = createContext({optionComponent: null, optionData: null})

export const ThemeContext = createContext({theme: null})