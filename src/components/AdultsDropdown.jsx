import { Menu } from "@headlessui/react";
import { useContext } from "react";
import { BsChevronDown } from "react-icons/bs";
import { RoomContext } from "../context/RoomContext";



const AdultsDropdown = () => {
  const list = [
    { name: "1 Adult" },
    { name: "2 Adults" },
    { name: "3 Adults" },
    { name: "4 Adults" },
  ];
  const { adult, setAdult } = useContext(RoomContext);
  return (
    <Menu as={"div"} className={"relative w-full h-full bg-white"}>
      <Menu.Button
        className={"flex items-center justify-between w-full h-full px-8"}
      >
        {adult} <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className={" bg-white absolute w-full flex flex-col z-50"}
      >
        {list.map((item, index) => (
          <Menu.Item
            as={"li"}
            className={
              "border-b last-of-type:border-b-0 py-2 cursor-pointer hover:bg-accent hover:text-white text-center"
            }
            key={index}
            onClick={() => setAdult(item.name)}
          >
            {item.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
