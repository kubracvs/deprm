// import axios from "axios";
import React, { useEffect, useState } from "react";

const ListItems = () => {
  const [veri, setVeri] = useState([]);
  const [tarih, setTarih] = useState("");
  const BASE_URL = "https://deprem.piyanos.com/api";

 
  

  //   const liste = () => {
  //     <li>
  //       <p className="text-white">
  //         {veri === undefined ? "veri bekleniyor" : veri.date}
  //       </p>
  //       <p className="text-white">
  //         {veri === undefined ? "veri bekleniyor" : veri.region}
  //       </p>
  //       <p className="text-white">
  //         {veri === undefined ? "veri bekleniyor" : veri.intensity}
  //       </p>
  //       <p className="text-white">
  //         {veri === undefined ? "veri bekleniyor" : veri.depth}
  //       </p>
  //     </li>;
  //   };
  useEffect(() => {
    
    fetch(`${BASE_URL}?.date=${tarih}`)
      .then((res) => res.json())
      .then((res) => setVeri(res))
      .then((res) => console.log(res))

      .catch((err) => console.log(err));
  }, [veri,tarih]);
  const listem = veri.map((item) => (

    <tr className="text-white">
      <th scope="row" className="text-white">
        {item === undefined ? "item bekleniyor" : " " }
      </th>
      <th scope="row" className="text-white">
        {item === undefined ? "item bekleniyor" : item.date }
      </th>
      <th scope="row" className="text-white">
        {item === undefined ? "item bekleniyor" : item.time}
      </th>
      <th scope="row" className="text-white">
        {item === undefined ? "item bekleniyor" : item.region}
      </th>
      <th scope="row" className="text-white">
        {item === undefined ? "item bekleniyor" : item.intensity}
      </th>
      <th scope="row" className="text-white">
        {item === undefined ? "item bekleniyor" : item.depth}
      </th>
    </tr>
  ));

  return (
    <div className="list">
      <div className="container">
        <div>
          <div calssName="md-8 mx-auto mt-4">
            <h2 className="text-center text-white diplay-3">
              TÜRKİYE SON DEPREMLER RAPORU
            </h2>
            <input
              type="date"
              className="form-control"
              onChange={(e) => setTarih(e.target.value)}
            />
            <table className="table table-striped text-white table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tarih</th>
                  <th scope="col">Saat</th>
                  <th scope="col">Konum</th>
                  <th scope="col">Şiddet</th>
                  <th scope="col">Derinlik</th>
                </tr>
              </thead>
              <tbody>
               {listem}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
