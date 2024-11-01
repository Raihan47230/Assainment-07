import PropTypes from "prop-types";
import AllPlayers from "./Players/AllPlayers";
import Selected from "./Selected";
// import Selected from "../components/Selected "

const Main = ({ hendleClick, handleActive, active, click, hendleDelete }) => {
  return (
    <div className="mt-10 container mx-auto mb-52  relative">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl text-gray-900 ">
          {active.Available ? (
            <p>Available Players</p>
          ) : (
            <p>Selected Player({click.length}/6)</p>
          )}{" "}
        </h2>
        <div className="flex gap-3 bg-slate-300 px-5 py-2 rounded-lg ">
          <button
            onClick={() => handleActive("Available")}
            className={`${
              active.Available
                ? "btn bg-gradient-to-r from-lime-400 to-green-400"
                : "btn "
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleActive("Selected")}
            className={`${
              active.Available
                ? "btn"
                : "btn bg-gradient-to-r from-lime-400 to-green-400"
            }`}
          >
            Selected ({click.length})
          </button>
        </div>
      </div>

      {active.Available ? (
        <AllPlayers hendleClick={hendleClick}></AllPlayers>
      ) : (
        <Selected click={click} hendleDelete={hendleDelete}></Selected>
      )}
    </div>
  );
};
Main.propTypes = {
  hendleClick: PropTypes.func,
  handleActive: PropTypes.func,
  active: PropTypes.any,
  click: PropTypes.any,
  hendleDelete: PropTypes.func,
};
export default Main;
