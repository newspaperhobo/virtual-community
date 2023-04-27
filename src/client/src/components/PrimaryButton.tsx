import { ComponentChildren, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

interface ButtonProps {
  children: ComponentChildren;
}

const PrimaryButton: FunctionalComponent<ButtonProps> = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const buttonClassName = `bg-spi-violet-100 border-spi-violet-100 text-spi-white-100 hover:bg-spi-violet-50 hover:border-spi-violet-50 ${
    isClicked ? "bg-spi-violet-75 border-spi-violet-75 text-spi-white-100" : ""
  }`;

  return (
    <button id="btn-default" className={buttonClassName} onClick={handleClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
