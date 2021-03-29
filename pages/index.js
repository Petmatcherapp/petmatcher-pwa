import styles from '../styles/Home.module.css'
import { version } from "../package.json"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>
          Welcome to Petmatcher 😸
        </h1>
        <p>The Internet Portal for Cuteness</p>

        <div className={styles.grid}>
          <h2>This is the blank canvas of the next generation of web applications</h2>
        </div>
        <small>This is a test with a small element</small>
        <small>This line is to test auto deployment</small>
        <small>package: {version}</small>
      </main>
    </div>
  )
}
