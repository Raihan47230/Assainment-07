import Logo from "../assets/logo.png";
import dollar from "../assets/DoubleDollar.png";
import PropTypes from "prop-types";
const Header = ({ price }) => {
  return (
    <div className="flex  justify-between  items-center  container mx-auto bg-lime-500 bg-opacity-30 backdrop-blur-3xl sticky top-0 z-10">
      <img src={Logo} alt="" />
      <div className="flex gap-4">
        <div className="flex gap-7 list-none items-center">
          <li className="font-semibold text-gray-900">Home</li>
          <li className="font-semibold text-gray-900">Fixture</li>
          <li className="font-semibold text-gray-900">Teams</li>
          <li className="font-semibold text-gray-900">Schedules</li>
        </div>
        <div className="lg:flex gap-1 bg-slate-200 text-center px-3 py-1 rounded-lg lg:text-lg">
          <h4 className="font-semibold text-gray-900">{price}</h4>
          <p className="font-semibold text-gray-900">Coin</p>
          <img className="mx-auto" src={dollar} alt="" />
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  price: PropTypes.number,
};
export default Header;
