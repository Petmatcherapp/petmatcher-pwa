import PostHeader from "./PostHeader"
// import PostActions from "./PostActions"
import styles from "../../styles/components/post/post.module.css"

export default function Post({ postData }) {
    return (
        <div className={`${styles.postContainer} border-radius-20 display-flex-column`}>
            {postData.srcType === "video" &&
            <video controls className={`${styles.video} border-radius-20 width-100`} src={postData.src} alt={postData.description}></video>}
            {postData.srcType === "image" &&
            <img className={`${styles.image} border-radius-20 width-100`} src={postData.src} alt={postData.description}></img>}
            <div className={`${styles.postUiOverlay} display-flex-column justify-between height-100 width-100 padding-5 padding-top-bottom-10`}>
                <PostHeader animal={postData.animal} />
                {/* <PostActions /> */}
                <div className={`${styles.postActionsContainer}`}>
                    <small className="color-white weight-500 text-shadow-black">{postData.description}</small>
                </div>
            </div>
        </div>
    )
}