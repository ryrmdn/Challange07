import '../../css/style.css';
import { useEffect, useState } from "react";
import CardCar from "../../components/CarGalery/CardCar";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux";

function CardFilter() {
  const [type, setType] = useState("Pilih Tipe Driver");
  const [date, setDate] = useState("Pilih Waktu");
  const [pickupTime, setPickupTime] = useState("7");
  const [passenger, setPassenger] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type !== "Pilih Tipe Driver") {
      const pass = passenger ? passenger : "0";
      const filter = { type, date, pickupTime, pass };
      dispatch(fetchUsers(filter));
    }
  };
  const handleType = (event) => {
    setType(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handlePickupTime = (event) => {
    setPickupTime(event.target.value);
  };
  const handlePassenger = (event) => {
    setPassenger(event.target.value);
  };

  useEffect(() => {
    console.log(state.cars);
  }, [state]);

  return (
    <>
      <section className="container">
        <div className="card card-pesan mx-auto">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <label for="">Tipe Driver</label>
                <select className="form-select" id="driver" value={type} onChange={handleType} required>
                  <option value="">Pilih Tipe Driver</option>
                  <option className="option-item" value="1">Dengan Driver</option>
                  <option className="option-item" value="2">Tanpa Driver</option>
                </select>
              </div>
              <div className="col">
                <label for="">Tanggal</label>
                <input type="date" className="form-control" id="date" onChange={handleDate} required />
              </div>
              <div className="col">
                <label for="">Pilih Waktu</label>
                <select value={pickupTime} onChange={handlePickupTime} className="form-select time" name="time" id="time">
                  <option value="7">07.00 WIB</option>
                  <option value="8">08.00 WIB</option>
                  <option value="9">09.00 WIB</option>
                  <option value="10">10.00 WIB</option>
                  <option value="11">11.00 WIB</option>
                  <option value="12">12.00 WIB</option>
                </select>
              </div>
              <div className="col">
                <label for="">Jumlah Penumpang</label>
                <input type="number" id="passenger" className="form-control" placeholder="Jumlah Penumpang" value={passenger} onChange={handlePassenger} />
              </div>
              <div className="col">
                <button className="btn green-4 text-white fw-bold mt-3">Cari
                  Mobil</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {state.cars && <CardCar cars={state.cars} />}
    </>
  )
}

export default CardFilter;