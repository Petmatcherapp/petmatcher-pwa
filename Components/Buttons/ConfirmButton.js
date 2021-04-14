import styles from "../../styles/components/buttons/ConfirmButton.module.css"

export default function ConfirmButton({ buttonText }) {
    return (
        <button className={`${styles.confirmButton} clickable-shadow border-radius-10 gradient-success padding-5 padding-left-right-10 weight-500 color-white cursor-pointer`}>
            {buttonText}
        </button>
    )
}