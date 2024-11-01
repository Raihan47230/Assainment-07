import PropTypes from "prop-types";

import Single from "./single";
const Selected = ({ click, hendleDelete }) => {
  return (
    <div className="container mx-auto py-32 rounded-lg">
      <div className="bg-gray-100 gap-10 px-2">
        {click.map((s) => (
          <Single key={s.playerId} hendleDelete={hendleDelete} s={s}></Single>
        ))}
      </div>
      <button className="btn bg-lime-400 font-bold text-2xl">
        {" "}
        Add more players
      </button>
    </div>
  );
};
Selected.propTypes = {
  click: PropTypes.array,
  hendleDelete: PropTypes.func,
  handleAddMore: PropTypes.func,
};
export default Selected;
