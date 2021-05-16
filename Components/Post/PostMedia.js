import {useRef, useState, useEffect} from "react"
import Play from "../Images/Svgs/Icons/Play"
import Pause from "../Images/Svgs/Icons/Pause"
import VolumeOn from "../Images/Svgs/Icons/VolumeOn"
import VolumeMute from "../Images/Svgs/Icons/VolumeMute"
import Replay from "../Images/Svgs/Icons/Replay"
import Loading from "../Misc/Loading"
import styles from "./PostMedia.module.css"

export default function PostMedia({ postData, visibility, observing }) {
    const videoPlayer = useRef(null)
    const [playing, setPlaying] = useState(false)
    const [mute, setMute] = useState(false)
    const [buffering, setBuffering] = useState("display-none")
    const [videoProgress, setVideoProgress] = useState(0)

    // Do something when post is within the intersection observer
    useEffect(() => {
        if (videoPlayer.current && !observing){
            videoPlayer.current.pause()
            setPlaying(false)
        }
    }, [observing])

    useEffect(() => {
        // This is needed because of autoplay, and 
        // autoPlay is needed to show the poster on
        // IOS (or else it's just a white screen)
        // This is a temp solution: see Jira ticket
        // #--- for the better solution
        if (videoPlayer.current)
            videoPlayer.current.pause()
    }, [])

    const handlePlay = () => {
        if (playing){
            setPlaying(false)
            videoPlayer.current.pause()
        } else {
            setPlaying(true)
            videoPlayer.current.play()
        }
    }

    const handleVolume = () => {
        if (mute) {
            setMute(false)
            videoPlayer.current.muted = false
        } else {
            setMute(true)
            videoPlayer.current.muted = true
        }
    }

    const handleTimeUpdate = () => {
        setVideoProgress((100 / videoPlayer.current.duration) * videoPlayer.current.currentTime) 
    }

    const handleRestart = () => {
        videoPlayer.current.currentTime = 0
    }

    const handleWaiting = () => {
        setBuffering("display-block")
    }

    const handlePlaying = () => {
        setTimeout(() => {
            setBuffering("display-none")
        }, 2000)
    }

    return (
        <>
            {
            postData.srcType === "video" &&
            <>
            <div className={`${buffering} ${styles.buffering} ${styles.controls} padding-10 absolute`}>
                <Loading whiteSpinner={true} />
            </div>
            <div className={`${styles.postMediaContainer} ${visibility} display-flex-column align-end justify-end absolute width-100 height-100`}>
                <div onClick={handleRestart} className={`${styles.controls} padding-10`}>
                    <Replay height={40} />
                </div>
                <div onClick={handleVolume} className={`${!mute ? "display-block" : "display-none"} ${styles.controls} padding-10`}>
                    <VolumeOn height={40} />
                </div>
                <div onClick={handleVolume} className={`${mute ? "display-block" : "display-none"} ${styles.controls} padding-10`}>
                    <VolumeMute height={40} />
                </div>
                <div onClick={handlePlay} className={`${!playing ? "display-block" : "display-none"} ${styles.controls} padding-10`}>
                    <Play height={40} />
                </div>
                <div onClick={handlePlay} className={`${playing ? "display-block" : "display-none"} ${styles.controls} padding-10`}>
                    <Pause height={40} />
                </div>
                <div style={{width: `${videoProgress}%`}} className={`${styles.progressBar} gradient-success absolute`}></div>
            </div>
            <video ref={videoPlayer} onWaiting={handleWaiting} onPlaying={handlePlaying} onTimeUpdate={handleTimeUpdate} autoPlay loop playsInline preload="metadata" disablePictureInPicture className="border-radius-10 width-100" src={postData.src} alt={postData.description}></video>
            </>
            }
            {
            postData.srcType === "image" &&
            <img className="border-radius-10 width-100" src={postData.src} alt={postData.description}></img>
            }
        </>
    )
}