import {} from "preact/hooks";
import Button from "@components/Button";
import Link from "@components/Link";

export function App() {
  return (
    <div>
    {/* // <div className="bg-red-500 h-screen w-screen m-auto flex">
    //   <div className="w-fit h-fit text-white text-2xl m-auto pb-32">
    //     Clean App
    //   </div> */}
      <Button className="btn-default primary">Button Label</Button>
      <Button className="btn-default secondary">Button Label</Button>
      <Button className="btn-default chip-style">Button Label</Button>
      <Link className="">Button Label</Link>
    </div>
  );
}
