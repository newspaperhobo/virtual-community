import Button from "@components/Button";
import Link from "@components/Link";
import { useEffect, useState } from "preact/hooks";

export function App() {
  return (
    <div>
      {/* // <div className="bg-red-500 h-screen w-screen m-auto flex">
    //   <div className="w-fit h-fit text-white text-2xl m-auto pb-32">
    //     Clean App
    //   </div> */}
      <Button id="btn-default" className="primary">
        Button Label
      </Button>
      <Button id="btn-default" className="primary">
        Button Label
      </Button>
      <Button id="btn-default" className="secondary">
        Button Label
      </Button>
      {/* <Button className="btn-default chip-style">Button Label</Button>
      <Link className="">Button Label</Link> */}
    </div>
  );
}
