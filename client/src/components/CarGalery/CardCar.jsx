import "../../css/style.css";

const CardStyle = {
  width: "18rem",
}
const onCard = {
  width: "18rem",
  minHeight: "500px",
}
const imgStyle = {
  height: "190px",
  objectFit: "scaleDown",
}

function rupiah(number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number);
}

const CardCar = (props) => {
console.log(props.cars)
  return (
    <div className="container mt-3">
      <div className="row justify-content-center " id="cars-container">
        {props.cars && props.cars.map((car) => (
          <div className="carContainer mx-2 ms-4 align-items-center" style={CardStyle}>
          <div className="card mx-2 my-2" style={onCard}>
            <img className="card-img-top mt-2" src={car.image} alt="..." style={imgStyle} />
            <div className="card-body">
              <p>{car.manufacture} / {car.model} / {car.type}</p>
              <h5 className="price fw-bold">{rupiah(car.rentPerDay)} / hari</h5>
              <p className="card-text fifty-chars" title="">{car.description}</p>
              <p><img src="/img/fi_users.png" alt="" className="poin mx-2" />{car.capacity} Orang</p>
              <p><img src="/img/fi_gear.png" alt="" className="poin mx-2" />{car.transmission}</p>
              <p><img src="/img/fi_calendar.png" alt="" className="poin mx-2" />Tahun {car.year}</p>
              <a href="#" className="btn green-4 text-white fwbold mt-1 w-100">Pilih Mobil</a>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default CardCar;
