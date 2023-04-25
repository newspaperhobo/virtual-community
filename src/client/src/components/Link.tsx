import { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
  className: string;
};

export default function Button({ children, className }: Props) {
  return (
    <div>
      <button className={className}>{children}</button>
    </div>
  );
}