import { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
  className: string;
  e: object;
};

export default function Button({ children, className, e }: Props) {
  return (
    <div>
        <button {e ? className="btn primary-clicked" : {className}}>{children}</button>
    </div>
  );
}
