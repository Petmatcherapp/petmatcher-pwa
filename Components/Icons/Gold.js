import Image from "next/image"
import GoldCoin from "../../public/illustrations/pm-coin.svg"
import styles from "../../styles/components/icons/Gold.module.css"

export default function Gold() {
    return (
      <span className={`${styles.goldCoin} display-inline-flex align-center`}>
        <Image
          src={GoldCoin}
          width={20}
          height={20}
          alt="P.M.G"
        /> 
      </span>
    )
}