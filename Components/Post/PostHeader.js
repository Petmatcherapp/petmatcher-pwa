import AnimalTag from "../AnimalTag/AnimalTag"
import AwardBackground from "../Images/Svgs/Misc/AwardBackground"
import Treat from "../Images/Svgs/Treats/Treat"
import styles from "../../styles/components/post/postHeader.module.css"

export default function PostHeader({ animal }) {
    return (
        <div className="display-flex-row justify-between align-center justify-center">
            <AnimalTag 
                name={animal.name}
                type={animal.type} 
                avatar={animal.avatar}
                gender={animal.gender}
                alias={animal.alias}
            />
            <div className={`display-flex-column align-center justify-center ${styles.treatContainer} cursor-pointer`}>
                <span className={`${styles.treatItem}`}>
                    <AwardBackground height={40} />
                </span>
                <span id={`${styles.treat}`} className={`${styles.treatItem}`}>
                    <Treat height={32} />
                </span>
            </div>
        </div>
    )
}