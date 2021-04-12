import Link from "next/link"
import styles from "../../styles/components/pageSpecific/CreateNewDiv.module.css"

export default function CreateNewDiv({ icon, type, bonusDescription, description, link, gradientNum}) {
    return (
        <div className={`${styles.outerCreateNewDiv} gradient-${gradientNum} border-radius-10 bottom-margin-large active-shadow`}>
            <Link href={link}>
                <div className={`${styles.innerCreateNewDiv} display-flex-row border-radius-10`}>
                    <div className={`${styles.typeContainer} display-flex-column align-center justify-center`}>
                        <div className={`${styles.iconContainer} bottom-margin-small`}>
                            {icon}
                        </div>
                        <small>{type}</small>
                    </div>
                    <div className="display-flex-column justify-center">
                        <p>{description}</p>
                        <small className={`${styles.bonusDescription}`}>{bonusDescription}</small>
                    </div>
                </div>
            </Link>
        </div>
    )
}