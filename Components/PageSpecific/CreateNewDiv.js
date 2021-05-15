import {useContext} from "react"
import Link from "next/link"
import {AudioContext} from "../../lib/context"
import styles from "./CreateNewDiv.module.css"

export default function CreateNewDiv({ icon, type, description, link, gradientNum}) {
    const {playAudio} = useContext(AudioContext)

    const handleClick = (e) => {
        e.preventDefault()
        playAudio.buttonNormal();
    }

    return (
        <Link href={link}>
            <div onClick={handleClick} className={`${styles.outerCreateNewDiv} gradient-${gradientNum} border-radius-20 bottom-margin-large clickable-shadow padding-2 cursor-pointer`}>
                    <div className={`${styles.innerCreateNewDiv} display-flex-row border-radius-18`}>
                        <div className={`${styles.typeContainer} display-flex-column align-center justify-center`}>
                            <div className={`${styles.iconContainer} bottom-margin-small`}>
                                {icon}
                            </div>
                        </div>
                        <div className="display-flex-column justify-center">
                            <h2>{type}</h2>
                            <small>{description}</small>
                        </div>
                    </div>
            </div>
        </Link>
    )
}