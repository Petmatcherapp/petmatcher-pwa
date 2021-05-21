import Gold from "../Images/Svgs/Misc/Gold";

export default function GoldAmount({ amount }) {
  return (
    <span>
      <p className="display-inline">{amount}</p>
      &nbsp;
      <span>
        <Gold height={20} />
      </span>
    </span>
  );
}
