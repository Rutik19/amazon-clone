import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home--container">
        <img
          className="home--image"
          src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg"
          alt="homeimage"
        />
        <div className="home--row">
          <Product
            id="01"
            title="Samsung Galaxy M52 5G"
            price={25999}
            image="https://m.media-amazon.com/images/I/71b5BwTCcZL._SX679_.jpg"
          />
          <Product
            id="02"
            title="OPPO A55"
            price={15499}
            image="https://m.media-amazon.com/images/I/71WImHX0laL._SY879_.jpg"
          />
          <Product
            id="03"
            title="Redmi Note 10T 5G"
            price={16999}
            image="https://m.media-amazon.com/images/I/41hZ6iTHOKL.jpg"
          />
        </div>
        <div className="home--row">
          <Product
            id="04"
            title="boAt Airdopes 171 TWS Earbuds"
            price={1799}
            image="https://m.media-amazon.com/images/I/61A48m3XfSS._SX679_.jpg"
          />
          <Product
            id="05"
            title="Noise ColorFit Pulse Spo2 Smart Watch"
            price={1699}
            image="https://m.media-amazon.com/images/I/61epn29QG0L._SX679_.jpg"
          />
        </div>
        <div className="home--row">
          <Product
            id="06"
            title="Mi 80 cm (32 inches) Horizon Edition"
            price={15499}
            image="https://m.media-amazon.com/images/I/91EPNWiKDUL._SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
