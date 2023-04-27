import { ComponentChildren, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

interface ButtonProps {
  children: ComponentChildren;
}

const LinkButton: FunctionalComponent<ButtonProps> = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const linkClassName = `text-spi-violet-100 underline decoration-solid text-sm hover:text-spi-violet-50 ${
    isClicked ? "text-spi-violet-75" : ""
  }`;

  return (
    <div>
      <a href="#" className={linkClassName} onClick={handleClick}>
        {children}
      </a>
    </div>
  );
};

export default LinkButton;
