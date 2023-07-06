import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";

const Room = ({
  room: { id, name, imageLg, maxPerson, desc, price, size },
}) => {
  return (
    <div className="bg-white shadow-2xl min-h-[500px] group ">
      {/* image wrapper */}
      <div className="overflow-hidden">
        <img
          src={imageLg}
          alt=""
          className="w-full group-hover:scale-110 transition-all duration-300"
        />
      </div>
      {/* Size & people wrapper */}
      <div className="bg-white shadow-lg max-w-[300px] mx-auto h-14 -translate-y-1/2 flex items-center justify-center uppercase font-third tracking-[1px] font-semibold ">
        <div className="w-[80%] flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsArrowsFullscreen className="text-[15px] " />
            </div>
            <div className="flex gap-x-1">
              <div>Size</div>
              <div>{size}m2</div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsPeople className="text-[18px] " />
            </div>
            <div className="flex gap-x-1">
              <div>Max People</div>
              <div>{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>
      {/* name & desc */}
      <div className="text-center">
        <Link to={`/room/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
          {desc.slice(0, 56)}
        </p>
        <Link
          to={`/room/${id}`}
          className="btn btn-secondary btn-sm max-w-[240px] mx-auto "
        >
          Book now from ${price}
        </Link>
      </div>
    </div>
  );
};

export default Room;
