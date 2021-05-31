import Image from "next/image";
import styles from "./animalTag.module.css";

export default function AnimalTag({
  onClick,
  avatar,
  name,
  type,
  alias,
  gender,
  blackText,
}) {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  return (
    <div
      onClick={onClick ? handleClick : null}
      className="display-inline-flex align-center cursor-pointer"
    >
      <div className={`${styles.animalAvatarContainer} margin-right-small`}>
        <Image
          src={`${avatar}`}
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="display-flex-column">
        <div className="display-flex-row align-center">
          <small
            className={`bottom-margin-none ${
              blackText ? "text-shadow-white" : "text-shadow-black color-white"
            }`}
          >
            @{alias}
          </small>
          &nbsp;
          <span
            className={`${styles.genderBubble} ${
              gender === "female" ? "gradient-female" : "gradient-male"
            }`}
          ></span>
        </div>
        <p
          className={`${styles.animalName} display-inline ${
            blackText ? "text-shadow-white" : "text-shadow-black color-white"
          } margin-0 display-inline`}
        >
          {name} the {type}
        </p>
      </div>
    </div>
  );
}
