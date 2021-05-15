import {useRef, useState} from "react"
import Play from "../Images/Svgs/Icons/Play"
import Pause from "../Images/Svgs/Icons/Pause"
import styles from "./PostMedia.module.css"

export default function PostMedia({ postData, visibility }) {
    const videoPlayer = useRef()
    // videoPlayer.current.disableVideoControls()
    const [playing, setPlaying] = useState(false)

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
            <video ref={videoPlayer} autoPlay disablePictureInPicture playsInline preload="metadata" loop className="border-radius-10 width-100" src={postData.src} alt={postData.description}></video>
            </>
            }
            {
            postData.srcType === "image" &&
            <img className="border-radius-10 width-100" src={postData.src} alt={postData.description}></img>
            }
        </>
    )
}