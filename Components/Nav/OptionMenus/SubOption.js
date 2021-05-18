import { useContext, useState } from "react";
import { OptionContext } from "../../../lib/context";
import AnimalTag from "../../AnimalTag/AnimalTag";
import Button from "../../Buttons/Button";
import Question from "../../Images/Svgs/Icons/Question";
import Image from "next/image";

export default function SubOption() {
  const { option } = useContext(OptionContext);
  const [showQuestion, setShowQuestion] = useState(false);
  const animal = option.optionData.animal;

  const handleShowQuestion = () => {
    if (showQuestion) {
      setShowQuestion(false);
    } else {
      setShowQuestion(true);
    }
  };

  return (
    <div className="display-flex-column">
      <div
        className={`${
          showQuestion ? "opacity-100 display-block" : "opacity-0 display-none"
        } transition-all absolute margin-right-large z-index-4`}
      >
        <h3 className="bottom-margin-small">What is 'Subscribing'?</h3>
        <small className="bottom-margin-small display-block">
          It is a way to support {animal.name} the {animal.type}, donate to
          animal charities and keep PM running.
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
          className="gradient-text gradient-5 display-inline"
        >
          {"< back"}
        </p>
      </div>
      <div
        className={`${
          !showQuestion ? "opacity-100" : "opacity-0"
        } transition-all`}
      >
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
          <span onClick={handleShowQuestion} className="normal-drop-shadow">
            <Question height={25} />
          </span>
        </div>
        {animal.emotes.length === 0 && animal.treats.length === 0 ? (
          <div className="bottom-margin-large">
            <small className="display-block bottom-margin-medium">
              {animal.name} does not have any treats or emotes available yet.
            </small>
            <small className="display-block bottom-margin-medium">
              You can still subsribe if you would like to support.
            </small>
            <small className="display-block bottom-margin-medium">
              When they do create a treat or emote, you will have first dibs 😺
            </small>
          </div>
        ) : (
          <div className="bottom-margin-large">
            <h3 className="bottom-margin-medium">Subscribe to unlock</h3>
            <div className="display-flex-column bottom-margin-medium">
              <div className="display-flex-column bottom-margin-medium">
                <h4 className="bottom-margin-small">
                  {animal.emotes.length} emote
                  {animal.emotes.length > 1 ? "s" : ""}
                </h4>
                <div className="display-flex-row">
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
                <h4 className="bottom-margin-small">
                  {animal.treats.length} treat
                  {animal.treats.length > 1 ? "s" : ""}
                </h4>
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
          </div>
        )}
        <div>
          <p
            onClick={handleShowQuestion}
            className="gradient-text gradient-5 text-align-center margin-0"
          >
            {"continue >"}
          </p>
          {/* <Button buttonText={"Subscribe"} gradientNum={6} /> */}
        </div>
      </div>
    </div>
  );
}
