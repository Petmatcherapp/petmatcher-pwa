export default function Action({ text, onClick }) {
    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation();
        () => onClick()
    }

    return (
        <p onClick={handleClick} className={`display-inline gradient-text gradient-3 cursor-pointer text-shadow-white weight-700`}>{text}</p>
    )
}