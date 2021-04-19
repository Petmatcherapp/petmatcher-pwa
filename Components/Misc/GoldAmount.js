import Gold from "../Images/Svgs/Gold"

export default function GoldAmount({ amount }) {
    return (
        <span>
            <p className="display-inline">
                {amount}
            </p>
            &nbsp;
            <span >
                <Gold width={20} />
            </span>
        </span>
    )
}