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
  const [showSuccess, setShowSuccess] = useState(false);

  const handleTextAreaChange = (e) => {
    setDisabled(checkOnlyWhiteSpace(e.target.value));
  };

  const handleSend = () => {
    showSuccess === false ? setShowSuccess(true) : setShowSuccess(false);
  };

  return (
    <div className="display-flex-column align-center justify-center">
      <div
        className={`${
          !showSuccess ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
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
          <div className="width-90 margin-right-small">
            <TextArea
              onChange={(e) => handleTextAreaChange(e)}
              id={`Remarks for ${animal.name} 💛`}
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
      <div className={`${showSuccess ? "opacity-100" : "opacity-0"} absolute`}>
        {/* <p>Test</p> */}
        <p>{animal.name} got your love 💛</p>
        <p>
          {animal.gender === "female" ? "She" : "He"} really appreciates it 😽
        </p>
      </div>
    </div>
  );
}
