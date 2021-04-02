import Image from "next/image"
import styles from "../../styles/components/nav/DesktopNav.module.css"

function DesktopNav() {
    return (
        <nav className={`align-center ${styles.desktopNav}`}>
            <div>
                <Image 
                    src="/icons/pm-create-icon-inactive.svg"
                    layout="fill"
                />
            </div>
        </nav>
    )
}

export default DesktopNav