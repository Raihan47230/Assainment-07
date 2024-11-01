import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import FooterUp from "./components/FooterUp";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [active, setActive] = useState({
    Available: true,
    status: "active",
  });
  const handleActive = (status) => {
    if (status == "Available") {
      setActive({
        Available: true,
        status: "active",
      });
    } else {
      setActive({
        Available: false,
        status: "active",
      });
    }
  };

  const [click, setClick] = useState([]);
  console.log(click);
  const hendleBtn = () => {
    toast("Credit added to your account");

    setPrice(price + 900000);
  };
  const [price, setPrice] = useState(0);

  const handleAddPrice = (pr) => {
    setPrice(price - pr);
  };
  const handleRemovePrice = (id) => {
    const Prodacts = click.find((dete) => dete.playerId == id.playerId);
    const newPrice = price + Prodacts.biddingPrice;
    setPrice(newPrice);
  };
  const hendleClick = (data) => {
    const isExist = click.find((pre) => pre.playerId === data.playerId);
    if (price <= 0) {
      toast("No enought money to buy this player.Claim some Credit");
    } else if (!isExist) {
      toast(data.name);
      handleAddPrice(data.biddingPrice);
      const newAddClick = [...click, data];
      setClick(newAddClick);
    } else {
      toast("already exist");
    }
  };
  const hendleDelete = (id) => {
    handleRemovePrice(id);
    const IsDelete = click.filter((del) => del.playerId != id.playerId);
    setClick(IsDelete);
  };

  return (
    <>
      <div className=" py-2">
        <ToastContainer position="top-center" />
        <Header price={price}></Header>
        <Banner hendleBtn={hendleBtn}></Banner>
        <Main
          hendleClick={hendleClick}
          handleActive={handleActive}
          active={active}
          click={click}
          hendleDelete={hendleDelete}
        ></Main>
        <FooterUp></FooterUp>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
