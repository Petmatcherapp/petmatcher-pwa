import { useState } from "react"
import styles from "../../styles/components/Nav/MobileNav.module.css"

function MobileNav() {
    const [menuState, setMenuState] = useState("Menu")

    const handleMobileNavClick = () => {
        setMenuState(menuState === "Menu" ? "Close" : "Menu")
    }

    return (
        <nav onClick={handleMobileNavClick} className={`${styles.mobileNav} align-center width-100`}>
            <small>{menuState}</small>
        </nav>
    )
}

export default MobileNav