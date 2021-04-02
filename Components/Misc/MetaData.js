import Head from "next/head"

export default function MetaData(props) {
    return (
        <Head>
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