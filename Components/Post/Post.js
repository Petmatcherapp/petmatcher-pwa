import styles from "../../styles/components/post/post.module.css"

export default function Post({ postData }) {
    return (
        <div className={`${styles.postContainer} border-radius-20 display-flex-column`}>
            {postData.srcType === "video" &&
            <video controls className={`${styles.video} border-radius-20 width-100`} src={postData.src} alt={postData.description}></video>}
            {postData.srcType === "image" &&
            <img className={`${styles.image} border-radius-20 width-100`} src={postData.src} alt={postData.description}></img>}

            <div className={`${styles.postUiOverlay} display-flex-column justify-between height-100 width-100 padding-5`}>
                <div className={`${styles.postHeaderContainer}`}>
                    <p className="color-white weight-500 highlight">{postData.animal.name}</p>
                </div>
                <div className={`${styles.postActionsContainer}`}>
                    <p className="color-white weight-500 highlight">{postData.description}</p>
                </div>
            </div>
        </div>
    )
}