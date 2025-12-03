import "./Footer.css";
import { FaPhoneVolume, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="left box">
          <div className="upper">
            <div className="topic">About Us 🐾☕</div>
            <p>
              Welcome to a cozy corner where coffee and companionship come together. Our pet café is created for those who believe that the best moments in life are shared—with friends, loved ones, and furry companions.
            </p>
            <p>
              Location : <br />
              <a
                href="https://www.google.com/maps?ll=13.738152,100.62858&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=15415169731299862598"
                target="_blank"
                rel="noreferrer"
              >
                1771/1 ถนนพัฒนาการ แขวงสวนหลวง เขตสวนหลวง <br />
                กรุงเทพฯ 10250
              </a>
            </p>
          </div>
        </div>

        <div className="middle box">
          <div className="lower">
            <div className="topic">Contact us</div>
            <div className="phone">
              <a href="tel:0987978397">
                <FaPhoneVolume /> 098 797 8397
              </a>
            </div>
            <div className="email">
              <a href="mailto:te.kritpanit_st@tni.ac.th">
                <FaEnvelope /> te.kritpanit_st@tni.ac.th
              </a>
            </div>
          </div>
        </div>

        <div className="right box bottom">
          <div className="media-icons">
            <a href="https://www.facebook.com/kritpanit.teerakarttikul.2025?locale=th_TH" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/_laplacez_ " target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/MilkyLatteDesu" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/@laplacez2423" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>

          <div className="bottom">
            <p>Dev by Kritpanit</p>
            <p>
              ©2025 <a href="/">Pet Cafe</a> All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;