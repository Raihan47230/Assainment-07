import Backgrounds from "../assets/bg-shadow.png";

const FooterUp = () => {
  return (
    <div className="relative  top-32 container mx-auto rounded-2xl  bg-center  ">
      <div
        style={{ backgroundImage: `url(${Backgrounds})` }}
        className="container mx-auto bg-no-repeat bg-center  py-28  bottom-1 absolute bg-white z-40 rounded-2xl w-4/5 ml-40 border border-r-amber-300 "
      >
        <div className=" text-center">
          <h1 className="font-bold text-2xl mb-5">
            Subscribe to our Newsletter
          </h1>
          <p className="font-semibold text-lg mb-3">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="join">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered join-item"
            />
            <button className="btn bg-gradient-to-r from-red-600 to-yellow-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterUp;
