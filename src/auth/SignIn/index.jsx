// import React from 'react'
import SignInPage from '../components/SignInPage'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const SignIn = () => {
  const auth01 ="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";
  const auth02 ="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";
  const auth03 ="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";
  return (
    <>
      <main>
        <div className="row g-0">
          <div className="col-lg-7 vh-100 d-none d-lg-block">
            {/* <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              // className="h-100"
            >
              <SwiperSlide>
                <div className="card rounded-0 h-100" style={{ backgroundImage: `url(${auth01})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}>
                  <div className="bg-overlay bg-dark opacity-5"></div>
                  <div className="card-img-overlay z-index-2 p-7">
                    <div className="d-flex flex-column justify-content-end h-100">
                      <h4 className="fw-light">"With unwavering determination, they navigate the complexities of the industry, forging strategic partnerships and driving transformative change."</h4>
                      <div className="d-flex justify-content-between mt-5">
                        <div>
                          <h5 className="mb-0">Emma Watson</h5>
                          <span>Founder, catalog</span>
                        </div>
                        <ul className="list-inline mb-1">
                          <li className="list-inline-item small me-0"><i className="fa-solid fa-star text-white"></i></li>
                          <li className="list-inline-item small me-0"><i className="fa-solid fa-star text-white"></i></li>
                          <li className="list-inline-item small me-0"><i className="fa-solid fa-star text-white"></i></li>
                          <li className="list-inline-item small me-0"><i className="fa-solid fa-star text-white"></i></li>
                          <li className="list-inline-item small"><i className="fa-solid fa-star-half-alt text-white"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card rounded-0 h-100" style={{ backgroundImage: `url(${auth02})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}>
                  <div className="bg-overlay bg-dark opacity-5"></div>
                  <div className="card-img-overlay z-index-2 p-7">
                    <div className="d-flex flex-column justify-content-end h-100">
                      <h4 className="fw-light">"An exceptional agency CEO is a visionary, constantly pushing the boundaries of creativity and pushing their team to new heights. They inspire with their passion and cultivate a culture of trust and respect."</h4>
                      <div className="d-flex justify-content-between mt-5">
                        <div>
                          <h5 className="mb-0">Carolyn Ortiz</h5>
                          <span>CEO, mizzle</span>
                        </div>
                        <ul className="list-inline mb-1">
                          <li className="list-inline-item small me-0"><i className="fa-solid fa-star text-white"></i></li>
                          <li className="list-inline-item small me-0"><i className="fa-solid fa-star text-white"></i></li>
                          <li className="list-inline-item small me-0"><i className="fa-solid fa-star text-white"></i></li>
                          <li className="list-inline-item small me-0"><i className="fa-solid fa-star text-white"></i></li>
                          <li className="list-inline-item small"><i className="fa-solid fa-star-half-alt text-white"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card rounded-0 h-100" style={{ backgroundImage: `url(${auth03})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}>
                  <div className="bg-overlay bg-dark opacity-5"></div>
                  <div className="card-img-overlay z-index-2 p-7">
                    <div className="d-flex flex-column justify-content-end h-100">
                      <h4 className="fw-light">"Through collaboration and strategic direction, they steer the agency towards its goals, navigating the ever-evolving landscape with agility and grace."</h4>
                      <div className="d-flex justify-content-between mt-5">
                        <div>
                          <h5 className="mb-0">Dennis Barrett</h5>
                          <span>Founder, catalog</span>
                        </div>
                        <ul className="list-inline mb-1">
                          <li className="list-inline-item small me-0"><i className="fa-solid fa-star text-white"></i></li>
                          <li className="list-inline-item small me-0"><i className="fa-solid fa-star text-white"></i></li>
                          <li className="list-inline-item small me-0"><i className="fa-solid fa-star text-white"></i></li>
                          <li className="list-inline-item small me-0"><i className="fa-solid fa-star text-white"></i></li>
                          <li className="list-inline-item small"><i className="fa-solid fa-star-half-alt text-white"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper> */}
          </div>
          <div className="col-sm-10 col-lg-5 d-flex m-auto vh-100">
            <div className="row w-100 m-auto">
              <div className="col-sm-10 my-5 m-auto">

                <a href="index.html"><img src="assets/images/logo-icon.svg" className="h-50px mb-4" alt="logo" /></a>

                <h2 className="mb-0">Welcome back</h2>
                <p className="mb-0">Welcome back, please enter your detail</p>

                <div className="row mt-5">
                  <div className="col-xxl-6 d-grid">
                    <a href="#" className="btn border bg-light mb-2 mb-xxl-0"><i className="fab fa-fw fa-google text-google-icon me-2"></i>Signup with Google</a>
                  </div>
                  <div className="col-xxl-6 d-grid">
                    <a href="#" className="btn border bg-light mb-0"><i className="fab fa-fw fa-facebook-f text-facebook me-2"></i>Signup with Facebook</a>
                  </div>
                  <div className="position-relative my-5">
                    <hr />
                    <p className="small position-absolute top-50 start-50 translate-middle bg-body px-4">Or</p>
                  </div>
                </div>

                <SignInPage />
                <div className="mt-4 text-center">
                  <span>Not registered yet?<a href="sign-up.html"> Create an account</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignIn