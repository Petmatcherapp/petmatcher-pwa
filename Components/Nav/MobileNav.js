import { useState } from "react"
import MobileNavigation from "./MobileMenu/MobileNavigation"
import styles from "../../styles/components/Nav/MobileNav.module.css"

function MobileNav({ optionComponent }) {
    const [menuState, setMenuState] = useState("Menu")
    const [dynamicClasses, setDynamicClasses] = useState("")

    const handleMobileNavClick = () => {
        setDynamicClasses(`${styles.dropMenu}`)
        setTimeout(() => {
            setMenuState(menuState === "Menu" ? "Close" : "Menu")
            setDynamicClasses(`${styles.raiseMenu}`)
        }, 300)
    }

    return (
        <nav className={`${dynamicClasses} ${styles.mobileNav} align-center width-100`}>
            {
            menuState === "Close" && 
                <>
                    <MobileNavigation />
                    <div className="hr" />
                </>
            }
            <div onClick={handleMobileNavClick} className={`${styles.mobileNavMenuBar}`}>
                <small>{menuState}</small>
            </div>
        </nav>
    )
}

export default MobileNav