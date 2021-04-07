export async function getServerSideProps() {
  return {
    props: {
      activeRoute: {
        create: true
      }
    }
  }
}

export default function Create() {
  return (
    <main className={`align-center justify-center`}>
        <p>This is /create</p>
    </main>
  )
}