import {useRef} from "react"
import Play from "../Images/Svgs/Icons/Play"
import Pause from "../Images/Svgs/Icons/Pause"
import styles from "./PostMedia.module.css"

export default function PostMedia({ postData }) {
    console.log(postData)
    const videoPlayer = useRef()

    // const handlePlay = () => {
    //     videoPlayer.current.play()
    // }

    return (
        <>
            {
            postData.srcType === "video" &&
            <>
            <div className="display-flex-column align-end justify-end absolute width-100 height-100">
                <div className="absolute padding-5 padding-left-right-10">
                    <Play height={40} />
                </div>
                <div className="absolute padding-5 padding-left-right-10">
                    <Pause height={40} />
                </div>
            </div>
            <video ref={videoPlayer} className="border-radius-10 width-100" src={postData.src} alt={postData.description}></video>
            </>
            }
            {
            postData.srcType === "image" &&
            <img className="border-radius-10 width-100" src={postData.src} alt={postData.description}></img>
            }
        </>
    )
}