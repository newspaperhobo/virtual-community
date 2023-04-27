import ChipStyleButton from "@components/ChipStyleButton";
import LinkButton from "@components/LinkButton";
import PrimaryButton from "@components/PrimaryButton";
import SecondaryButton from "@components/SecondaryButton";

export function App() {
  return (
    <div>
      {/* // <div className="bg-red-500 h-screen w-screen m-auto flex">
    //   <div className="w-fit h-fit text-white text-2xl m-auto pb-32">
    //     Clean App
    //   </div> */}
      <PrimaryButton>Button Label</PrimaryButton>
      <SecondaryButton>Button Label</SecondaryButton>
      <ChipStyleButton>Button Label</ChipStyleButton>
      <LinkButton>Click Me!</LinkButton>
    </div>
  );
}
