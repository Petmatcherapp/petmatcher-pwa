import { useState } from "react"
import PostHeader from "./PostHeader"
import PostActions from "./PostActions"
import styles from "../../styles/components/post/post.module.css"

export default function Post({ postData }) {
    const [actionsVisibility, setActionsVisibility] = useState("display-none opacity-0")
    const [overlayVisibility, setOverlayVisibility] = useState("display-flex-column opacity-100")

    const handlePostClick = (clickType) => {
        if (clickType === "overlay") {
            setTimeout(() => {
                setActionsVisibility("display-flex-column opacity-100")
                setOverlayVisibility("display-none opacity-0")
            }, 75)
            setActionsVisibility("display-flex-column opacity-0")
            setOverlayVisibility("display-flex-column opacity-0")
        } else {
            setTimeout(() => {
                setActionsVisibility("display-none opacity-0")
                setOverlayVisibility("display-flex-column opacity-100")
            }, 75)
            setActionsVisibility("display-flex-column opacity-0")
            setOverlayVisibility("display-flex-column opacity-0")
        }
    }

    return (
        <div className={`${styles.postContainer} border-radius-10 display-flex-column normal-shadow`}>
            {postData.srcType === "video" &&
            <video controls className={`${styles.video} border-radius-10 width-100`} src={postData.src} alt={postData.description}></video>}
            {postData.srcType === "image" &&
            <img className={`${styles.image} border-radius-10 width-100`} src={postData.src} alt={postData.description}></img>}
            <div onClick={() => handlePostClick("overlay")} className={`${styles.postUiOverlay} ${overlayVisibility} justify-between height-100 width-100 padding-5 padding-top-bottom-10`}>
                <PostHeader animal={postData.animal} />
                <small className="color-white weight-700 text-shadow-black-reverse margin-0 padding-left-right-10">{postData.description}</small>
            </div>
            <div onClick={() => handlePostClick("actions")} className={`${styles.postActionsContainer} ${actionsVisibility} height-100 width-100 border-radius-10`}>
                <PostActions />
            </div>
        </div>
    )
}