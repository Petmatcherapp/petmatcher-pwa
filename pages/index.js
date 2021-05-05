import Post from "../Components/Post/Post"
import postData from "../Components/Post/tempPostData.json"
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
    <main className="padding-0">
      {
        postData.map(post => 
          <Post postData={post} key={post.id} />
        )
      }
    </main>
  )
}