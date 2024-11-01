import { useEffect, useState } from "react";
import Players from "./Players";
import PropTypes from "prop-types";

const AllPlayers = ({ hendleClick }) => {
  const [playrs, setPlayrs] = useState([]);
  useEffect(() => {
    fetch("./FakeData.json")
      .then((res) => res.json())
      .then((data) => setPlayrs(data));
  }, []);
  return (
    <div className="mt-10 pb-20 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
        {playrs.map((p) => (
          <Players
            key={p.playerId}
            player={p}
            hendleClick={hendleClick}
          ></Players>
        ))}
      </div>
    </div>
  );
};
AllPlayers.propTypes = {
  hendleClick: PropTypes.func,
};
export default AllPlayers;
