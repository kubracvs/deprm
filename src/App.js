import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [veri, setVeri] = useState("");
  const [tarih, setTarih] = useState("");

  // setVeri(res.data[tarih])

  useEffect(() => {

    axios.get("https://deprem.piyanos.com/api")
 

     .then(res=>setVeri(res.data[tarih]))
    // .then(res => console.log(res))

     .catch(err=>console.log(err))

  },[veri,tarih])

 

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-center text-white diplay-3">
              TÜRKİYE SON DEPREMLER RAPORU
            </h2>
            <input
              type=""
              
              className="form-control"
              onChange={(e)=>setTarih(e.target.value)}
            />
            {/* import Table from 'react-bootstrap/Table'; */}
            <table className="table table-striped text-white">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">şehir</th>
                  <th scope="col">şiddet</th>
                  <th scope="col">derinlik</th>
                
                  
                  
                </tr>
              </thead>
              <tbody>
                <tr  className="text-white">
                 
                  <th scope="row" className="text-white" >{veri===undefined ? "veri bekleniyor": veri.date}</th>
                  <th scope="row" className="text-white" >{veri===undefined ? "veri bekleniyor": veri.region}</th>
                  <th scope="row" className="text-white" >{veri===undefined? "veri bekleniyor": veri.intensity}</th>
                  <th scope="row" className="text-white" >{veri===undefined? "veri bekleniyor": veri.depth}</th>
                  
                 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
