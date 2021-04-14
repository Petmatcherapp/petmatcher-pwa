import styles from "../../styles/components/buttons/Button.module.css"

export default function Button({ buttonText, gradientNum, onClick, disabled }) {

    const handleClick = () => {
        () => onClick()
    }

    return (
        <div onClick={handleClick} className={`clickable-shadow ${disabled ? `${styles.buttonDisabled}` : null} gradient-${gradientNum} padding-2 border-radius-10 cursor-pointer display-inline-flex align-center justify-center margin-1`}>
            <button disabled={disabled} className={`${styles.button} border-radius-8 cursor-pointer background-white`}>
                {buttonText}
            </button>
        </div>
    )
}