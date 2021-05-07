import Image from "next/image"

export default function CatLove({ height, width }) {
    return (
        <span>
            <Image 
                src="/images/pm-love-reaction.png"
                width={width}
                height={height}
                alt="cat with heart eyes"
            />
        </span>
    )
}