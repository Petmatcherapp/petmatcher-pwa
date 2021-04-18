import Head from "next/head"

export default function MetaData(props) {
    return (
        <Head>
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#583eff" />
            <meta name='application-name' content='Petmatcher' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content='Petmatcher' />
            <link rel="apple-touch-icon" href="/manifest-logo512x512.png" />
            
            <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1" />
            <meta name="description" content={props.description} />
            <title>{props.title} &#xb7; Petmatcher</title>
        </Head>
    )
}

MetaData.defaultProps = {
    title: "Home",
    description: "The Internet portal for cuteness!"
}