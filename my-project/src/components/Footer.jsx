import footerLogo from "../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="bg-black px-36 py-24 text-white relative ">
      <img className="mx-auto mt-10 mb-6" src={footerLogo} alt="" />
      <div className="text-center lg:flex lg:justify-between ">
        <div>
          <h6 className="font-bold text-lg ">About us</h6> <br />
          <a className="footer-title link-hover">We are a passionate team</a>
          <br />
          <a className="footer-title link-hover">
            dedicated to providing the best{" "}
          </a>
          <br />
          <a className="footer-title link-hover">services to our customers.</a>
          <br />
        </div>
        <div>
          <h6 className="font-bold text-lg">Quick Links</h6>
          <br />
          <div>
            <a className="footer-title link-hover">
              <li>Home</li>
            </a>{" "}
            <br />
            <a className="footer-title link-hover">
              <li>Services</li>
            </a>{" "}
            <br />
          </div>
          <div>
            <a className="footer-title link-hover">
              <li>About</li>
            </a>{" "}
            <br />
            <a className="footer-title link-hover">
              <li>Contact</li>
            </a>{" "}
            <br />
          </div>
        </div>
        <div>
          <form>
            <h6 className="font-bold text-lg">Subscribe</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="text-white mt-5 footer-title link-hover">
                  Subscribe to our newsletter for the latest updates
                </span>
              </label>
              <div className="join mt-3">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered join-item "
                />
                <button className="btn bg-gradient-to-r from-red-600 to-yellow-400">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <hr className="mt-6 mb-6" />
      <p className="text-white font-semibold text-center">
        @2024 Your Company All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;

{
  /* <footer className="footer bg-base-200 bg-black  p-32">
  
  

<nav>
<h6 className="footer-title">Company</h6>
<a className="link link-hover">About us</a>
<a className="link link-hover">Contact</a>
<a className="link link-hover">Jobs</a>
<a className="link link-hover">Press kit</a>
</nav>
<nav>
<h6 className="footer-title">Legal</h6>
<a className="link link-hover">Terms of use</a>
<a className="link link-hover">Privacy policy</a>
<a className="link link-hover">Cookie policy</a>
</nav>
<form>
<h6 className="footer-title">Newsletter</h6>
<fieldset className="form-control w-80">
<label className="label">
<span className="label-text">Enter your email address</span>
</label>
<div className="join">
<input
  type="text"
  placeholder="username@site.com"
  className="input input-bordered join-item" />
<button className="btn btn-primary join-item">Subscribe</button>
</div>
</fieldset>
</form>
</footer> */
}
