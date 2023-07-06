import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs";
// import "../datepicker.css";

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="relative w-full h-full">
      <div className="absolute z-10 right-8 top-1/2 -translate-y-1/2 ">
        <BsCalendar className="text-base text-accent" />
      </div>
      <DatePicker
        className="w-full h-full"
        selected={endDate}
        placeholderText="Check out"
        onChange={(date) => setEndDate(date)}
      />
    </div>
  );
};

export default CheckOut;
