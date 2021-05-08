import { useState, useEffect } from "react"
import CatLove from "../Images/Misc/CatLove"
import CatLaugh from "../Images/Misc/CatLaugh"
import Comment from "../Images/Misc/Comment"
import AwardBackground from "../Images/Svgs/Misc/AwardBackground"
import clickSound from "../../audio/buttonClick2.mp3"
import styles from "../../styles/components/post/postAction.module.css"

export default function PostActions({ postData }) {
    const [sound, setSound] = useState(null)
    const [love, setLove] = useState(`${styles.reactionLoveHover} ${styles.translateLoveStart} cursor-pointer`)
    const [laugh, setLaugh] = useState(`${styles.reactionLaughHover} ${styles.translateLaughStart} cursor-pointer`)
    const [awardBackgroundStyles, setAwardBackgroundStyles] = useState(`${styles.awardBackgroundStylesHidden}`)
    const [reactionContainer, setReactionContainer] = useState("height-100")
    const [afterReaction, setAfterReaction] = useState("opacity-0")
    
    const [disableLove, setDisableLove] = useState(false)
    const [disableLaugh, setDisableLaugh] = useState(false)

    useEffect(() => {
        // set sound on client
        setSound(new Audio(clickSound))
    }, [])

    const sendReaction = (type) => {
        console.log(`This is a ${type} click`)
        setTimeout(() => {
            setAwardBackgroundStyles(`${styles.awardBackgroundStylesShow}`)
        }, 300)
        setTimeout(() => {
            setReactionContainer("height-50")
            setAfterReaction("opacity-1")
        },1300)
    }

    const handleLoveClick = (e) => {
        e.stopPropagation();
        sound.play()
        setLove(`${styles.translateLoveEnd}`)
        setLaugh("opacity-0")
        setDisableLaugh(true)
        sendReaction("love")
    }

    const handleLaughClick = (e) => {
        e.stopPropagation()
        sound.play()
        setLaugh(`${styles.translateLaughEnd}`)
        setLove("opacity-0")
        setDisableLove(true)
        sendReaction("laugh")
    }

    return (
        <div className="display-flex-column justify-between height-100 width-100 padding-5 padding-top-bottom-10">
            <div className={`${styles.reactionContainerStyles} ${reactionContainer} display-flex-row align-center justify-around text-shadow-black width-100 relative`}>
                <div className={`${awardBackgroundStyles}`}>
                    <AwardBackground height={120} />
                </div>
                <button disabled={disableLove} className={`${styles.catLoveContainer} ${love} absolute padding-0`} onClick={handleLoveClick}>
                    <CatLove width={74} height={64} />
                </button>
                <button disabled={disableLaugh} className={`${styles.catLaughContainer} ${laugh} absolute padding-0`} onClick={handleLaughClick}>
                    <CatLaugh width={74} height={64} />
                </button>
            </div>
            <div className={`${styles.afterReactionContainer} ${afterReaction} padding-left-right-5 width-100 display-flex-row align-start absolute`}>
                <span className="margin-right-small">
                    <Comment width={25} />
                </span>
                <p className="gradient-text gradient-3 text-shadow-white-reverse weight-700">Send {postData.animal.name} kind words</p>
            </div>
        </div>
    )
}