import { useState, useEffect } from "react"
import MobileNavigation from "./OptionMenus/MobileNavigation"
import styles from "../../styles/components/nav/MobileNav.module.css"
import SubOption from "./OptionMenus/SubOption"

function MobileNav({ OptionComponent, activeRoute }) {
    const [openMenu, setOpenMenu] = useState(false)
    const [dynamicClasses, setDynamicClasses] = useState(`${styles.dropMenu}`)
    const [activeComponent, setActiveComponent] = useState(<MobileNavigation activeRoute={activeRoute} />)

    const handleMobileNavClick = () => {
        if (!openMenu) {
            setDynamicClasses(`${styles.raiseNav}`)
        } else {
            setDynamicClasses(`${styles.dropMenu}`)
        }
        setOpenMenu(!openMenu)
    }

    useEffect(() => {
        switch(OptionComponent) {
            case "SubOption":
                setActiveComponent(<SubOption />)
                break;
            default:
                setActiveComponent(<MobileNavigation activeRoute={activeRoute} />)
        }
    }, [OptionComponent])

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