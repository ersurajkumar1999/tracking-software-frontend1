import React from 'react'

const SignInPage = () => {
  return (
    <>
      <form>
        <div className="input-floating-label form-floating mb-4">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="input-floating-label form-floating mb-4 position-relative">
          <input type="password" className="form-control fakepassword pe-6" id="psw-input" placeholder="Enter your password" />
          <label htmlFor="floatingInput">Password</label>
          <span className="position-absolute top-50 end-0 translate-middle-y p-0 me-2">
            <i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
          </span>
        </div>

        <div className="mb-4 d-flex justify-content-between">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="checkbox-1" />
            <label className="form-check-label" htmlFor="checkbox-1">Remember me</label>
          </div>

          <a href="forgot-password.html" className="link-underline-primary"> Forgot password?</a>
        </div>

        <div className="align-items-center mt-0">
          <div className="d-grid">
            <button className="btn btn-dark mb-0" type="button">Login</button>
          </div>
        </div>
      </form>

    </>
  )
}

export default SignInPage