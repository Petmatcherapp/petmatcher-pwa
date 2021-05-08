import Image from "next/image"

export default function CatLaugh({ height, width }) {
    return (
        <Image 
            src="/images/pm-laugh-reaction.png"
            width={width}
            height={height}
            alt="cat laughing"
        />
    )
}