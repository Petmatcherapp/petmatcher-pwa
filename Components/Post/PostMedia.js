import {useRef, useState, useEffect} from "react"
import Play from "../Images/Svgs/Icons/Play"
import Pause from "../Images/Svgs/Icons/Pause"
import styles from "./PostMedia.module.css"

export default function PostMedia({ postData, visibility }) {
    const videoPlayer = useRef(null)
    const [playing, setPlaying] = useState(false)

    const handleLoad = () => {
        // This is needed because of autoPLay, and 
        // autoPlay is needed to show the poster on
        // IOS (or else its just a white screen)
        // This is a temp solution: see Jira ticket
        // #--- for the better solution
        videoPlayer.current.pause()
    }

    const handlePlay = () => {
        if (playing){
            setPlaying(false)
            videoPlayer.current.pause()
        } else {
            setPlaying(true)
            videoPlayer.current.play()
        }
    }

    return (
        <>
            {
            postData.srcType === "video" &&
            <>
            <div className={`${visibility} display-flex-column align-end justify-end absolute width-100 height-100`}>
                <div onClick={handlePlay} className={`${!playing ? "display-block" : "display-none"} ${styles.controls} absolute padding-10`}>
                    <Play height={40} />
                </div>
                <div onClick={handlePlay} className={`${playing ? "display-block" : "display-none"} ${styles.controls} absolute padding-10`}>
                    <Pause height={40} />
                </div>
            </div>
            <video onLoad={() => handleLoad()} ref={videoPlayer} autoPlay loop playsInline preload="metadata" disablePictureInPicture className="border-radius-10 width-100" src={postData.src} alt={postData.description}></video>
            </>
            }
            {
            postData.srcType === "image" &&
            <img className="border-radius-10 width-100" src={postData.src} alt={postData.description}></img>
            }
        </>
    )
}