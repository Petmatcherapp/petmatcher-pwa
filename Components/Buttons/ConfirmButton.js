import styles from "../../styles/components/buttons/ConfirmButton.module.css"

export default function ConfirmButton({ buttonText, onClick, disabled }) {

    const handleClick = () => {
        window.navigator.vibrate(50)
        onClick
    }

    return (
        <button onClick={handleClick} disabled={disabled} className={`${styles.confirmButton} clickable-shadow border-radius-12 gradient-success padding-5 padding-left-right-10 weight-500 color-white cursor-pointer margin-1`}>
            {buttonText}
        </button>
    )
}