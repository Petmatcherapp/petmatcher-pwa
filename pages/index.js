import Title from "../Components/Misc/Title"
import Gold from "../Components/Icons/Gold"
import Loading from "../Components/Misc/Loading"
import styles from "../styles/pages/home.module.css"
import Reddit from "../Components/SocialAnchor/Reddit"
import Insta from "../Components/SocialAnchor/Insta"
import Twitter from "../Components/SocialAnchor/Twitter"
import CatSmile from "../Components/Icons/CatSmile"
import LoadingText from "../Components/Misc/LoadingText"

export default function Home() {
  return (
    <main className={`${styles.temporaryHomeClass} align-center justify-center`}>
      <div className="bottom-margin-large">
        <Title />
        <h1 className="bottom-margin-medium">Internet Portal for Cuteness&nbsp;<CatSmile /></h1>
      </div>
      <div className="bottom-margin-large">
        <h2 className="bottom-margin-medium">
          Petmatcher is going through an overhaul at the moment... 🚀
        </h2>
      </div>
      <div className="bottom-margin-large">
        <p className="bottom-margin-small">
          Follow us for sneak peeks, and maybe some P.M.G <Gold /> too 😉
        </p>
        <p>
          <Reddit /> &#xb7; <Insta /> &#xb7; <Twitter />
        </p>
      </div>
      <div className="display-flex-column align-center justify-center">
        <LoadingText />
        <Loading />
      </div>
    </main>
  )
}
