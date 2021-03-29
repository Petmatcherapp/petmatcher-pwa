import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <script src="/__/firebase/8.3.1/firebase-app.js"></script>
        <script src="/__/firebase/8.3.1/firebase-analytics.js"></script>
        <script src="/__/firebase/init.js"></script>
      </Html>
    )
  }
}

export default MyDocument
