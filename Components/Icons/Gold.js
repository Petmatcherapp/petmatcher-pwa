import Image from "next/image"
import styles from "../../styles/components/icons/Gold.module.css"

export default function Gold() {
    return (
      <span className={`${styles.goldCoin} display-inline-flex align-center`}>
        <Image
          src="/illustrations/pm-coin.svg"
          width={20}
          height={20}
        /> 
      </span>
    )
}