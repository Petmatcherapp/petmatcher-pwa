import Image from "next/image"

export default function Comment({ width }) {
    return (
        <Image 
            src="/images/pm-comment.png"
            width={width}
            height={width}
            alt="comment bubble"
        />
    )
}