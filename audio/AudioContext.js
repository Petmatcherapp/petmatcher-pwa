// Adding these two lines are necessary to decrease the sound delay on safari and safari ios
// Not exactly sure why but hey... it helps ¯\_(ツ)_/¯
export default function loadAudioContext() {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    const audioCtx = new AudioContext()
    console.log("AudioContextLoaded: ", audioCtx)
}