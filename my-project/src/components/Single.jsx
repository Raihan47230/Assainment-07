import PropTypes from "prop-types";

const Single = ({ s, hendleDelete }) => {
  const { name, battingStyle, image, Delete, biddingPrice } = s;
  return (
    <div className="bg-gray-200 font-bold text-lg border border-yellow-200 mt-2 ">
      <div className="flex  justify-between items-center rounded-2xl">
        <div className="border mb-5 flex gap-4 rounded-full items-center">
          <img
            className="h-16 w-16 object-cover rounded-lg"
            src={image}
            alt=""
          />
          <div>
            <h1>{name}</h1>
            <h1>{battingStyle}</h1>
            <h1>${biddingPrice}</h1>
          </div>
        </div>

        <div>
          <img
            onClick={() => hendleDelete(s)}
            className="h-12 w-12 object-cover cursor-pointer"
            src={Delete}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
Single.propTypes = {
  s: PropTypes.func,
  hendleDelete: PropTypes.func,
};
export default Single;

// battingStyle
// :
// "Right-hand bat"
// biddingPrice
// :
// "150000"
// bowlingStyle
// :
// "Right-arm fast"
// country
// :
// "Pakisthan"
// image
// :
// "https://i.ibb.co.com/cJCknFM/BABAR-AZAM-COVER-696x392.webp"
// name
// :
// "babar Azam"
