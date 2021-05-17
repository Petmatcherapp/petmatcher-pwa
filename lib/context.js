import {createContext} from "react"

// Adding these two lines are necessary to decrease the sound delay on safari and safari ios
// Not exactly sure why but hey... it helps ¯\_(ツ)_/¯
export function loadAudioContext() {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    new AudioContext()
}

export const AudioContext = createContext({
    buttonNormal: null,
    buttonConfirm: null,
    buttonWarning: null,
})

export const OptionContext = createContext({optionComponent: null, optionData: null, optionStatus: null})

export const ThemeContext = createContext({theme: null})