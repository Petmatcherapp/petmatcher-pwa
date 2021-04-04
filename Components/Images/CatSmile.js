import Image from "next/image"
import styles from "../../styles/components/images/CatSmile.module.css"

export default function CatSmile() {
    return (
        <span className={`${styles.catSmile}`}>
            <Image 
                src="/reactions/pm-happy-reaction.png"
                width={30}
                height={25}
                alt="Smiling cat"
            />
        </span>
    )
}