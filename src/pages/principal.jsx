import React from 'react'
import 'boxicons/css/boxicons.min.css';
import '../styles/principalstyles.css'
import myPhoto from "../images/jlzg.jpg"
import Certifi from './CardCertifi'
import Down from '../down/JoseZambranoCV.pdf'

function principal() {
;

  return (
    <>
      <div className='containermain'>
        <div className="downCV" style={{ textAlign: "center", marginTop: "20px" }}

        >
          <a href={Down} download={"JoseZambranoCV.pdf"} title='Descarga CV'>
            <p>Mi CV</p>
            <i class='bx bxs-cloud-download'></i>
          </a>

        </div>
        <div className='social'>
          <img className='photo' src={myPhoto} alt="" />
          <h1>FullStack Developer</h1>
          <div className='cont'>
            <i class='bx bxs-phone-call' ></i>
            <h3>+593990445117</h3>
          </div>
          <div > <a href="https://www.linkedin.com/in/jlzg/" target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}><i class='icoC bx bxl-linkedin ' style={{ fontSize: "48px" }}></i></a>

            <a href="https://github.com/jlzg1987" target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}>
              <i class='ico bx bxl-github' style={{ fontSize: "48px" }}></i>

            </a>

          </div>
        </div>

        <div className='studios'>
          <Certifi />
        </div>
      </div>
    </>

  )
}

export default principal