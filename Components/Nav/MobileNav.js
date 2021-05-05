import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import CreateIcon from "../Images/Svgs/Nav/CreateIcon"
import AnimalIcon from "../Images/Svgs/Nav/AnimalIcon"
import PostIcon from "../Images/Svgs/Nav/PostIcon"
import StoryIcon from "../Images/Svgs/Nav/StoryIcon"
import GroupIcon from "../Images/Svgs/Nav/GroupIcon"
import StoreIcon from "../Images/Svgs/Nav/StoreIcon"
import LineBreak from "../Misc/LineBreak"
import styles from "../../styles/components/nav/MobileNav.module.css"

function MobileNav({ optionComponent, activeRoute }) {
    const [menuState, setMenuState] = useState("Menu")
    const [dynamicClasses, setDynamicClasses] = useState("")

    const handleMobileNavClick = () => {
        setDynamicClasses(`${styles.dropMenu}`)
        setTimeout(() => {
            setMenuState(menuState === "Menu" ? "close" : "Menu")
            setDynamicClasses(`${styles.raiseMenu}`)
        }, 300)
    }

    return (
        <nav className={`${dynamicClasses} ${styles.mobileNav} align-center width-100`}>
            {
            menuState === "Close" && 
                <>
                    <div className="display-flex-column width-100">
                        <ul className={`${styles.navUl} display-flex-column align-center bottom-margin-none`}>
                            <Link href="/create">
                                <li className={`${styles.imageContainer}`}>
                                    <CreateIcon
                                        active={activeRoute?.create}
                                    />
                                    <small className="bottom-margin-none">Create</small>
                                </li>
                            </Link>
                            <LineBreak />
                        </ul>
                        <div>
                            <ul className={`${styles.navUl}`}>
                                <div className="display-flex-row space-evenly justify-around bottom-margin-large">
                                    <Link href="/store">
                                        <li className={`${styles.imageContainer}`}>
                                            <StoreIcon
                                                active={activeRoute?.store}
                                            />
                                            <small className="bottom-margin-none">Store</small>
                                        </li>
                                    </Link>
                                    <Link href="/groups">
                                        <li className={`${styles.imageContainer}`}>
                                            <GroupIcon
                                                active={activeRoute?.groups}
                                            />
                                            <small className="bottom-margin-none">Groups</small>
                                        </li>
                                    </Link>
                                    <Link href="/settings">
                                        <li className={`${styles.imageContainer}`}>
                                            <div className={`${styles.settingsImageContainer}`}>
                                                <Image 
                                                    src="/Screenshot 2021-02-11 at 5.12.16 PM.png"
                                                    alt="Sissy the cat"
                                                    width={30}
                                                    height={30}
                                                />
                                            </div>
                                            <small className="bottom-margin-none">Settings</small>
                                        </li>
                                    </Link>
                                </div>
                                <div className="display-flex-row space-evenly justify-around">
                                    <Link href="/animals">
                                        <li className={`${styles.imageContainer}`}>
                                            <AnimalIcon
                                                active={activeRoute?.animals}
                                            />
                                            <small className="bottom-margin-none">Animals</small>
                                        </li>
                                    </Link>
                                    <Link href="/">
                                        <li id={`${styles.postIcon}`} className={`${styles.imageContainer}`}>
                                            <PostIcon
                                                active={activeRoute?.posts}
                                            />
                                            <small className="bottom-margin-none">Posts</small>
                                        </li>
                                    </Link>
                                    <Link href="/stories">
                                        <li className={`${styles.imageContainer}`}>
                                            <StoryIcon
                                                active={activeRoute?.stories}
                                            />
                                            <small className="bottom-margin-none">Stories</small>
                                        </li>
                                    </Link>
                                </div>
                            </ul>
                        </div>            
                    </div>
                    <LineBreak />
                </>
            }
            <div onClick={handleMobileNavClick} className={`${styles.mobileNavMenuBar}`}>
                <small className="color-grey">{menuState}</small>
            </div>
        </nav>
    )
}

export default MobileNav