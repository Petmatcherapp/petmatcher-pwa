import styles from "../../styles/components/misc/Loading.module.css"

export default function Loading() {
    return (
        <span>
            <div className={`${styles.petmatcherLoading}`}>
                <div className={`${styles.spinner1}`}></div>
                <span className="gradient-1"></span>
                <div className={`${styles.spinner2}`}></div>
            </div>
        </span>
    )
}