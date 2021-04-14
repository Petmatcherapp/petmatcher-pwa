import styles from "../../styles/components/buttons/WarningButton.module.css"

export default function WarningButton({ buttonText }) {
    return (
        <button className={`${styles.warningButton} clickable-shadow border-radius-10 gradient-warning padding-5 padding-left-right-10 weight-500 color-white cursor-pointer`}>
            {buttonText}
        </button>
    )
}