export default function Festival() {
  return (
    <>
      <div className="container template-wrap">
        <div className="row g-4">

          <div className="col-lg-6">
            <div className="panel">
              <h5 className="mb-3">Festival Template</h5>

              <input className="form-control mb-3" defaultValue="Warm wishes on the occasion of" />
              <input className="form-control mb-3" defaultValue="Diwali Celebration" />
              <input className="form-control mb-3" defaultValue="Festival of Lights" />

              <div className="row g-2 mb-3">
                <input className="form-control col" defaultValue="01 November 2025" />
                <input className="form-control col" defaultValue="6:30 PM" />
              </div>

              <textarea className="form-control mb-3" defaultValue="Community Hall, Coimbatore"></textarea>

              <input className="form-control" defaultValue="Let us celebrate joy and light" />
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center">
            <div className="preview-frame">
              <div
                className="preview-bg"
                style={{
                  backgroundImage:
                    "url('https://tse2.mm.bing.net/th/id/OIP.gFe2lNz77o7L-d7IRR-WkwAAAA?cb=ucfimg2&ucfimg=1&w=352&h=626&rs=1&pid=ImgDetMain&o=7&rm=3')"
                }}
              >
                <div className="invite-card">
                  <div>Warm wishes on the occasion of</div>
                  <div className="invite-name">Diwali Celebration</div>
                  <div>Festival of Lights</div>
                  <div className="my-2">01 November 2025 • 6:30 PM</div>
                  <div>Community Hall, Coimbatore</div>
                  <div className="invite-footer">Let us celebrate joy and light</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}