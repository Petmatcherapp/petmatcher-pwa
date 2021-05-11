import { useEffect, useState } from "react"
import LineBreak from "../Misc/LineBreak"
import MobileNavigation from "./MobileMenus/MobileNavigation"
import styles from "../../styles/components/nav/MobileNav.module.css"

function MobileNav({ OptionComponent, activeRoute }) {
    const [openMenu, setOpenMenu] = useState(false)
    const [dynamicClasses, setDynamicClasses] = useState(`${styles.dropMenu}`)
    const [activeComponent, setActiveComponent] = useState(OptionComponent ? <OptionComponent /> : <MobileNavigation activeRoute={activeRoute} />)

    const handleMobileNavClick = () => {
        if (!openMenu) {
            setDynamicClasses(`${styles.raiseNav}`)
        } else {
            setDynamicClasses(`${styles.dropMenu}`)
        }
        setOpenMenu(!openMenu)
    }

    return (
        <div onClick={handleMobileNavClick} className={`${styles.mobileNav} ${dynamicClasses} width-100`}>
            <div className={`${styles.mobileNavMenuBar} cursor-pointer`}>
                    <div id={`${styles.menuBar}`} className="border-radius-10"></div>
            </div>
            <div className={`${styles.mobileContents} width-100`}>
                {activeComponent}
            </div>
        </div>
    )
}

export default MobileNav