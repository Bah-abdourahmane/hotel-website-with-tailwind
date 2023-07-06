import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import Room from "./Room";

const Rooms = () => {
  const { rooms } = useContext(RoomContext);
  return (
    <div className="px-[15px] lg:py-24 py-5">
      <div className="container mx-auto lg:px-0">
        <div className="text-center">
          <h2 className="font-third uppercase text-base tracking-[6px] ">Hotel & Spa Adina</h2>
          <h1 className="font-primary text-5xl mb-4">Room & Suite</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Room room={room} key={room.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
