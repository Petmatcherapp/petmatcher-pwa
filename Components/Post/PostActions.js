import { useState } from "react"
import CatLove from "../Images/Misc/CatLove"
import CatLaugh from "../Images/Misc/CatLaugh"
import AwardBackground from "../Images/Svgs/Misc/AwardBackground"
import styles from "../../styles/components/post/postAction.module.css"

export default function PostActions({ postMetaData }) {
    const [love, setLove] = useState(`${styles.reactionLoveHover} ${styles.translateLoveStart} cursor-pointer ${styles.backAndForth}`)
    const [laugh, setLaugh] = useState(`${styles.reactionLaughHover} ${styles.translateLaughStart} cursor-pointer ${styles.backAndForth}`)
    const [awardBackgroundStyles, setAwardBackgroundStyles] = useState(`${styles.awardBackgroundStylesHidden}`)

    const [disableLove, setDisableLove] = useState(false)
    const [disableLaugh, setDisableLaugh] = useState(false)

    const sendReaction = (type) => {
        console.log(`This is a ${type} click`)
    }

    const handleLoveClick = (e) => {
        e.stopPropagation();
        setTimeout(() => {
            setAwardBackgroundStyles(`${styles.awardBackgroundStylesShow}`)
        }, 300)
        setLaugh("opacity-0")
        setLove(`${styles.translateLoveEnd}`)
        setDisableLaugh(true)
        sendReaction("love")
    }

    const handleLaughClick = (e) => {
        e.stopPropagation()
        setTimeout(() => {
            setAwardBackgroundStyles(`${styles.awardBackgroundStylesShow}`)
        }, 300)
        setLaugh(`${styles.translateLaughEnd}`)
        setLove("opacity-0")
        setDisableLove(true)
        sendReaction("laugh")
    }

    return (
        <div className="display-flex-column justify-between height-100 width-100 padding-5 padding-top-bottom-10">
            <div className="display-flex-row align-center justify-around text-shadow-black height-100 width-100 relative">
                <button disabled={disableLove} className={`${styles.catLoveContainer} ${love} absolute padding-0`} onClick={handleLoveClick}>
                    <CatLove width={74} height={64} />
                </button>
                <button disabled={disableLaugh} className={`${styles.catLaughContainer} ${laugh} absolute padding-0`} onClick={handleLaughClick}>
                    <CatLaugh width={74} height={64} />
                </button>
                <div className={`${awardBackgroundStyles}`}>
                    <AwardBackground height={131} />
                </div>
            </div>
            <div className="padding-left-right-10 absolute">
                <p className="text-shadow-black color-white">here</p>
            </div>
        </div>
    )
}