export default function Chat() {
  return (
    <>
      <section className="container-fluid vh-100">
        <div className="row h-100">

          <div
            id="left-panel"
            className="col-12 col-lg-4 border-end p-0 d-flex flex-column h-100"
          >

            <div className="p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">Chats</h5>
                <button className="btn btn-outline-primary btn-sm">New</button>
              </div>
              <input className="form-control" placeholder="Search" />
            </div>

            <div className="flex-grow-1 overflow-auto scroll-area px-2">

              <div className="chat-item">
                <div className="avatar">J</div>
                <div>
                  <div className="fw-semibold">Janani</div>
                  <small>Hey! How are you?</small>
                </div>
              </div>

              <div className="chat-item">
                <div className="avatar">S</div>
                <div>
                  <div className="fw-semibold">Sandhya</div>
                  <small>Let’s meet tomorrow!</small>
                </div>
              </div>

              <div className="chat-item">
                <div className="avatar">A</div>
                <div>
                  <div className="fw-semibold">Ashmitha</div>
                  <small>Let’s meet tomorrow!</small>
                </div>
              </div>

              <div className="chat-item">
                <div className="avatar">S</div>
                <div>
                  <div className="fw-semibold">Sai Divya</div>
                  <small>Let’s meet tomorrow!</small>
                </div>
              </div>

              <div className="chat-item">
                <div className="avatar">P</div>
                <div>
                  <div className="fw-semibold">Priyanga</div>
                  <small>Let’s meet tomorrow!</small>
                </div>
              </div>

              <div className="chat-item">
                <div className="avatar">D</div>
                <div>
                  <div className="fw-semibold">Divya</div>
                  <small>Let’s meet tomorrow!</small>
                </div>
              </div>

              <div className="chat-item">
                <div className="avatar">S</div>
                <div>
                  <div className="fw-semibold">Suresh</div>
                  <small>Let’s meet tomorrow!</small>
                </div>
              </div>

              <div className="chat-item">
                <div className="avatar">A</div>
                <div>
                  <div className="fw-semibold">Akshaya</div>
                  <small>Let’s meet tomorrow!</small>
                </div>
              </div>

              <div className="chat-item">
                <div className="avatar">M</div>
                <div>
                  <div className="fw-semibold">Maha</div>
                  <small>Let’s meet tomorrow!</small>
                </div>
              </div>

              <div className="chat-item">
                <div className="avatar">P</div>
                <div>
                  <div className="fw-semibold">Prateeksha</div>
                  <small>Let’s meet tomorrow!</small>
                </div>
              </div>

              <div className="chat-item">
                <div className="avatar">S</div>
                <div>
                  <div className="fw-semibold">Sai Divya</div>
                  <small>Let’s meet tomorrow!</small>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-8 p-0 d-flex flex-column h-100">

            <div
              id="welcome"
              className="flex-grow-1 d-flex align-items-center justify-content-center text-center"
            >
              <div>
                <h4 className="fw-bold">Welcome to Time Capsule – Chat</h4>
                <p>Select a chat from the left to start messaging.</p>
              </div>
            </div>

            <div id="chat-view" className="d-none d-flex flex-column h-100">

              <div className="p-3 border-bottom d-flex align-items-center gap-2 fw-bold">
                <button className="btn btn-sm btn-outline-secondary d-lg-none">
                  ←
                </button>
                <span>Janani</span>
              </div>

              <div className="flex-grow-1 overflow-auto scroll-area p-3">

                <div className="msg left">
                  Hey!! Are you free tomorrow?
                </div>

                <div className="msg right">
                  Yes! We can meet.
                </div>

              </div>

              <div className="p-3 border-top d-flex gap-2">
                <input className="form-control" placeholder="Type a message" />
                <button className="btn btn-primary">Send</button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}