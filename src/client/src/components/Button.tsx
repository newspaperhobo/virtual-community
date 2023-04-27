import { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
  className: string;
  id: string;
};

export default function Button({ children, className, id }: Props) {
  return (
    <div>
      <button id={id} className={className}>
        {children}
      </button>
    </div>
  );
}
