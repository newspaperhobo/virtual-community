import { useState } from "preact/hooks";

interface DropdownItem {
  id: number;
  label: string;
}

const dropdownItems: DropdownItem[] = [
  { id: 2, label: "Public" },
  { id: 3, label: "Friends" },
  { id: 4, label: "Private" },
];

const DropdownMenu = () => {
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item: DropdownItem) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="bg-site-backdrop text-sm text-spi-violet-100 font-semibold px-4 rounded-md inline-flex items-center"
        onClick={toggleMenu}
      >
        <span className="mr-2">
          {selectedItem ? selectedItem.label : "Privacy"}
        </span>
        <svg
          className={`fill-current h-4 w-4 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 12l-6-6h12l-6 6z" />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          {dropdownItems.map((item) => (
            <li
              key={item.id}
              className={`px-4 hover:bg-gray-200 cursor-pointer ${
                selectedItem && selectedItem.id === item.id ? "bg-gray-100" : ""
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
