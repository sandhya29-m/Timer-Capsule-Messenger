import Navbar from "../components/Navbar";

export default function CapsuleDetails() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
  <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
    <div>
      <br/>
      <h3 className="fw-bold mb-1">Birthday Surprise!</h3>
      <div className="text-muted">Template: Birthday Template</div>
    </div>

    <div className="d-flex gap-2">
    <button className="btn btn-outline-primary btn-sm">Edit</button>
    <button className="btn btn-outline-primary btn-sm">Reschedule</button>
    <button className="btn btn-danger btn-sm">Cancel</button>
    </div>

  </div>
</div>
 <div className="container my-4 page-wrapper">
  <div className="row g-4 align-items-stretch">

    <div className="col-lg-8 d-flex flex-column gap-4">
    <div className="bg-white border rounded-4 shadow-sm p-3" style={{minHeight:"220px"}}>
        <div style={{display:"flex", alignitems:"center", gap:"12px", marginbottom:"12px"}}>
          <div className="avatar">A</div>
          <div>
          <div style={{fontweight:"700"}}>Ashh</div>
          <div className="small" style={{fontfamily: "Times New Roman, Times, serif"}}>14/12/25 11:00 am</div>
          </div>
          <div className="ms-auto small">Delivery methods : email,watsapp</div>
        </div>

        <div className="border rounded p-3 mb-3">
          Hey! Sending you lots of love. happy birthday! <br/>
          May god bless you and make your life healthy.<br/>
          Love, Ashh.
        </div>

        <div className="d-flex gap-2">
          <img src="./images/img 1.jpg" width="100" height="100"/>
          <img src="./images/img 3.jpg" width="100" height="100"/>
        </div>
      </div>

      <div className="bg-white border rounded-4 shadow-sm p-3" style={{minheight:"120px"}}>
        <div style={{fontweight:"700"}}>Activity / Delivery log</div>
        <div style={{fontweight:"700", fontfamily: "Times New Roman, Times, serif"}}>14/12/2025, 2:51:00 pm</div>
        <div className="small">Capsule created</div>
      </div>

    </div>
    <div className="col-lg-4 d-flex flex-column gap-4">

      <div className="bg-white border rounded-4 shadow-sm p-3">
        <div className="schedule-row">
          <div>
          <div style={{fontweight:"700"}}>Schedule</div>
          <div className="schedule-sub" style={{fontfamily: "Times New Roman, Times, serif"}}>Next send: 13/12/2025, 12:53:09 am</div>
          <div className="schedule-sub">Recurrence: none</div>
          </div>
          <div className="schedule-status-pill">Pending</div>
        </div>
      </div>

      <div className="bg-white border rounded-4 shadow-sm p-3">
        <h6 className="fw-bold mb-3">Recipients</h6>

        <div className="recipient-row">
          <div className="recipient-left">
            <div className="avatar-circle">A</div>
            <div>
              <div className="recipient-name">Alex</div>
              <div className="recipient-sub" style={{fontfamily: "Times New Roman, Times, serif"}}>+911234567890</div>
            </div>
          </div>
          <div className="recipient-actions">
            <span className="status-pill status-pending">pending</span>
            <button className="logs-btn">Logs</button>
          </div>
        </div>
      <br/>
        <div className="recipient-row">
          <div className="recipient-left">
            <div className="avatar-circle">A</div>
            <div>
              <div className="recipient-name">Ashh</div>
              <div className="recipient-sub" style={{fontfamily: "Times New Roman, Times, serif"}}>+919876543210</div>
            </div>
          </div>
          <div>
            <span className="status-pill status-pending">pending</span>
            <button className="logs-btn">Logs</button>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-4 shadow-sm p-3">
        <div className="fw-bold mb-2">Delivery details</div>
        <div className="small mb-1">Default channel: email</div>
        <div className="small text-muted">
          Provider logs: You can inspect per-recipient attempts in the activity log.
        </div>
      </div>

    </div>

  </div>
</div>
    </>
  );
}
