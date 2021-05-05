import Image from "next/image"

export default function CatLove() {
    return (
        <span>
            <Image 
                src="/images/pm-love-reaction.png"
                width={35}
                height={30}
                alt="cat with heart eyes"
            />
        </span>
    )
}