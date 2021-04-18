import styles from "../../styles/components/buttons/Button.module.css"

export default function Button({ buttonText, gradientNum, onClick, disabled }) {

    const handleClick = () => {
        window.navigator.vibrate(50)
        onClick()
    }

    return (
        <div onClick={handleClick} className={`clickable-shadow ${disabled ? `${styles.buttonDisabled}` : null} gradient-${gradientNum} padding-2 border-radius-12 cursor-pointer display-inline-flex align-center justify-center margin-1`}>
            <button disabled={disabled} className={`${styles.button} width-100 height-100 border-radius-10 cursor-pointer background-white padding-5 padding-left-right-10`}>
                {buttonText}
            </button>
        </div>
    )
}