import Backgrounds from "../assets/bg-shadow.png";

import banner from "../assets/banner-main.png";

const Banner = ({ hendleBtn }) => {
  return (
    <div className="mt-10 container mx-auto">
      <div
        className="bg-cover bg-black z-10 py-10 rounded-2xl"
        style={{ backgroundImage: `url(${Backgrounds})` }}
      >
        <div className="text-center ">
          <img className="mx-auto mt-10 mb-10" src={banner} alt="" />
          <h1 className="font-bold text-4xl text-gray-100 mt-2">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="font-semibold text-2xl mt-10 text-gray-200">
            Beyond Boundaries Beyond Limits
          </p>
          <button
            className="mt-16 font-bold bg-gradient-to-r from-lime-400 to-green-400 px-4 py-2 rounded-lg ring ring-yellow-300 outline-white "
            onClick={hendleBtn}
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
