import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <>
      <Navbar/>

      <h1
        style={{
          fontFamily: "Georgia, 'Times New Roman', Times, serif",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Your Space for Future Messages.
      </h1>

      <section className="container my-5">
        <h5
          className="mb-3"
          style={{
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
          }}
        >
          Templates
        </h5>

        <div className="row g-4 align-items-center">
          <div className="col-6 col-lg-2">
            <div className="card h-100">
              <img src="/images/birthday.png" className="card-img-top" />
              <div className="card-body text-center">
                <h5 style={{ fontFamily: "Georgia" }}>Birthday</h5>
                <Link to="/birth">
                <a href="#" className="btn btn-primary">
                  Use
                </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <div className="card h-100">
              <img src="/images/wedding.png" className="card-img-top" />
              <div className="card-body text-center">
                <h5 style={{ fontFamily: "Georgia" }}>Wedding</h5>
                <Link to="/marr">
                <a href="#" className="btn btn-primary">
                  Use
                </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <div className="card h-100">
              <img src="/images/graduation.png" className="card-img-top" />
              <div className="card-body text-center">
                <h5 style={{ fontFamily: "Georgia" }}>Graduation</h5>
                <Link to="/gradu">
                <a href="#" className="btn btn-primary">
                  Use
                </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <div className="card h-100">
              <img src="/images/farewell.png" className="card-img-top" />
              <div className="card-body text-center">
                <h5 style={{ fontFamily: "Georgia" }}>Farewell</h5>
                <Link to="/fare">
                <a href="#" className="btn btn-primary">
                  Use
                </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <div className="card h-100">
              <img src="/images/new.png" className="card-img-top" />
              <div className="card-body text-center">
                <h5 style={{ fontFamily: "Georgia" }}>Festivals</h5>
                <Link to="/fest">
                <a href="#" className="btn btn-primary">
                  Use
                </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-auto d-flex align-items-center ms-3">
            <button
              className="btn btn-outline-success"
              style={{ height: "50px", width: "90px" }}
            >
              New
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container my-4">
          <h5 className="mb-3" style={{ fontFamily: "Georgia" }}>
            Your Capsules
          </h5>

          <div className="row g-3">
            <div className="col-auto">
            <Link to="/capsule">
              <div className="btn card" style={{ width: "18rem" }}>
                <img
                  src="/images/short.png"
                  className="card-img-top"
                  alt="Short Term"
                />
                <div className="card-body">
                  <p
                    className="card-text text-center"
                    style={{ fontFamily: "Georgia" }}
                  >
                    Short Term
                  </p>
                </div>
              </div>
              </Link>
            </div>

            <div className="col-auto">
                <Link to="/capsule">
              <div className="btn card" style={{ width: "18rem" }}>
                <img
                  src="/images/long.png" className="card-img-top" alt="Long Term"
                />
                <div className="card-body">
                  <p
                    className="card-text text-center"
                    style={{ fontFamily: "Georgia" }}
                  >
                    Long Term
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
