import PropTypes from "prop-types";
const Players = ({ player, hendleClick }) => {
  const {
    name,
    country,
    image,
    role,
    battingStyle,
    bowlingStyle,
    biddingPrice,
    Profile,
    flag,
  } = player;
  return (
    <div>
      <div>
        <div className="card card-compact bg-base-100 w-96 border shadow-xl">
          <figure className="px-4 mt-2">
            <img
              className="h-96 w-full object-cover rounded-md"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex gap-2">
              <img
                className="h-10 w-10 object-cover rounded-3xl"
                src={Profile}
                alt=""
              />
              <h2 className="card-title font-semibold text-gray-900">{name}</h2>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-3">
                <img
                  className="h-5 w-5 object-cover rounded-full"
                  src={flag}
                  alt=""
                />
                <p className="font-semibold text-gray-900">{country}</p>
              </div>
              <div>
                <p>{role}</p>
              </div>
            </div>

            <hr className="text-blue-300" />
            <h1 className="font-semibold text-gray-900">Rating</h1>
            <div className="flex justify-between">
              {/* <p className="font-semibold text-gray-900">{battingStyle}</p>
                             <p className="font-semibold text-gray-900">{battingStyle}</p> */}
              <div>
                <p className="font-semibold text-gray-900">{battingStyle}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{bowlingStyle}</p>{" "}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-gray-900">
                Price : ${biddingPrice}
              </h4>
              <button
                onClick={() => hendleClick(player)}
                className=" bg-gradient-to-r from-lime-200 to-green-100 px-8 py-2 rounded-lg font-semibold text-gray-900"
              >
                Choose Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Players.propTypes = {
  hendleClick: PropTypes.func,
  player: PropTypes.object,
};
export default Players;
