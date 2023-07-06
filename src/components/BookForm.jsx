import React, { useContext } from "react";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import AdultsDropdown from "./AdultsDropdown";
import KidsDropdown from "./KidsDropdown";
import { RoomContext } from "../context/RoomContext";

const BookForm = () => {
  const { handleClick } = useContext(RoomContext);
  return (
    <form className="w-full h-[300px] lg:h-[70px] ">
      <div className="w-full h-full flex flex-col lg:flex-row ">
        <div className="flex-1 h-full lg:border-r">
          <CheckIn />
        </div>
        <div className="flex-1 h-full lg:border-r">
          <CheckOut />
        </div>
        <div className="flex-1 h-full lg:border-r">
          <AdultsDropdown />
        </div>
        <div className="flex-1 h-full lg:border-r">
          <KidsDropdown />
        </div>
        <button
          type="submit"
          className="btn btn-primary py-3"
          onClick={(e) => handleClick(e)}
        >
          Check now
        </button>
      </div>
    </form>
  );
};

export default BookForm;
