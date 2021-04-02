import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="keywords" content="internet, portal, cuteness, social, dog, cat, animals, media, social media" />

            <meta name='application-name' content='Petmatcher' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content='Petmatcher' />
            <link rel="apple-touch-icon" href="/manifest-logo512x512.png" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="The Internet portal for cuteness!" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap" rel="stylesheet" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/__/firebase/8.3.1/firebase-app.js"></script>
          <script src="/__/firebase/8.3.1/firebase-analytics.js"></script>
          <script src="/__/firebase/init.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
