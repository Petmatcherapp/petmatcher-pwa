import { useContext } from "react"
import {OptionContext} from "../../lib/context"
import MobileNavigation from "./OptionMenus/MobileNavigation"
import styles from "./MobileNav.module.css"

export default function MobileNav() {
    const {option, handleOptionChange} = useContext(OptionContext)

    const handleMobileNavClick = () => {
        option.optionStatus === "showOption" ?
        handleOptionChange({...option, optionStatus: "hideOption"})
        :
        handleOptionChange({...option, OptionComponent: <MobileNavigation />,  optionStatus: "showOption"})
    }

    return (
        <>
            <div id={`${styles.menuBarContainer}`} className="display-flex-row justify-center width-100">
                <div onClick={handleMobileNavClick} id={`${styles.menuBar}`} className="border-radius-10 text-align-center clickable-shadow">
                    <p className="margin-0">{option.optionStatus === "showOption" ? "Close" : "Menu"}</p>
                </div>
            </div>
            <div className={`${styles.mobileNav} ${option.optionStatus} width-100`}>
                {option.OptionComponent}
            </div>
        </>
    )
}