import React, { useEffect, useState } from "react";

const ListItems = () => {
  const [veri, setVeri] = useState([]);
  const [tarih, setTarih] = useState("");
  const BASE_URL = "https://deprem.piyanos.com/api";

  useEffect(() => {
    if (tarih !== "") {
      fetch(`${BASE_URL}?date=${tarih}`)
        .then((res) => res.json())
        .then((data) => setVeri(data))
        .catch((err) => console.error(err));
    } else {
      // Hiçbir tarih girilmediğinde son 500 depremi getir
      fetch(`${BASE_URL}?limit=500`)
        .then((res) => res.json())
        .then((data) => setVeri(data))
        .catch((err) => console.error(err));
    }
  }, [tarih]);

  const listem =
    veri.length === 0 ? (
      <tr>
        <td colSpan="7" className="text-center text-white">
          Girilen tarihe ait veri bulunamadı veya son 500 depremin ötesine geçti.
        </td>
      </tr>
    ) : (
      veri.map((item, index) => (
        <tr key={index} className="text-white">
          <th scope="row" className="text-white">
            {index + 1}
          </th>
          <td className="text-white">{item.date}</td>
          <td className="text-white">{item.time}</td>
          <td className="text-white">{item.city}</td>
          <td className="text-white">{item.region}</td>
          <td className="text-white">{item.intensity}</td>
          <td className="text-white">{item.depth}</td>
        </tr>
      ))
    );

  return (
    <div className="list">
      <div className="container">
        <div className="md-8 mx-auto mt-4">
          <h2 className="text-center text-white display-3">
            TÜRKİYE SON DEPREMLER RAPORU
          </h2>
          <input
            type="text"
            className="form-control"
            placeholder="YYYY.MM.DD"
            onChange={(e) => setTarih(e.target.value)}
          />
          <table className="table table-striped text-white table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tarih</th>
                <th scope="col">Saat</th>
                <th scope="col">Şehir</th>
                <th scope="col">Konum</th>
                <th scope="col">Şiddet</th>
                <th scope="col">Derinlik</th>
              </tr>
            </thead>
            <tbody>{listem}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
