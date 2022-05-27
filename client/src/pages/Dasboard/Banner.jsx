import React from 'react';
import '../../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
  return (
    <section className="container banner blue-4 text-center text-white p-5">
      <h1 className="mb-4">Sewa Mobil di Jakarta Barat Sekarang</h1>
      <p className="banner-text mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a type="button" className="btn green-4 text-white" id="mulaiSewa2">Mulai Sewa Mobil</a>
    </section>
  )
}

export default Banner;