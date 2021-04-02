import Image from "next/image"
import styles from "../../styles/components/icons/Logo.module.css"

export default function Logo() {
    return (
        <span className={styles.logoContainer}>
          <Image
            src="/logos/LogoConcept2Large.svg"
            width={26}
            height={26}
          /> 
        </span>
    )
}