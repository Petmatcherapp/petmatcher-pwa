import Image from "next/image"
import catSmile from "../../public/reactions/pm-happy-reaction.svg"
import styles from "../../styles/components/icons/CatSmile.module.css"

export default function CatSmile() {
    return (
        <span className={`${styles.catSmile}`}>
            <Image 
                src={catSmile}
                width={40}
                height={40}
                alt="Smiling cat"
            />
        </span>
    )
}