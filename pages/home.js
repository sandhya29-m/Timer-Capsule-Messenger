import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
  <nav className="navbar bg-body-tertiary">
    <div className="container-fluid d-flex align-items-center">
      <Link to="/" className="navbar-brand">
        <img src="/images/logo.png" alt="" />
      </Link>
      <h6 className="ms-3 " style={{ fontFamily: "Georgia, serif", fontSize: "xx-large" }}>Timer capsule</h6>

      <div className="ms-auto">
        <Link to="/login">
        <button className="btn btn-outline-success">Login</button>
        </Link>
      </div>
    </div>
  </nav>
</header>


      <section>
        <h1 className="text-center mt-5" style={{ fontFamily: "georgia" }}>Capture a message today. Deliver it in the future.</h1>
        <h6 className="text-center mt-2 mb-5" style={{ fontFamily: "georgia", color: "grey" }}>Create templates, add attachments, pick recipients and schedule perfect
          deliveries.</h6>
        <Link to="/dashboard"className="btn btn-primary"style={{ width: "8%",marginLeft: "45%",marginTop: "1px",height: "45px",}}>
  Get Started
</Link>

      </section>

      <section>
  <div className="container">
    <h3
      className="mt-5 mb-5"
      style={{ fontFamily: "Georgia, serif" }}
    >
      Why You’ll Love Time Capsule Messenger
    </h3>

    <div className="row g-4 justify-content-center">

      <div className="col-lg-3 col-md-6">
        <div className="card h-100">
          <div className="card-header fw-bold">Templates</div>
          <div className="card-body">
            <p>Create from Birthday, Wedding, Graduation, Newborn & Festivals.</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card h-100">
          <div className="card-header fw-bold">Scheduling</div>
          <div className="card-body">
            <p>Timezone-aware with reminders and frequency options.</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card h-100">
          <div className="card-header fw-bold">Privacy</div>
          <div className="card-body">
            <p>Private (1 recipient) or Public (multiple contacts).</p>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card h-100">
          <div className="card-header fw-bold">Multi-Channel</div>
          <div className="card-body">
            <p>WhatsApp, Email, SMS or in-app chat. You could chat here too.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      <section>
        <div className="container">
          <h3
            className="ms-2 mt-5 mb-5"
            style={{ fontFamily: "georgia" }}
          >
            How It Works
          </h3>

          <div className="row ">
            <div className="col-3 py-2">
              <div className="card border-light mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header fw-bold">Choose Template</div>
                <div className="card-body">
                  <p className="card-text">
                    Select a default template or create your own.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card border-light mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header fw-bold">Add Recipients</div>
                <div className="card-body">
                  <p className="card-text">
                    Private or public mode with contact inputs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card border-light mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header fw-bold">Schedule Delivery</div>
                <div className="card-body">
                  <p className="card-text">
                    Pick date, time, timezone and frequency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section>
        <div className="container py-4 mt-3">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img
                src="/images/dash.png"
                className="img-fluid rounded shadow-sm"
                style={{ height: "330px", width: "100%", objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className="col-lg-6">
              <h3 style={{ fontFamily: "Georgia, serif" }}>Dashboard</h3>
              <p className="text-muted" style={{ fontSize: "15px" }}>
                Main hub where users access templates, create capsules, and
                manage activity.
              </p>
              <ul style={{ fontSize: "15px", color: "#374151" }}>
                <li>View all templates at a glance</li>
                <li>Create new capsules instantly</li>
                <li>Search templates or capsules</li>
                <li>Track scheduled, sent & failed capsules</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img
                src="/images/sai.jpeg"
                className="img-fluid rounded shadow-sm"
                style={{ height: "330px", width: "100%", objectFit: "cover" }}
                alt=""
              />
            </div>






            <div className="col-lg-6">
              <h3 style={{ fontFamily: "Georgia, serif" }}>Template Editor</h3>
              <p className="text-muted" style={{ fontSize: "15px" }}>
                Edit any selected template with custom text, media, and delivery
                presets.
              </p>
              <ul style={{ fontSize: "15px", color: "#374151" }}>
                <li>Edit message and suggested wording</li>
                <li>Upload images, videos & audio</li>
                <li>Choose delivery medium & privacy</li>
                <li>Preview how the final send will look</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img
                src="/images/ashuu.jpeg"
                className="img-fluid rounded shadow-sm"
                style={{ height: "330px", width: "100%", objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className="col-lg-6">
              <h3 style={{ fontFamily: "Georgia, serif" }}>Capsule Details</h3>
              <p className="text-muted" style={{ fontSize: "15px" }}>
                View the complete information of a saved capsule, including
                message preview, delivery settings, attachments, and recipients.
              </p>
              <ul style={{ fontSize: "15px", color: "#374151" }}>
                <li>Preview full message and view all attachments</li>
                <li>Check delivery method (WhatsApp, Email, SMS)</li>
                <li>View recipients and realtime delivery status</li>
                <li>Modify schedule, edit content, or cancel capsule</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img
                src="/images/chat.png"
                className="img-fluid rounded shadow-sm"
                style={{ height: "330px", width: "100%", objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className="col-lg-6">
              <h3 style={{ fontFamily: "Georgia, serif" }}>In-App Chat</h3>
              <p className="text-muted" style={{ fontSize: "15px" }}>
                When both sender and receiver use the app, capsules turn into
                real-time conversations.
              </p>
              <ul style={{ fontSize: "15px", color: "#374151" }}>
                <li>Send and receive real-time messages</li>
                <li>Share media: images, audio, video & documents</li>
                <li>See delivery and read receipts instantly</li>
                <li>Tap on a message to open related capsule info</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img
                src="/images/profile.jpeg"
                className="img-fluid rounded shadow-sm"
                style={{ height: "330px", width: "100%", objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className="col-lg-6">
              <h3 style={{ fontFamily: "Georgia, serif" }}>Profile Page</h3>
              <p className="text-muted" style={{ fontSize: "15px" }}>
                The profile page lets users manage their personal information,
                privacy settings, preferences, and account options.
              </p>
              <ul style={{ fontSize: "15px", color: "#374151" }}>
                <li>Update avatar, username, and personal bio</li>
                <li>Manage phone/email and notification preferences</li>
                <li>Set default timezone and delivery reminders</li>
                <li>Control privacy, security, and account settings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
