import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="container py-4">
  <h1 className="mb-4">Profile</h1>

  <div className="row g-4 align-items-start">

    <div className="col-md-4 d-flex flex-column left-column">

      <div className="card shadow-sm">
        <div className="card-body text-center">
          <div id="avatarPreview"
               className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3">
            A
          </div>

          <div className="d-flex justify-content-center gap-2 mb-2">
            <label className="btn btn-outline-primary btn-sm mb-0">
              Upload
              <input id="avatarInput" type="file" accept="image/*" hidden/>
            </label>
            <button id="removeAvatar" className="btn btn-outline-secondary btn-sm">Remove</button>
          </div>

          <div className="small text-muted mb-3">
            PNG/JPG up to 10MB. Cropped to circle at display time.
          </div>

          <hr/>

          <label className="form-label text-start w-100">Full name</label>
          <input className="form-control mb-3" type="text" placeholder="Name"/>

          <label className="form-label text-start w-100">Display name (optional)</label>
          <input className="form-control" type="text"/>

          <div className="small text-muted mt-2">
            Used in mentions & public profile 
          </div>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h6 className="fw-bold mb-2">Connected Apps</h6>
          <p className="small text-muted mb-3">Manage linked communication apps</p>

          <div className="app-row mb-2">
            <div className="d-flex align-items-center gap-2">
              <div className="bg-success rounded-circle" style={{width:"10px",height:"10px"}}></div>
              <span className="fw-semibold">WhatsApp</span>
            </div>
            <button id="connectWhatsappBtn" className="btn btn-outline-primary btn-sm">Connect</button>
          </div>

          <div className="small text-muted">
            Status: <span className="fw-semibold" id="waStatus">Not Connected</span>
          </div>
        </div>
      </div>

    </div>
    <div className="col-md-8 d-flex flex-column right-column">

      <div className="card shadow-sm">
        <div className="card-body">
          <label className="form-label">Email</label>
          <input className="form-control mb-3" type="email" placeholder="name@example.com"/>

          <label className="form-label">Phone Number</label>
          <input className="form-control mb-3" type="tel" placeholder="+91 "/>

          <label className="form-label">Time Zone</label>
          <select className="form-select">
            <option>Asia/Kolkata</option>
            <option>UTC</option>
            <option>America/New_York</option>
            <option>Europe/London</option>
          </select>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <label className="form-label">Preferred Delivery Method</label>

          <div className="d-flex flex-wrap gap-2 mb-3">
            <button className="btn btn-outline-primary btn-sm rounded-pill">Email</button>
            <button className="btn btn-outline-primary btn-sm rounded-pill">WhatsApp</button>
            <button className="btn btn-outline-primary btn-sm rounded-pill">SMS</button>
            <button className="btn btn-outline-primary btn-sm rounded-pill">In-App</button>
          </div>

          <label className="form-label">Notification Preferences</label>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="notifEmail"/>
            <label className="form-check-label" htmlFor="notifEmail">Email Notifications</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="notifPush"/>
            <label className="form-check-label" htmlFor="notifPush">Push Notifications</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="notifSms"/>
            <label className="form-check-label" htmlFor="notifSms">SMS Notifications</label>
          </div>
        </div>
      </div>

      <div className="mt-4 d-flex justify-content-center">
        <button className="btn btn-primary save-btn">Save Profile</button>
      </div>

    </div>

  </div>
</div>
    </>
  );
}
