// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home = () => {
  return (

    <>
      <section className="pt-0">
        <Swiper
          // modules={[Pagination]}
          effect="fade"
          speed={1000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          className="swiper overflow-hidden"
        >
          <SwiperSlide>
            <div
              className="card overflow-hidden min-vh-100 rounded-0"
              style={{
                background: 'url(https://jamtechtechnologies.com/assets/images/homepage.webp) no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Bg overlay */}
              <div className="bg-overlay bg-linear-overlay"></div>
              {/* Card image overlay */}
              <div className="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-11 col-lg-8 col-xl-7 text-center m-auto">
                      <span className="bg-white bg-opacity-10 text-white small rounded-3 px-3 py-2">🚀 #World's best software agency</span>
                      {/* Title */}
                      <h1 className="text-white display-4 my-4">Leading the Way in <span className="text-primary">software</span> innovation</h1>
                      <p className="text-white mb-5">
                        Whether you're a gaming enthusiast or simply seeking an extraordinary escape from reality, our Virtual VR product is your portal to endless excitement.
                      </p>
                      <a className="btn btn-lg btn-white icon-link icon-link-hover mb-0" href="#">
                        Get started now<i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card overflow-hidden min-vh-100 rounded-0"
              style={{
                background: 'url(https://jamtechtechnologies.com/assets/images/homepage.webp) no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Bg overlay */}
              <div className="bg-overlay bg-linear-overlay"></div>
              {/* Content */}
              <div className="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-11 col-lg-8 mt-auto">
                      {/* Title */}
                      <h1 className="text-white display-4 mb-4">
                        Empower Your <span className="fw-light">Business</span> with <span className="fw-light">Innovation</span>
                      </h1>
                      <p className="text-white mb-5">
                        Whether you're a gaming enthusiast or simply seeking an extraordinary escape from reality, our Virtual VR product is your portal to endless excitement.
                      </p>
                      <a className="btn btn-lg btn-primary icon-link icon-link-hover mb-0" href="#">
                        Explore Our Services<i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slider Pagination */}
          <div className="swiper-pagination swiper-pagination-line position-absolute bottom-0 mb-3"></div>
        </Swiper>
      </section>
      <section>

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
          <div
              className="card overflow-hidden min-vh-100 rounded-0"
              style={{
                background: 'url(https://jamtechtechnologies.com/assets/images/homepage.webp) no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Bg overlay */}
              <div className="bg-overlay bg-linear-overlay"></div>
              {/* Card image overlay */}
              <div className="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-11 col-lg-8 col-xl-7 text-center m-auto">
                      <span className="bg-white bg-opacity-10 text-white small rounded-3 px-3 py-2">🚀 #World's best software agency</span>
                      {/* Title */}
                      <h1 className="text-white display-4 my-4">Leading the Way in <span className="text-primary">software</span> innovation</h1>
                      <p className="text-white mb-5">
                        Whether you're a gaming enthusiast or simply seeking an extraordinary escape from reality, our Virtual VR product is your portal to endless excitement.
                      </p>
                      <a className="btn btn-lg btn-white icon-link icon-link-hover mb-0" href="#">
                        Get started now<i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>

        </Swiper>
      </section>
    </>


  )
}

export default Home