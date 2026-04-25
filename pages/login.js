export default function Login() {
  return (
    <>
      <div className="container login-wrapper">
        <div className="login-card text-center">
          <h5 className="mb-4">Login / Signup</h5>

          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>

            <button type="submit" className="btn btn-dark w-100">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}