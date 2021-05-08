import { useState, useEffect } from "react"
import CatLove from "../Images/Misc/CatLove"
import CatLaugh from "../Images/Misc/CatLaugh"
import Comment from "../Images/Misc/Comment"
import AwardBackground from "../Images/Svgs/Misc/AwardBackground"
import clickSound from "../../audio/buttonClick2.mp3"
import AnimalTag from "../AnimalTag/AnimalTag"
import VerticleLineBreak from "../Misc/VerticleLineBreak"
import Button from "../Buttons/Button"
import Action from "../Buttons/Action"
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
                    <AwardBackground height={100} />
                </div>
                <button disabled={disableLove} className={`${styles.catLoveContainer} ${love} absolute padding-0`} onClick={handleLoveClick}>
                    <CatLove width={70} height={60} />
                </button>
                <button disabled={disableLaugh} className={`${styles.catLaughContainer} ${laugh} absolute padding-0`} onClick={handleLaughClick}>
                    <CatLaugh width={70} height={60} />
                </button>
            </div>
            <div className={`${styles.afterReactionContainer} ${afterReaction} padding-left-right-5 width-100 absolute`}>
                <div className="display-flex-row bottom-margin-medium">
                    <span className="margin-right-small">
                        <Comment width={25} />
                    </span>
                    <Action text={`Send ${postData.animal.name} kind words`} randomGradient={true} />
                </div>
                <div className="display-flex-row bottom-margin-medium align-end">
                    <div>
                        <AnimalTag
                            avatar={postData.animal.avatar}
                            name={postData.animal.name}
                            alias={postData.animal.alias}
                            type={postData.animal.type}
                            gender={postData.animal.gender}
                        />
                    </div>
                    <VerticleLineBreak height="2em" />
                    <Button buttonText="follow" gradientNum={2} />
                </div>
            </div>
        </div>
    )
}