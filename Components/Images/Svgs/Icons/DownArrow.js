export default function DownArrow({ height, onClick }) {
  return (
    <svg onClick={onClick} width={height} height={height} viewBox="0 0 8 5">
      <path
        d="M.707 1.707l2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"
        fill="#3a3a3a"
      ></path>
    </svg>
  );
}
