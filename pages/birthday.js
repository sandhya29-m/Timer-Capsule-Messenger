export default function Birthday() {
  return (
    <>
      <div className="container template-wrap">
        <div className="row g-4">

          <div className="col-lg-6">
            <div className="panel">
              <h5 className="mb-3">Birthday Template</h5>

              <input
                className="form-control mb-3"
                defaultValue="Join us to celebrate"
              />
              <input
                className="form-control mb-3"
                defaultValue="Jubby"
              />
              <input
                className="form-control mb-3"
                defaultValue="1st Birthday"
              />

              <div className="row g-2 mb-3">
                <input
                  className="form-control col"
                  defaultValue="25 February 2024"
                />
                <input
                  className="form-control col"
                  defaultValue="5:00 PM"
                />
              </div>

              <textarea
                className="form-control mb-3"
                defaultValue="Coimbatore"
              ></textarea>

              <input
                className="form-control"
                defaultValue="It gives us immense pleasure to invite you all"
              />
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center">
            <div className="preview-frame">
              <div
                className="preview-bg"
                style={{
                  backgroundImage:
                    "url('https://tse1.mm.bing.net/th/id/OIP.IqfnaHktDjeyJDIZZX4HJwAAAA')"
                }}
              >
                <div className="invite-card">
                  <div>Join us to celebrate</div>
                  <div className="invite-name">Jubby</div>
                  <div>1st Birthday</div>
                  <div className="my-2">25 February 2024 • 5:00 PM</div>
                  <div>Coimbatore</div>
                  <div className="invite-footer">
                    It gives us immense pleasure to invite you all
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