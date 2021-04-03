import Image from "next/image"
import catSmile from "../../public/reactions/smile-cat.png"
import styles from "../../styles/components/icons/CatSmile.module.css"

export default function CatSmile() {
    return (
        <span className={`${styles.catSmile}`}>
            <Image 
                src={catSmile}
                width={40}
                height={35}
                alt="Smiling cat"
            />
        </span>
    )
}