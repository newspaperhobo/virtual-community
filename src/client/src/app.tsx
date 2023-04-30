import {} from "preact/hooks";
import DropdownMenu from "@components/ShareSettingsDropdown";

export function App() {
  return (
    // <div className="bg-red-500 h-screen w-screen m-auto flex">
    //   <div className="w-fit h-fit text-white text-2xl m-auto pb-32">
    //     Clean App
    //   </div>
    // </div>
    <div>
      <DropdownMenu></DropdownMenu>
    </div>
  );
}
