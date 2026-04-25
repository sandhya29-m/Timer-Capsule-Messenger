export default function Marriage() {
  return (
    <>
      <div className="container template-wrap">
        <div className="row g-4">

          <div className="col-lg-6">
            <div className="panel">
              <h5 className="mb-3">Marriage Invitation</h5>

              <input
                className="form-control mb-3"
                defaultValue="Together with our families"
              />
              <input
                className="form-control mb-3"
                defaultValue="Aarav & Meera"
              />
              <input
                className="form-control mb-3"
                defaultValue="Are Getting Married"
              />

              <div className="row g-2 mb-3">
                <input
                  className="form-control col"
                  defaultValue="18 August 2025"
                />
                <input
                  className="form-control col"
                  defaultValue="7:00 PM"
                />
              </div>

              <textarea
                className="form-control mb-3"
                defaultValue="The Grand Ballroom, Bengaluru"
              ></textarea>

              <input
                className="form-control"
                defaultValue="Your presence will make our day special"
              />
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center">
            <div className="preview-frame">
              <div
                className="preview-bg"
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/736x/91/9c/10/919c103af5991183b1e5adff8d8f7f06.jpg')"
                }}
              >
                <div className="invite-card">
                  <div>Together with our families</div>
                  <div className="invite-name">Aarav & Meera</div>
                  <div>Are Getting Married</div>
                  <div className="my-2">18 August 2025 • 7:00 PM</div>
                  <div>The Grand Ballroom, Bengaluru</div>
                  <div className="invite-footer">
                    Your presence will make our day special
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