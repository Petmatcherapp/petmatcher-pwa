import { useEffect, useState } from "react"
import Image from "next/image"
import MaleSymbol from "../Images/Svgs/Icons/MaleSymbol"
import FemaleSymbol from "../Images/Svgs/Icons/FemaleSymbol"
import styles from "../../styles/components/animalTag/animalTag.module.css"
import { randomNum } from "../../functions/appLogic"

export default function AnimalTag({ avatar, name, type, alias, gender }) {
    const [gradientNum, setGradientNum] = useState(1)

    useEffect(() => {
        setGradientNum(randomNum(1, 6))
    }, [])

    return (
        <div className="display-flex-row align-center">
            <div className={`${styles.animalAvatarContainer} margin-right-small`}>
                <Image 
                    src={`${avatar}`}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                />
            </div>
            <div className="display-flex-column">
                <small className="bottom-margin-none color-white weight-700 text-shadow-black-reverse">@{alias}</small>
                <div className="display-flex-row align-center">
                    <p className={`weight-700 display-inline gradient-text gradient-${gradientNum} text-shadow-white margin-0`}>{name} the {type}</p>
                    &nbsp;
                    {gender === "female" ? <FemaleSymbol height={20} /> : <MaleSymbol height={20} />}
                </div>
            </div>
        </div>
    )

}