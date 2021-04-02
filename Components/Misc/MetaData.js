import Head from "next/head"

export default function MetaData(props) {
    return (
        <Head>
            <title>{props.title} &#xb7; Petmatcher</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap" rel="stylesheet" /> 
        </Head>
    )
}

MetaData.defaultProps = {
    title: "Home"
}