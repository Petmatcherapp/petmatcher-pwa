import { useContext, useEffect, useState } from "react";
import { OptionContext } from "../../lib/context";
import MobileNavigation from "./OptionMenus/MobileNavigation";
import styles from "./MobileNav.module.css";

export default function MobileNav() {
  const { option, handleOptionChange } = useContext(OptionContext);
  const [disabled, setDisabled] = useState(false);

  const handleMobileNavClick = () => {
    setTimeout(() => {
      setDisabled(false);
    }, 350);
    setDisabled(true);
    if (option.optionStatus === "showOption") {
      setTimeout(() => {
        handleOptionChange({
          ...option,
          OptionComponent: <MobileNavigation />,
          optionStatus: "hideOption",
        });
      }, 350);
      handleOptionChange({ ...option, optionStatus: "hideOption" });
    } else {
      handleOptionChange({
        ...option,
        OptionComponent: <MobileNavigation />,
        optionStatus: "showOption",
      });
    }
  };

  useEffect(() => {
    option.optionStatus === "showOption"
      ? (document.getElementsByTagName("body")[0].style.overflow = "hidden")
      : (document.getElementsByTagName("body")[0].style.overflow = "");
  }, [option]);

  return (
    <>
      <div
        id={`${styles.menuBarContainer}`}
        className="display-flex-row justify-center width-100 cursor-pointer"
      >
        <button
          onClick={handleMobileNavClick}
          id={`${styles.menuBar}`}
          className={
            "border-radius-10 text-align-center clickable-shadow cursor-pointer"
          }
          disabled={disabled}
        >
          <p className="margin-0">
            {option.optionStatus === "showOption" ? "Close" : "Menu"}
          </p>
        </button>
      </div>
      <div className={`${styles.mobileNav} ${option.optionStatus} width-100`}>
        {option.OptionComponent}
      </div>
    </>
  );
}
