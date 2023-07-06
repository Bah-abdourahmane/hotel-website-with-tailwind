import { Menu } from "@headlessui/react";
import React, { useContext } from "react";
import { BsChevronDown } from "react-icons/bs";
import { RoomContext } from "../context/RoomContext";

const KidsDropdown = () => {
  const list = [
    { name: "0 kid" },
    { name: "1 kid" },
    { name: "2 Kids" },
    { name: "3 Kids" },
    { name: "4 Kids" },
  ];
  const { kids, setKids } = useContext(RoomContext);
  return (
    <Menu as={"div"} className={"relative w-full h-full bg-white"}>
      <Menu.Button
        className={"flex items-center justify-between w-full h-full px-8"}
      >
        {kids === "0 Kids" ? "No kids" : kids}{" "}
        <BsChevronDown className="text-base text-accent-hover" />
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
            onClick={() => setKids(item.name)}
          >
            {item.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
