import AnimalTag from "../AnimalTag/AnimalTag"
import GiveTreat from "../Images/Svgs/Treats/GiveTreat"

export default function PostHeader({ animal }) {
    return (
        <div className="display-flex-row justify-between align-center">
            <AnimalTag 
                name={animal.name}
                type={animal.type} 
                avatar={animal.avatar}
                gender={animal.gender}
                alias={animal.alias}
            />
            <GiveTreat height={40} />
        </div>
    )
}