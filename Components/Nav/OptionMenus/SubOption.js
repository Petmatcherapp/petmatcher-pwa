import {useContext, useState} from "react"
import {OptionContext} from "../../../lib/context"
import AnimalTag from "../../AnimalTag/AnimalTag"
import Button from "../../Buttons/Button"
import GoldAmount from "../../Misc/GoldAmount"
import Question from "../../Images/Svgs/Icons/Question"
import Image from "next/image"

export default function SubOption() {
    const {option} = useContext(OptionContext)
    const [showQuestion, setShowQuestion] = useState(false)
    
    const handleShowQuestion = () => {
        if (showQuestion) {
            setShowQuestion(false)
        } else {
            setShowQuestion(true)
        }
    }

    return (
        <div className="display-flex-column">
            <div className={`${showQuestion ? "opacity-100 display-block" : "opacity-0 display-none"} transition-all absolute margin-right-large z-index-4`}>
                <h3 className="bottom-margin-small">What is 'Subscribing'?</h3>
                <small className="bottom-margin-small display-block">It is a way of showing love to creators, animal charities and keeping PM running.</small>
                <small>Out of your Subscription, here is how the funds are divided:</small>
                <ul>
                    <li>50% - {option.optionData.animal.name} the {option.optionData.animal.type}</li>
                    <li>40% - Petmatcher</li>
                    <li>10% - Various animal charities</li>
                </ul>
                <p onClick={handleShowQuestion} className="gradient-text gradient-5 display-inline">{"< back"}</p>
            </div>
            <div className={`${!showQuestion ? "opacity-100" : "opacity-0"} transition-all`}>
                <div className="display-flex-row align-center justify-between bottom-margin-medium">
                    <AnimalTag
                        avatar={option.optionData.animal.avatar}
                        name={option.optionData.animal.name}
                        alias={option.optionData.animal.alias}
                        type={option.optionData.animal.type}
                        gender={option.optionData.animal.gender}
                        blackText={true}
                        onClick={false}
                    />
                    <span onClick={handleShowQuestion} className="normal-drop-shadow">
                        <Question height={25} />
                    </span>
                </div>
                <p className="bottom-margin-medium">Subscribe to unlock...</p>
                <div className="display-flex-row bottom-margin-large">
                    <div className="margin-right-extra-large">
                        <h4>Emote:</h4>
                        <div className="display-flex-row">
                            <div className="text-align-center">
                                <div className="img-large">
                                    <Image 
                                        src={`${option.optionData.animal.emotes[0].src}`}
                                        layout="fill"
                                        objectFit="cover"
                                        loading="lazy"
                                    />
                                </div>
                                <small className="color-grey">{option.optionData.animal.emotes[0].name}</small>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4>Treat:</h4>
                        <div className="display-flex-row">
                            <div className="text-align-center">
                                <div className="img-large">
                                    <Image 
                                        src={`${option.optionData.animal.treats[0].src}`}
                                        layout="fill"
                                        objectFit="cover"
                                        loading="lazy"
                                    />
                                </div>
                                <small className="color-grey">{option.optionData.animal.treats[0].name}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Button buttonText={"Subscribe"} gradientNum={6} />
                </div>
            </div>
        </div>
    )
}