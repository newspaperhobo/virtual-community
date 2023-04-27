import { ComponentChildren, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

interface ButtonProps {
  children: ComponentChildren;
}

const SecondaryButton: FunctionalComponent<ButtonProps> = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const buttonClassName = `bg-spi-white-100 text-spi-violet-100 border-spi-violet-100 hover:border-spi-violet-50 hover:text-spi-violet-50 ${
    isClicked ? "bg-spi-white-100 border-spi-violet-75 text-spi-violet-75" : ""
  }`;

  return (
    <button id="btn-default" className={buttonClassName} onClick={handleClick}>
      {children}
    </button>
  );
};

export default SecondaryButton;
