import Image from "next/image"

export default function CatLove({ height, width }) {
    return (
        <Image 
            src="/images/pm-love-reaction.png"
            width={width}
            height={height}
            priority={true}
            alt="cat with heart eyes"
        />
    )
}