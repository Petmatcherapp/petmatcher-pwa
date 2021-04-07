import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import CreateIcon from "../../Components/Images/Svgs/Nav/CreateIcon"
import AnimalIcon from "../../Components/Images/Svgs/Nav/AnimalIcon"
import PostIcon from "../../Components/Images/Svgs/Nav/PostIcon"
import StoryIcon from "../../Components/Images/Svgs/Nav/StoryIcon"
import GroupIcon from "../../Components/Images/Svgs/Nav/GroupIcon"
import StoreIcon from "../../Components/Images/Svgs/Nav/StoreIcon"
import styles from "../../styles/components/nav/DesktopNav.module.css"

function DesktopNav({ activeRoute }) {
    const [createAnimation, setCreateAnimation] = useState("")
    const [animalsAnimation, setAnimalsAnimation] = useState("")
    const [postsAnimation, setPostsAnimation] = useState("")
    const [storiesAnimation, setStoriesAnimation] = useState("")
    const [groupsAnimation, setGroupsAnimation] = useState("")
    const [storeAnimation, setStoreAnimation] = useState("")
    const [settingsAnimation, setSettingsAnimation] = useState("")

    const handleState = (navType, remove) => {
        switch (navType) {
            case ("create"):
                remove ?
                setCreateAnimation("")
                :
                setCreateAnimation(`${styles.hoverAnimation}`)
                break;
            case ("animals"):
                remove ?
                setAnimalsAnimation("")
                :
                setAnimalsAnimation(`${styles.hoverAnimation}`)
                break;
            case ("posts"):
                remove ?
                setPostsAnimation("")
                :
                setPostsAnimation(`${styles.hoverAnimation}`)
                break;
            case ("stories"):
                remove ?
                setStoriesAnimation("")
                :
                setStoriesAnimation(`${styles.hoverAnimation}`)
                break;
            case ("groups"):
                remove ?
                setGroupsAnimation("")
                :
                setGroupsAnimation(`${styles.hoverAnimation}`)
                break;
            case ("store"):
                remove ?
                setStoreAnimation("")
                :
                setStoreAnimation(`${styles.hoverAnimation}`)
                break;
            case ("settings"):
                remove ?
                setSettingsAnimation("")
                :
                setSettingsAnimation(`${styles.hoverAnimation}`)
        }
    }

    const handleMouseEnter = (navType) => {
        handleState(navType, false)
    }

    const handleMouseLeave = (navType) => {
        handleState(navType, true)
    }

    return (
        <nav className={`align-center justify-between ${styles.desktopNav}`}>
            <ul className={`${styles.navUl} display-flex-column align-center justify-between`}>
                <div className="display-flex-row justify-between align-center">
                    <Link href="/create">
                        <li onMouseEnter={() => handleMouseEnter("create")} onMouseLeave={() => handleMouseLeave("create")} className={`${styles.imageContainer}`}>
                            <CreateIcon
                                active={activeRoute?.create}
                            />
                            <small className={`${createAnimation} ${styles.navTitleCover}`}>Create</small>
                        </li>
                    </Link>
                    <div className={`${activeRoute?.create ? styles.activeBar : ""}`}></div>
                </div>
                <div className="display-flex-row justify-between">
                    <Link href="/animals">
                        <li onMouseEnter={() => handleMouseEnter("animals")} onMouseLeave={() => handleMouseLeave("animals")} className={`${styles.imageContainer}`}>
                            <AnimalIcon
                                active={activeRoute?.animals}
                            />
                            <small className={`${animalsAnimation} ${styles.navTitleCover}`}>Animals</small>
                        </li>
                    </Link>
                    <div className={`${activeRoute?.animals ? styles.activeBar : ""}`}></div>
                </div>
                <div className="display-flex-row justify-between">
                    <Link href="/">
                        <li onMouseEnter={() => handleMouseEnter("posts")} onMouseLeave={() => handleMouseLeave("posts")} id={`${styles.postIcon}`} className={`${styles.imageContainer}`}>
                            <PostIcon
                                active={activeRoute?.posts}
                            />
                            <small className={`${postsAnimation} ${styles.navTitleCover}`}>Posts</small>
                        </li>
                    </Link>
                    <div className={`${activeRoute?.posts ? styles.activeBar : ""}`}></div>
                </div>
                <div className="display-flex-row justify-between">
                    <Link href="/stories">
                        <li onMouseEnter={() => handleMouseEnter("stories")} onMouseLeave={() => handleMouseLeave("stories")} id={`${styles.storyIcon}`} className={`${styles.imageContainer}`}>
                            <StoryIcon
                                active={activeRoute?.stories}
                            />
                            <small className={`${storiesAnimation} ${styles.navTitleCover}`}>Stories</small>
                        </li>
                    </Link>
                    <div className={`${activeRoute?.stories ? styles.activeBar : ""}`}></div>
                </div>
                <div className="display-flex-row justify-between">
                    <Link href="/groups">
                        <li onMouseEnter={() => handleMouseEnter("groups")} onMouseLeave={() => handleMouseLeave("groups")} className={`${styles.imageContainer}`}>
                            <GroupIcon
                                active={activeRoute?.groups}
                            />
                            <small className={`${groupsAnimation} ${styles.navTitleCover}`}>Groups</small>
                        </li>
                    </Link>
                    <div className={`${activeRoute?.groups ? styles.activeBar : ""}`}></div>
                </div>
                <div className="display-flex-row justify-between">
                    <Link href="/store">
                        <li onMouseEnter={() => handleMouseEnter("store")} onMouseLeave={() => handleMouseLeave("store")} className={`${styles.imageContainer}`}>
                            <StoreIcon
                                active={activeRoute?.store}
                            />
                            <small className={`${storeAnimation} ${styles.navTitleCover}`}>Store</small>
                        </li>
                    </Link>
                    <div className={`${activeRoute?.store ? styles.activeBar : ""}`}></div>
                </div>
            </ul>
            <ul className={`${styles.bottomNavUl}`}>
                <li className={`${styles.imageContainer}`} onMouseEnter={() => handleMouseEnter("settings")} onMouseLeave={() => handleMouseLeave("settings")}>
                    <div className={`${styles.settingsImageContainer}`}>
                        <Image 
                            src="/Screenshot 2021-02-11 at 5.12.16 PM.png"
                            alt="Sissy the cat"
                            width={30}
                            height={30}
                        />
                    </div>
                    <small className={`${settingsAnimation} ${styles.navTitleCover}`}>Settings</small>
                </li>
            </ul>
        </nav>
    )
}

export default DesktopNav