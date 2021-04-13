import Link from "next/link"
import styles from "../../styles/components/pageSpecific/CreateNewDiv.module.css"

export default function CreateNewDiv({ icon, type, description, link, gradientNum}) {
    return (
        <Link href={link}>
            <div className={`${styles.outerCreateNewDiv} gradient-${gradientNum} border-radius-10 bottom-margin-large clickable-shadow padding-2`}>
                    <div className={`${styles.innerCreateNewDiv} display-flex-row border-radius-8`}>
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