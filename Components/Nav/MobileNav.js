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
        <>
            <div id={`${styles.menuBarContainer}`} className="display-flex-row justify-center width-100">
                <div onClick={handleMobileNavClick} id={`${styles.menuBar}`} className="border-radius-10 text-align-center clickable-shadow">
                    <p className="margin-0">{openMenu ? "Close" : "Menu"}</p>
                </div>
            </div>
            <div className={`${styles.mobileNav} ${dynamicClasses} width-100`}>
                {activeComponent}
            </div>
        </>
    )
}

export default MobileNav