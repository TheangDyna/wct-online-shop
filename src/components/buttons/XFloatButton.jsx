import { PlusIcon } from "../icons/PlusIcon";

const XFloatButton = ({ ...props }) => {
  return (
    <button
      className="fixed bottom-20 right-10 btn btn-circle bg-[#717fe0] text-white hover:bg-[#222] border-none shadow-lg btn-lg"
      {...props}
    >
      <PlusIcon className="w-6 h-6" />
    </button>
  );
};

export default XFloatButton;
