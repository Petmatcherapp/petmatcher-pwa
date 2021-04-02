import Head from "next/head"

export default function MetaData(props) {
    return (
        <Head>
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#37eeff" />

            <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="The Internet portal for cuteness!" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap" rel="stylesheet" />
            <title>{props.title} &#xb7; Petmatcher</title>
        </Head>
    )
}

MetaData.defaultProps = {
    title: "Home"
}