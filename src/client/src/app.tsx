import {} from "preact/hooks";
import Button from "@components/Button";

export function App() {
  return (
    <div>
    {/* // <div className="bg-red-500 h-screen w-screen m-auto flex">
    //   <div className="w-fit h-fit text-white text-2xl m-auto pb-32">
    //     Clean App
    //   </div> */}
      <Button className="btn-default primary-clicked">Button Label</Button>
      <Button className="btn-default secondary-clicked">Button Label</Button>
    </div>
  );
}
