import { useContext, useState } from "react";
import { OptionContext } from "../../../../lib/context";
import AnimalTag from "../../../AnimalTag/AnimalTag";
import Button from "../../../Buttons/Button";
import Question from "../../../Images/Svgs/Icons/Question";
import Image from "next/image";
import styles from "./SubOption.module.css";

export default function SubOption() {
  const { option } = useContext(OptionContext);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const animal = option.optionData.animal;

  const handleShowQuestion = () => {
    showQuestion ? setShowQuestion(false) : setShowQuestion(true);
  };

  const handleShowMonths = () => {
    showSub ? setShowSub(false) : setShowSub(true);
  };

  return (
    <div className={`${styles.SubOptionContainer} display-flex-column`}>
      <div
        className={`${
          showQuestion ? "opacity-100 display-block" : "opacity-0 display-none"
        } transition-opacity absolute margin-right-large z-index-4`}
      >
        <h3 className="bottom-margin-small">What is 'Subscribing'?</h3>
        <small className="bottom-margin-small display-block">
          Subscribing is a way to support {animal.name} the {animal.type},
          donate to animal charities and keep Petmatcher afloat, all in one
          bundle.
        </small>
        <small>
          Out of your Subscription, here is how the funds are divided:
        </small>
        <ul>
          <li>
            50% - {animal.name} the {animal.type}
          </li>
          <li>40% - Petmatcher</li>
          <li>10% - Various animal charities</li>
        </ul>
        <p
          onClick={handleShowQuestion}
          className="gradient-text gradient-5 display-inline cursor-pointer"
        >
          {"< back"}
        </p>
      </div>
      <div
        className={`${
          !showQuestion && !showSub ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
        <div className="bottom-margin-large">
          <div className="display-flex-row align-center justify-between bottom-margin-medium">
            <AnimalTag
              avatar={animal.avatar}
              name={animal.name}
              alias={animal.alias}
              type={animal.type}
              gender={animal.gender}
              blackText={true}
              onClick={false}
            />
            <span
              onClick={handleShowQuestion}
              className="normal-drop-shadow cursor-pointer"
            >
              <Question height={25} />
            </span>
          </div>
          <h3 className="bottom-margin-medium">Subscribe to unlock...</h3>
          {animal.emotes.length === 0 && animal.treats.length === 0 ? (
            <small className="display-block bottom-margin-medium">
              {animal.name} doesn't have any treats or emotes.
            </small>
          ) : (
            <div className="display-flex-column bottom-margin-large">
              <div className="display-flex-column bottom-margin-medium">
                <small className="bottom-margin-small">
                  {animal.emotes.length} emote
                  {animal.emotes.length > 1 ? "s" : ""}
                </small>
                <div className="display-flex-row align-center">
                  {animal.emotes.length > 0
                    ? animal.emotes.map(() => (
                        <div className="margin-right-extra-large">
                          <div className="img-medium">
                            <Image
                              src={`${animal.emotes[0].src}`}
                              layout="fill"
                              objectFit="cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </div>
              <div className="display-flex-column">
                <small className="bottom-margin-small">
                  {animal.treats.length} treat
                  {animal.treats.length > 1 ? "s" : ""}
                </small>
                <div className="display-flex-row">
                  {animal.treats.length > 0
                    ? animal.treats.map(() => (
                        <div className="margin-right-extra-large">
                          <div className="img-medium">
                            <Image
                              src={`${animal.treats[0].src}`}
                              layout="fill"
                              objectFit="cover"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          )}
          <div>
            <p>
              {animal.name}'s super awesome exclusive subscriber's content 😻
            </p>
          </div>
        </div>
        <div className="display-flex-row justify-around">
          <div className="padding-5">
            <Button buttonText={<div>Sub for me 🎉</div>} gradientNum={6} />
          </div>
          <div className="padding-5">
            <Button buttonText={<div>Gift a sub(s) 🎁</div>} gradientNum={1} />
          </div>
        </div>
      </div>
      <div
        className={`${
          showSub ? "opacity-100 display-flex-column" : "opacity-0 display-none"
        } absolute margin-right-large`}
      >
        <p>How many months would you like to subscribe to {animal.name}?</p>
        <div className="display-flex-row flex-wrap relative bottom-margin-medium">
          <div
            className={`${styles.SubOptionMonth} padding-10 display-flex-column align-center bottom-margin-medium`}
          >
            <p className="absolute">1</p>
          </div>
          <div
            className={`${styles.SubOptionMonth} padding-10 display-flex-column align-center bottom-margin-medium`}
          >
            <p className="absolute">2</p>
          </div>
          <div
            className={`${styles.SubOptionMonth} padding-10 display-flex-column align-center bottom-margin-medium`}
          >
            <p className="absolute">3</p>
          </div>
          <div
            className={`${styles.SubOptionMonth} padding-10 display-flex-column align-center bottom-margin-medium`}
          >
            <p className="absolute">4</p>
          </div>
          <div
            className={`${styles.SubOptionMonth} padding-10 display-flex-column align-center bottom-margin-medium`}
          >
            <p className="absolute">5</p>
          </div>
          <div
            className={`${styles.SubOptionMonth} padding-10 display-flex-column align-center bottom-margin-medium`}
          >
            <p className="absolute">6</p>
          </div>
          <div
            className={`${styles.SubOptionMonth} padding-10 display-flex-column align-center bottom-margin-medium`}
          >
            <p className="absolute">7</p>
          </div>
          <div
            className={`${styles.SubOptionMonth} padding-10 display-flex-column align-center bottom-margin-medium`}
          >
            <p className="absolute">8</p>
          </div>
          <div
            className={`${styles.SubOptionMonth} padding-10 display-flex-column align-center bottom-margin-medium`}
          >
            <p className="absolute">9</p>
          </div>
          <div
            className={`${styles.SubOptionMonth} padding-10 display-flex-column align-center`}
          >
            <p className="absolute">10</p>
          </div>
          <div
            className={`${styles.SubOptionMonth} padding-10 display-flex-column align-center`}
          >
            <p className="absolute">11</p>
          </div>
          <div
            className={`${styles.SubOptionMonth} padding-10 display-flex-column align-center`}
          >
            <p className="absolute">12</p>
          </div>
        </div>
        <div className="diaplay-flex-row justify-center">
          <p
            onClick={handleShowQuestion}
            className="gradient-text gradient-5 display-inline cursor-pointer"
          >
            {"continue >"}
          </p>
        </div>
      </div>
    </div>
  );
}
