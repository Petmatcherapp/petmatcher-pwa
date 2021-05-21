import { useState, useContext } from "react";
import { AudioContext } from "../../lib/context";
import { OptionContext } from "../../lib/context";
import CatLove from "../Images/Misc/CatLove";
import CatLaugh from "../Images/Misc/CatLaugh";
import Comment from "../Images/Misc/Comment";
import AwardBackground from "../Images/Svgs/Misc/AwardBackground";
import AnimalTag from "../AnimalTag/AnimalTag";
import VerticleLineBreak from "../Misc/VerticleLineBreak";
import Button from "../Buttons/Button";
import Action from "../Buttons/Action";
import SubOption from "../Nav/OptionMenus/SubOption";
import KindWords from "../Nav/OptionMenus/KindWords";
import styles from "./postAction.module.css";

export default function PostActions({ postData, handleOptionRender }) {
  const { playAudio } = useContext(AudioContext);
  const { handleOptionChange } = useContext(OptionContext);
  const [love, setLove] = useState(
    `${styles.reactionLoveHover} ${styles.translateLoveStart} cursor-pointer`
  );
  const [laugh, setLaugh] = useState(
    `${styles.reactionLaughHover} ${styles.translateLaughStart} cursor-pointer`
  );

  const [awardBackgroundStyles, setAwardBackgroundStyles] = useState(
    `${styles.awardBackgroundStylesHidden}`
  );
  const [reactionContainer, setReactionContainer] = useState("height-100");
  const [afterReaction, setAfterReaction] = useState("opacity-0 display-none");
  const [buttonContainerMovable, setButtonContainerMovable] = useState(
    `${styles.showFollow}`
  );

  const [disableLove, setDisableLove] = useState(false);
  const [disableLaugh, setDisableLaugh] = useState(false);

  const [followButton, setFollowButton] = useState({
    buttonText: "Follow",
    disabled: false,
  });
  const [subButton, setSubButton] = useState({
    buttonText: "Sub",
    disabled: false,
  });

  const sendReaction = (type) => {
    setTimeout(() => {
      setAwardBackgroundStyles(`${styles.awardBackgroundStylesShow}`);
    }, 300);
    setTimeout(() => {
      setReactionContainer("height-50");
      setAfterReaction("opacity-1");
    }, 1300);
  };

  const handleLoveClick = (e) => {
    e.stopPropagation();
    playAudio.buttonNormal();
    setLove(`${styles.translateLoveEnd}`);
    setLaugh("opacity-0");
    setDisableLaugh(true);
    sendReaction("love");
  };

  const handleLaughClick = (e) => {
    e.stopPropagation();
    playAudio.buttonNormal();
    setLaugh(`${styles.translateLaughEnd}`);
    setLove("opacity-0");
    setDisableLove(true);
    sendReaction("laugh");
  };

  const handleKindWordsClick = () => {
    handleOptionChange({
      OptionComponent: <KindWords />,
      optionData: { animal: postData.animal },
      optionStatus: "showOption",
    });
  };

  const handleFollowClick = () => {
    setFollowButton({ buttonText: "Follow'd", disabled: true });
    setTimeout(() => {
      setButtonContainerMovable(`${styles.showSub}`);
    }, 800);
  };

  const handleSubClick = () => {
    handleOptionChange({
      OptionComponent: <SubOption />,
      optionData: { animal: postData.animal },
      optionStatus: "showOption",
    });
    // setSubButton({buttonText: "sub'd", disabled: true})
  };

  return (
    <div className="display-flex-column justify-between height-100 width-100 padding-top-bottom-10">
      <div
        className={`${styles.reactionContainerStyles} ${reactionContainer} display-flex-row align-center justify-around text-shadow-black width-100 relative`}
      >
        <div className={`${awardBackgroundStyles}`}>
          <AwardBackground height={100} />
        </div>
        <button
          disabled={disableLove}
          className={`${styles.catLoveContainer} ${love} absolute`}
          onClick={handleLoveClick}
        >
          <CatLove width={70} height={60} />
        </button>
        <button
          disabled={disableLaugh}
          className={`${styles.catLaughContainer} ${laugh} absolute`}
          onClick={handleLaughClick}
        >
          <CatLaugh width={70} height={60} />
        </button>
      </div>
      <div
        className={`${styles.afterReactionContainer} ${afterReaction} padding-left-right-5 width-100 absolute`}
      >
        <div className="display-flex-row bottom-margin-medium">
          <span className="margin-right-small">
            <Comment width={25} />
          </span>
          <Action
            text={`Send ${postData.animal.name} kind words`}
            randomGradient={true}
            onClick={handleKindWordsClick}
          />
        </div>
        <div className="display-flex-row bottom-margin-medium align-end">
          <div>
            <AnimalTag
              avatar={postData.animal.avatar}
              name={postData.animal.name}
              alias={postData.animal.alias}
              type={postData.animal.type}
              gender={postData.animal.gender}
            />
          </div>
          <VerticleLineBreak darkMode={true} height="2em" />
          <div className="display-flex-row align-end">
            <div
              className={`${styles.buttonContainer} display-flex-column relative`}
            >
              <div
                className={`${styles.buttonContainerMovable} ${buttonContainerMovable} relative`}
              >
                <div className="padding-top-bottom-10 bottom-margin-medium">
                  <div className="display-flex-row">
                    <div className="margin-right-small">
                      <Button
                        buttonText={`${subButton.buttonText}`}
                        gradientNum={1}
                        onClick={handleSubClick}
                        disabled={subButton.disabled}
                      />
                    </div>
                  </div>
                </div>
                <div className="display-flex-row">
                  <div className="margin-right-small">
                    <Button
                      buttonText={`${followButton.buttonText}`}
                      gradientNum={2}
                      onClick={handleFollowClick}
                      disabled={followButton.disabled}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
