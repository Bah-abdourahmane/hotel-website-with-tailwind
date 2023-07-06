import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import { FaCheck } from "react-icons/fa";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();
  const room = rooms.find((room) => room.id === Number(id));
  const { name, desc, facilities, imageLg, price } = room;
  console.log(imageLg);
  return (
    <div>
      <div className="flex items-center justify-center h-[560px] relative ">
        <img
          src={imageLg}
          alt=""
          className="w-full h-full absolute  object-cover object-center"
        />
        <div className="absolute w-full h-full bg-black/40"></div>
        <h1 className="z-20 text-6xl font-primary text-center text-white">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row w-full h-full py-10 lg:py-20 gap-10">
        <div className="w-full h-full lg:w-[60%] shrink-0">
          <h2 className="h2 px-5 lg:px-0">{name}</h2>
          <p className="mb-2 px-5 lg:px-0">{desc}</p>
          <img src={imageLg} alt="" className="w-full h-full" />
          <div className="mt-12 px-5 lg:px-0">
            <h3 className="h3 mb-2">Room Facilities</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              totam earum amet debitis. Enim sequi provident consectetur dolores
              adipisci magni! A delectus officiis eaque explicabo ipsum
              reprehenderit quod quae aliquid.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
              {facilities?.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="text-3xl text-accent shrink-0"></item.icon>
                  <span className="text-base">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:w-[40%] shrink-0 px-5 lg:px-0">
          <div className="py-8 px-6 bg-accent/20 mb-12 flex flex-col gap-4">
            <h3>Your Reservation</h3>
            <div className="h-14">
              <CheckIn />
            </div>
            <div className="h-14">
              <CheckOut />
            </div>
            <div className="h-14">
              <AdultsDropdown />
            </div>
            <div className="h-14">
              <KidsDropdown />
            </div>
            <button className="btn btn-lg btn-primary">
              book now for ${price}
            </button>
          </div>
          <h3 className="h3">Hotel Rules</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus voluptatum suscipit sit.
          </p>
          <div className="space-y-2 mt-4">
            <div className="flex items-center gap-3">
              <FaCheck className="text-accent" />
              <span>Check-in: 3:00 PM - 9:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheck className="text-accent" />
              <span>Check-out: 10:00 AM</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheck className="text-accent" />
              <span>No Pets</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheck className="text-accent" />
              <span>No smoking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
