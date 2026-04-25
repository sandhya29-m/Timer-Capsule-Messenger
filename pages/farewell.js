export default function Farewell() {
  return (
    <>
      <div className="container template-wrap">
        <div className="row g-4">

          <div className="col-lg-6">
            <div className="panel">
              <h5 className="mb-3">Farewell Template</h5>

              <input
                className="form-control mb-3"
                defaultValue="Join us to bid a heartfelt farewell"
              />
              <input
                className="form-control mb-3"
                defaultValue="Class of 2025"
              />
              <input
                className="form-control mb-3"
                defaultValue="Farewell Party"
              />

              <div className="row g-2 mb-3">
                <input
                  className="form-control col"
                  defaultValue="30 March 2025"
                />
                <input
                  className="form-control col"
                  defaultValue="6:00 PM"
                />
              </div>

              <textarea
                className="form-control mb-3"
                defaultValue="College Auditorium, Coimbatore"
              ></textarea>

              <input
                className="form-control"
                defaultValue="Let us cherish memories forever"
              />
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center">
            <div className="preview-frame">
              <div
                className="preview-bg"
                style={{
                  backgroundImage:
                    "url('https://img.freepik.com/premium-vector/beautiful-minimalist-floral-frame-border-vector-illustration_1253202-168419.jpg')"
                }}
              >
                <div className="invite-card">
                  <div>Join us to bid a heartfelt farewell</div>
                  <div className="invite-name">Class of 2025</div>
                  <div>Farewell Party</div>
                  <div className="my-2">30 March 2025 • 6:00 PM</div>
                  <div>College Auditorium, Coimbatore</div>
                  <div className="invite-footer">
                    Let us cherish memories forever
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}