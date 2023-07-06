import { createContext, useEffect, useState } from "react";
import { roomData } from "../dummy";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adult, setAdult] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(Number(adult[0]) + Number(kids[0]));
  }, [adult, kids]);

  const handleClick = (e) => {
    e.preventDefault();
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setRooms(newRooms);
    setLoading(true)
  };
  return (
    <RoomContext.Provider
      value={{ rooms, adult, setAdult, kids, setKids, handleClick }}
    >
      {children}
    </RoomContext.Provider>
  );
};
