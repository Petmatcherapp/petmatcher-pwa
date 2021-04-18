import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="keywords" content="internet, portal, cuteness, social, dog, cat, animals, media, social media" />
            <link rel="icon" href="/favicon.ico" />

            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#583eff" />
            <meta name='application-name' content='Petmatcher' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content='Petmatcher' />
            <link rel="apple-touch-icon" href="/public/manifest-logo512x512.png" />

            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap" rel="stylesheet" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
