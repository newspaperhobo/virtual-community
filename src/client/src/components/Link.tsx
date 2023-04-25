import { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
  className: string;
};

export default function Link({ children, className }: Props) {
  return (
    <div>
      <a href="#" className={className}>{children}</a>
    </div>
  );
}
