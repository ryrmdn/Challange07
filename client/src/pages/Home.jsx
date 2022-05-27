import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className='App blue-1'>
      <div className="container-fluid">
        <div className="row home-content pt-5 mt-5">
          <div className="col-lg my-auto">
            <h1>Sewa & Rental Mobil Terbaik di kawasan Jakarta Barat</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <a className="green-4 btn  text-white fw-bold" id="mulaiSewa" href="/cars">Mulai Sewa Mobil</a>
          </div>
          <div className="col-lg mt-4">
            <img className="img-fluid" src="/img/car.png" alt="..."/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;