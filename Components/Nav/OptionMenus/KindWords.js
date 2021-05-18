import { useContext, useState } from "react";
import { OptionContext } from "../../../lib/context";
import TextArea from "../../Inputs/TextArea";
import AnimalTag from "../../AnimalTag/AnimalTag";
import Send from "../../Images/Svgs/Icons/Send";

export default function KindWords() {
  const { option } = useContext(OptionContext);
  const animal = option.optionData.animal;

  return (
    <div>
      <div className="bottom-margin-medium">
        <h4 className="bottom-margin-small">To:</h4>
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
        <div className="width-90">
          <TextArea id={"message:"} rows={3} />
        </div>
        <span className="display-flex-column align-center cursor-pointer">
          <Send height={20} />
          <h6>Send</h6>
        </span>
      </div>
    </div>
  );
}
