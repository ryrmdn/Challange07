import React from 'react';
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import serviceImg from '../../../public/img/icon24hrs.png';
// import Ceklis from '../../public/img/ceklis.png';

function OurService() {
  return (
    <section id="our-service" className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 py-4">
            <img src="/img/service.png" className="img-fluid img-our" alt="Our Service"/>
          </div>
          <div className="col-lg-5 py-4">
            <h2 className="mb-4">Best Car Rental for any kind of trip in Jakarta Barat!</h2>
            <p className="mb-4">Sewa mobil di Jakarta Barat bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <div className="my-1"><img src="/img/ceklis.png" className="poin mx-2 my-1" alt=''/>Sewa Mobil Dengan Supir di Bali 12 Jam</div>
            <div className="my-1"><img src="/img/ceklis.png" className="poin mx-2 my-1" alt=''/>Sewa Mobil Lepas Kunci di Bali 24 Jam</div>
            <div className="my-1"><img src="/img/ceklis.png" className="poin mx-2 my-1" alt=''/>Sewa Mobil Jangka Panjang Bulanan</div>
            <div className="my-1"><img src="/img/ceklis.png" className="poin mx-2 my-1" alt=''/>Gratis Antar - Jemput Mobil di Bandara</div>
            <div className="my-1"><img src="/img/ceklis.png" className="poin mx-2 my-1" alt=''/>Layanan Airport Transfer / Drop In Out</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurService;