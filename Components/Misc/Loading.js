import styles from "../../styles/components/misc/Loading.module.css"

export default function Loading() {
    return (
        <span>
            <div className={`${styles.petmatcherLoading}`}>
                <div></div>
                <span className="gradient-1"></span>
                <div></div>
            </div>
        </span>
    )
}