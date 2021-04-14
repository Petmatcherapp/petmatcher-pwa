import styles from "../../styles/components/buttons/Button.module.css"

export default function Button({ buttonText, gradientNum }) {
    return (
        <div className={`gradient-${gradientNum} padding-2 border-radius-10 clickable-shadow cursor-pointer display-inline-flex align-center justify-center`}>
            <button className={`${styles.button} border-radius-8 cursor-pointer background-white`}>
                {buttonText}
            </button>
        </div>
    )
}