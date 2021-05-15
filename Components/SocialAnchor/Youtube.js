import styles from "./Youtube.module.css"

export default function Youtube() {
    return (
        <a target="__blank" href="https://google.com" className={`${styles.youtubeAnchor}`}>YouTube</a>
    )
}