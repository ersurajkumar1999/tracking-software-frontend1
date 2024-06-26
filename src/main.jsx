import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


// import 'swiper/swiper-bundle.min.css';

// Import Swiper styles
// import 'swiper/swiper.min.css';
// import 'swiper/modules/effect-fade/effect-fade.min.css';
// import 'swiper/modules/pagination/pagination.min.css';
import "swiper/css";
import "swiper/css/pagination";



import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
