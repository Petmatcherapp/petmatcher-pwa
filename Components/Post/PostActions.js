import CatLove from "../Images/Misc/CatLove"
import CatLaugh from "../Images/Misc/CatLaugh"

export default function PostActions({ postMetaData }) {
    return (
        <div className="display-flex-row justify-between">
            <div className="text-shadow-black">
                <CatLove />
                <CatLaugh />
            </div>
            <div>

            </div>
        </div>
    )
}