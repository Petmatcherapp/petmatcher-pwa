import { useContext, useState } from "react";
import { OptionContext } from "../../../../lib/context";
import AnimalTag from "../../../AnimalTag/AnimalTag";
import Button from "../../../Buttons/Button";
import Question from "../../../Images/Svgs/Icons/Question";
import Image from "next/image";
import MasterForm from "../../../Forms/MasterForm";
import styles from "./SubOption.module.css";

export default function SubOption() {
  const { option } = useContext(OptionContext);
  const animal = option.optionData.animal;
  const [showQuestion, setShowQuestion] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [giftSub, setGiftSub] = useState(false);

  const handleShowQuestion = () => {
    showQuestion ? setShowQuestion(false) : setShowQuestion(true);
  };

  const handleShowForm = (giftSub) => {
    showForm ? setShowForm(false) : setShowForm(true);
    giftSub ? setGiftSub(true) : setGiftSub(false);
  };

  return (
    <div>
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
          !showQuestion && !showForm ? "opacity-100" : "opacity-0"
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
          {animal.emotes.length === 0 && animal.treats.length === 0 ? null : (
            <div>
              <div className="bottom-margin-medium display-flex-row justify-between">
                <div className="width-50 display-flex-column">
                  <small className="bottom-margin-small">treats</small>
                  <div className="display-flex-row">
                    {animal.treats.length > 0
                      ? animal.treats.map((treat) => (
                          <div key={treat.id} className="margin-right-medium">
                            <div className="img-small">
                              <Image
                                src={`${treat.src}`}
                                layout="fill"
                                objectFit="cover"
                                loading="lazy"
                              />
                            </div>
                            <small className="extra-small-text">
                              {treat.name}
                            </small>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
                <div className="width-50 display-flex-column">
                  <small className="bottom-margin-small">emotes</small>
                  <div className="display-flex-row align-center">
                    {animal.emotes.length > 0
                      ? animal.emotes.map((emote) => (
                          <div key={emote.id} className="margin-right-medium">
                            <div className="img-small">
                              <Image
                                src={`${emote.src}`}
                                layout="fill"
                                objectFit="cover"
                                loading="lazy"
                              />
                            </div>
                            <small className="extra-small-text">
                              {emote.name}
                            </small>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </div>
              <p className="bottom-margin-medium">along with...</p>
            </div>
          )}
          <div>
            <ul className={styles.cRainbow}>
              <li
                className={`${styles.cRainbowLayer} ${styles.cRainbowLayerWhite}`}
              >
                {animal.name}'s super awesome subsriber content
              </li>
              <li
                className={`${styles.cRainbowLayer} ${styles.cRainbowLayerViolet}`}
              >
                {animal.name}'s super awesome subsriber content
              </li>
              <li
                className={`${styles.cRainbowLayer} ${styles.cRainbowLayerBlue}`}
              >
                {animal.name}'s super awesome subsriber content
              </li>
              <li
                className={`${styles.cRainbowLayer} ${styles.cRainbowLayerGreen}`}
              >
                {animal.name}'s super awesome subsriber content
              </li>
              <li
                className={`${styles.cRainbowLayer} ${styles.cRainbowLayerRed}`}
              >
                {animal.name}'s super awesome subsriber content
              </li>
            </ul>
          </div>
        </div>
        <div className="display-flex-row justify-around">
          <div className="padding-5">
            <Button
              buttonText={
                <div>
                  Sub for me
                  <span className={`${styles.wiggle}`}>🎉</span>
                </div>
              }
              gradientNum={6}
              onClick={() => handleShowForm(false)}
            />
          </div>
          <div className="padding-5">
            <Button
              buttonText={
                <div>
                  Gift a sub(s)
                  <span className={`${styles.wiggle}`}>🎁</span>
                </div>
              }
              gradientNum={1}
              onClick={() => handleShowForm(true)}
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          showForm
            ? "opacity-100 display-flex-column"
            : "opacity-0 display-none"
        } margin-right-large ${styles.subForm}`}
      >
        <MasterForm miscData={{ giftSub: giftSub }} formId={"sub"} />
      </div>
    </div>
  );
}
