import Image from "next/image"

export default function CatLaugh() {
    return (
        <span>
            <Image 
                src="/images/pm-laugh-reaction.png"
                width={35}
                height={30}
                alt="cat laughing"
            />
        </span>
    )
}