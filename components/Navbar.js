import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.png" alt="" />
        </Link>

        <h6
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "xx-large",
          }}
        >
          Timer capsule
        </h6>

        <form className="d-flex mx-auto w-50" role="search">
          <input
            className="form-control me-5"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <Link  to="/profile">
        <img src="/images/profile.png" alt="profile" className="btn me-1" />
        </Link> 
        <img src="/images/setting.png" alt="" className="btn" style={{marginRight:"10px"}}/>
       <Link to="/chat">
        <img src="images/chat1.png" alt="" className="btn"/>
        </Link>
      </div>
    </nav>
  );
}
