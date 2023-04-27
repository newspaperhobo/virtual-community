import { ComponentChildren, FunctionalComponent } from "preact";

interface ButtonProps {
  children: ComponentChildren;
}

const ChipStyleButton: FunctionalComponent<ButtonProps> = ({ children }) => {
  const buttonClassName =
    "bg-black-400 text-black-100 border-black-400 hover:bg-black-300 hover:border-black-300";

  return (
    <button id="btn-default" className={buttonClassName}>
      {children}
    </button>
  );
};

export default ChipStyleButton;
