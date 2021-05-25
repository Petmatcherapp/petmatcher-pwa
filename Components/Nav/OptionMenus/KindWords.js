import { useContext, useState } from "react";
import { OptionContext } from "../../../lib/context";
import TextArea from "../../Inputs/TextArea";
import AnimalTag from "../../AnimalTag/AnimalTag";
import Send from "../../Images/Svgs/Icons/Send";
import { checkOnlyWhiteSpace } from "../../../lib/functions";

export default function KindWords() {
  const { option } = useContext(OptionContext);
  const animal = option.optionData.animal;
  const [disabled, setDisabled] = useState(true);
  const [showKindWords, setShowKindWords] = useState(
    "opacity-100 display-block"
  );
  const [showSuccess, setShowSuccess] = useState("opacity-0 display-none");

  const handleTextAreaChange = (e) => {
    setDisabled(checkOnlyWhiteSpace(e.target.value));
  };

  const handleSend = () => {
    setShowSuccess("display-flex-column opacity-0");
    setTimeout(() => {
      setShowSuccess("opacity-100");
    }, 100);
    setShowKindWords("display-block opacity-0");
  };

  return (
    <div className="display-flex-column">
      <div className={`${showKindWords} transition-opacity`}>
        <div className="bottom-margin-medium">
          <AnimalTag
            avatar={animal.avatar}
            name={animal.name}
            alias={animal.alias}
            type={animal.type}
            gender={animal.gender}
            blackText={true}
            onClick={false}
          />
        </div>
        <h4 className="bottom-margin-small"></h4>
        <div className="display-flex-row align-end">
          <div className="margin-right-small">
            <TextArea
              onChange={(e) => handleTextAreaChange(e)}
              id={`Your remarks to ${animal.name} ❤️`}
              rows={3}
            />
          </div>
          <button
            onClick={handleSend}
            disabled={disabled}
            className={`${
              disabled ? "opacity-50" : "opacity-100"
            } display-flex-column align-center cursor-pointer transition-opacity`}
          >
            <Send height={25} />
            <h6>Send</h6>
          </button>
        </div>
      </div>
      <div className={`${showSuccess} absolute transition-opacity`}>
        <p className="text-align-center">{animal.name} got your love 💚</p>
      </div>
    </div>
  );
}
