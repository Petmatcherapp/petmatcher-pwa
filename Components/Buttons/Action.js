export default function Action({ text, onClick }) {

    const handleClick = () => {
        onClick
    }

    return (
        <p onClick={handleClick} className="display-inline gradient-text gradient-6 cursor-pointer">{text}</p>
    )
}