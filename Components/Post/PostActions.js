import { useState, useEffect } from "react"
import CatLove from "../Images/Misc/CatLove"
import CatLaugh from "../Images/Misc/CatLaugh"
import Comment from "../Images/Misc/Comment"
import Check from "../Images/Svgs/Icons/Check"
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
    const [buttonContainerMovable, setButtonContainerMovable] = useState(`${styles.showFollow}`)
    const [checkmark, setCheckmark] = useState("")
    
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

    const resetCheckmark = () => {
        setTimeout(() => {
            setCheckmark("")
        }, 600)
    }

    const handleFollowClick = () => {
        setTimeout(() => {
            setButtonContainerMovable(`${styles.showSub}`)
        }, 800)
        resetCheckmark()
        setCheckmark(`${styles.checkmarkScaleUp}`)
    }

    const handleSubClick = () => {
        setTimeout(() => {
            setButtonContainerMovable(`${styles.showPoke}`)
        }, 800)
        resetCheckmark()
        setCheckmark(`${styles.checkmarkScaleUp}`)
    }

    const handlePokeClick = () => {
        console.log("i run handle sub")
        setButtonContainerMovable(`${styles.showPoke}`)
    }

    return (
        <div className="display-flex-column justify-between height-100 width-100 padding-2 padding-top-bottom-10">
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
                <div className="display-flex-row bottom-margin-small">
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
                    <div className={`${styles.buttonContainer} display-flex-column relative`}>
                        <div className={`${styles.buttonContainerMovable} ${buttonContainerMovable} relative`}>
                            <div className="padding-top-bottom-10 bottom-margin-medium">
                                <div className="display-flex-row">
                                    <div className="margin-right-small">
                                        <Button buttonText="Sub" gradientNum={1} onClick={handleSubClick} />
                                    </div>
                                    <div className={`${styles.checkmark} ${checkmark}`}>
                                        <Check height={30} />
                                    </div>
                                </div>
                            </div>
                            <div className="display-flex-row">
                                <div className="margin-right-small">
                                    <Button buttonText="Follow" gradientNum={2} onClick={handleFollowClick} />
                                </div>
                                <div className={`${styles.checkmark} ${checkmark}`}>
                                    <Check height={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}