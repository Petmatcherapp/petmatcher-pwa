import Image from "next/image"
import styles from "./animalTag.module.css"

export default function AnimalTag({ onClick, avatar, name, type, alias, gender }) {
    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation();
        onClick()
    }

    return (
        <div onClick={handleClick} className="display-flex-row align-center cursor-pointer">
            <div className={`${styles.animalAvatarContainer} margin-right-small`}>
                <Image 
                    src={`${avatar}`}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                />
            </div>
            <div className="display-flex-column">
                <div className="display-flex-row align-center">
                    <small className={`bottom-margin-none weight-700 text-shadow-black color-white`}>@{alias}</small>
                    &nbsp;
                    <div className={`${styles.genderBubble} ${gender === "female" ? "gradient-female" : "gradient-male"}`}></div>
                </div>
                <p className={`${styles.animalName} weight-700 display-inline text-shadow-black color-white margin-0`}>{name} the {type}</p>
            </div>
        </div>
    )

}