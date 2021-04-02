import Image from "next/image"
import styles from "../../styles/components/icons/CatSmile.module.css"

export default function CatSmile() {
    return (
        <span className={`${styles.catSmile}`}>
            <Image 
                src="/reactions/pm-happy-reaction.svg"
                width={40}
                height={40}
            />
        </span>
    )
}