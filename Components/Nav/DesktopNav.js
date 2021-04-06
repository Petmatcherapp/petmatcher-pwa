import Link from "next/link"
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

    const handleState = (navType, remove) => {
        switch (navType) {
            case ("create"):
                console.log("i made it to create")
                remove ?
                setCreateAnimation("")
                :
                setCreateAnimation(`${styles.hoverAnimation}`)
                console.log(createAnimation)
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
                            <div className="display-flex-row align-center">
                                <div className={`${createAnimation} ${styles.navTitleCover} ${styles.color1}`}>
                                    <small className={`${styles.color1}`}>Create</small>
                                </div>
                                <small>Create</small>
                            </div>
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
                            <div className="display-flex-row align-center">
                                <div className={`${animalsAnimation} ${styles.navTitleCover} ${styles.color2}`}>
                                    <small className={`${styles.color2}`}>Animals</small>
                                </div>
                                <small>Animals</small>
                            </div>
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
                            <div className="display-flex-row align-center">
                                <div className={`${postsAnimation} ${styles.navTitleCover} ${styles.color2}`}>
                                    <small className={`${styles.color2}`}>Posts</small>
                                </div>
                                <small>Posts</small>
                            </div>
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
                            <div className="display-flex-row align-center">
                                <div className={`${storiesAnimation} ${styles.navTitleCover} ${styles.color3}`}>
                                    <small className={`${styles.color3}`}>Stories</small>
                                </div>
                                <small>Stories</small>
                            </div>
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
                            <div className="display-flex-row align-center">
                                <div className={`${groupsAnimation} ${styles.navTitleCover} ${styles.color4}`}>
                                    <small className={`${styles.color4}`}>Groups</small>
                                </div>
                                <small>Groups</small>
                            </div>
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
                            <div className="display-flex-row align-center">
                                <div className={`${storeAnimation} ${styles.navTitleCover} ${styles.color5}`}>
                                    <small className={`${styles.color5}`}>Store</small>
                                </div>
                                <small>Store</small>
                            </div>
                        </li>
                    </Link>
                    <div className={`${activeRoute?.store ? styles.activeBar : ""}`}></div>
                </div>
            </ul>
        </nav>
    )
}

export default DesktopNav