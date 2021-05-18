import { useContext, useState } from "react";
import { OptionContext } from "../../../lib/context";
import TextArea from "../../Inputs/TextArea";
import AnimalTag from "../../AnimalTag/AnimalTag";

export default function KindWords() {
  const { option } = useContext(OptionContext);
  const animal = option.optionData.animal;

  return (
    <div>
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
      <h4 className="bottom-margin-small">
        Send {animal.name} your kind words ❤️
      </h4>
      <div>
        <TextArea rows={2} />
      </div>
    </div>
  );
}
