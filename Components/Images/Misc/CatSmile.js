import Image from "next/image"

export default function CatSmile({ height, width }) {
    return (
        <span>
            <Image 
                src="/images/pm-happy-reaction.png"
                width={width}
                height={height}
                alt="cat smiling"
            />
        </span>
    )
}