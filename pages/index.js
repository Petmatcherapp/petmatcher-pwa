import Title from "../Components/Misc/Title"
import Gold from "../Components/Images/Svgs/Gold"
import Loading from "../Components/Misc/Loading"
import styles from "../styles/pages/home.module.css"
import Reddit from "../Components/SocialAnchor/Reddit"
import Insta from "../Components/SocialAnchor/Insta"
import Twitter from "../Components/SocialAnchor/Twitter"
import CatSmile from "../Components/Images/CatSmile"
import LoadingText from "../Components/Misc/LoadingText"
import { getTestData } from "../lib/firebase"

export async function getServerSideProps() {
  const testDoc = await getTestData()

  // JSON serializable data
  let doc = null

  if (testDoc) doc = testDoc.data()

  return {
    props: { 
      activeRoute: {
        posts: true
      },
      doc 
    }
  }
}

export default function Home({ doc }) {
  return (
    <main>
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
        <span className="display-flex-row align-center">
          <Reddit />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Twitter />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Insta />
        </span>
      </div>
      <div className="display-flex-column align-center justify-center">
        <LoadingText />
        <Loading />
      </div>
    </main>
  )
}