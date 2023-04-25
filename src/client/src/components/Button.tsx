import { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
  className: string;
  e: object;
};

export default function Button({ children, className }: Props) {
  return (
    <div>
        <button className={className}>{children}</button>
    </div>
  );
}
