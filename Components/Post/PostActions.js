import { useState } from "react"
import CatLove from "../Images/Misc/CatLove"
import CatLaugh from "../Images/Misc/CatLaugh"
import styles from "../../styles/components/post/postAction.module.css"

export default function PostActions({ postMetaData }) {
    const [love, setLove] = useState(`${styles.reactionLoveHover} ${styles.translateLoveStart} cursor-pointer ${styles.backAndForth}`)
    const [laugh, setLaugh] = useState(`${styles.reactionLaughHover} ${styles.translateLaughStart} cursor-pointer ${styles.backAndForth}`)

    const [disableLove, setDisableLove] = useState(false)
    const [disableLaugh, setDisableLaugh] = useState(false)

    const sendReaction = (type) => {
        console.log(`This is a ${type} click`)
    }

    const handleLoveClick = (e) => {
        e.stopPropagation();
        setLaugh("opacity-0")
        setLove(`${styles.translateLoveEnd}`)
        setDisableLaugh(true)
        sendReaction("love")
    }

    const handleLaughClick = (e) => {
        e.stopPropagation()
        setLaugh(`${styles.translateLaughEnd}`)
        setLove("opacity-0")
        setDisableLove(true)
        sendReaction("laugh")
    }

    return (
        <div className="display-flex-column justify-between height-100 width-100 padding-5 padding-top-bottom-10">
            <div className="display-flex-row align-center justify-around text-shadow-black height-100 width-100 relative">
                <button disabled={disableLove} className={`${styles.catLoveContainer} ${love} absolute`} onClick={handleLoveClick}>
                    <CatLove width={80} height={70} />
                </button>
                <button disabled={disableLaugh} className={`${styles.catLaughContainer} ${laugh} absolute`} onClick={handleLaughClick}>
                    <CatLaugh width={80} height={70} />
                </button>
            </div>
            <div className="padding-left-right-10 absolute">
                <p className="text-shadow-black color-white">here</p>
            </div>
        </div>
    )
}