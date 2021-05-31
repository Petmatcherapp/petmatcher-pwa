import { useState } from "react";
import BasicForm from "./BasicForm";
import MultiStepForm from "./MultiStepForm";
import Checkbox from "../Inputs/Checkbox";
import Select from "../Inputs/Select";
import TextArea from "../Inputs/TextArea";
import SelectMonths from "../Inputs/specific/SelectMonths/SelectMonths";
import TextField from "../Inputs/TextField";
import Action from "../Buttons/Action";
import Button from "../Buttons/Button";
import ConfirmButton from "../Buttons/ConfirmButton";
import WarningButton from "../Buttons/WarningButton";

export default function MasterForm({ formId, miscData }) {
  const template = require(`./FormTemplates/form-${formId}.json`);
  const components = {
    checkbox: Checkbox,
    select: Select,
    textArea: TextArea,
    selectMonths: SelectMonths,
    textField: TextField,
    action: Action,
    button: Button,
    confirmButton: ConfirmButton,
    warningButton: WarningButton,
  };

  const renderForm = () => {
    let formType;
    switch (template.type) {
      case "basic":
        formType = (
          <BasicForm
            miscData={miscData}
            template={template}
            components={components}
          />
        );
        break;
      case "multi-step":
        formType = (
          <MultiStepForm
            miscData={miscData}
            template={template}
            components={components}
          />
        );
    }
    return formType;
  };

  return renderForm();
}
