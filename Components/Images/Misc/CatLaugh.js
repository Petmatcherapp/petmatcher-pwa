import Image from "next/image"

export default function CatLaugh({ height, width }) {
    return (
        <span>
            <Image 
                src="/images/pm-laugh-reaction.png"
                width={width}
                height={height}
                alt="cat laughing"
            />
        </span>
    )
}