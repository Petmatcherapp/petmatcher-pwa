import Logo from "../Images/Svgs/Logo"
import styles from "../../styles/components/misc/Title.module.css"

export default function Title() {
    return (
        <div className="display-flex-row align-center bottom-margin-small">
          <Logo />
          <p className={`${styles.title} ${styles.titleAnimation} weight-500 gradient-1 gradient-text`}>Petmatcher</p>
        </div>
    )
}