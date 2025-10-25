import './App.css'
import { useRef } from "react"
import { BiMenuAltRight } from "react-icons/bi";
import { FaUserClock } from "react-icons/fa6";
import { FaSyringe } from "react-icons/fa";
import { SiBasicattentiontoken } from "react-icons/si";
import { SiCcleaner } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';

import { FaLinkedin, FaStar } from "react-icons/fa";
import {  FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { RiMenu3Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaInstagram } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { GoDash } from "react-icons/go";


import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper/modules';



function App() {

  const showRef = useRef(null);

  const showNav = () => {
    showRef.current.classList.toggle('responsive')
  }
 const CloseNav = () => {
    showRef.current.classList.remove('responsive')
  }
  

  return (
    <>

    <section id='hero'>
                  <nav>
      <img className='logo' src="oar.png" alt="" />
    
      <ul ref={showRef}>
        <li><a onClick={CloseNav} href="">Home</a></li>
        <li><a onClick={CloseNav} href="">About</a></li>
        <li><a onClick={CloseNav} href="">Services</a></li>
        <li><a onClick={CloseNav} href="">Doctors</a></li>
        <li><a onClick={CloseNav} href="">Appointment</a></li>
        <li><a onClick={CloseNav} href="">Contact</a></li>
     
      </ul>
      <BiMenuAltRight onClick={showNav} className='menu' />
    </nav>

      <div className='hero'>

      <div className='hero-intro'>
        <h1>Compassionate Care, <span>Modern Medicine</span></h1>
        
        <p>At oar medical clinic, we provide quality healthcare with a personal touch — combining advanced medical expertise and genuine compassion to keep you and your family healthy.</p>
      </div>

      <div className='hero-button'>
        <button className="appointment">Book Appointment</button>
        <button className='contact-us'> Contact Us</button>
      </div>


      </div>
    </section>

    <section id='experience'>
      <div className='experience-grid'>
        <div>
          <h2>15</h2>
          <p>Years of Experience</p>
        </div>

        <div>
          <h2>10+</h2>
          <p>Expert Doctors</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Medical Staff</p>
        </div>
        <div>
          <h2>200+</h2>
          <p>Patient Capacity</p>
        </div>

      </div>

    </section>

    <section id='about'>
      <div className='about-grid'>
        <div className='img-div'>
          <img src="about-img.jpg" alt="" />
        </div>

        <div className='about-text'>
          <div className="about-hd">
            <h4>About Us</h4>
                      <h3>Dedicated to Your Health, Committed to Your Care</h3>

          </div>
          <p>At oar medical clinic, we believe that quality healthcare begins with compassion. Our team of experienced medical professionals is committed to providing personalized care using modern medical practices and state-of-the-art facilities.

From routine checkups to advanced treatments, we focus on delivering reliable, patient-centered care in a comfortable and welcoming environment. Every visit is guided by our promise — to treat every patient with respect, empathy, and excellence.

Your health is our priority — today and always.</p>

<div className='mission-vision'></div>
<h3>Mission And Vision Statement</h3>
<p>Our goal and thoughts
To provide world-class healthcare services to all age groups by dedicated and compassionate staff for improvement in the health status of our community.

To provide prompt medical services at all times to all cadres of clients irrespective of financial or social status. To be the healthcare facility of choice for routine community-based family health services</p>

        </div>

      </div>
    </section>

    <section id='why'>
      <div className="why-intro">
        <h4>Why Choose Us</h4>
        <h3>Compassionate Care You Can Trust</h3>
        
      </div>
      <div className='why-grid'>
        <div className="why-card">
          <div className='icon-div'>
             <FaUserClock className='why-icon' />

          </div>
          <div className='why-content'>
            <h4>Experienced Professionals</h4>
            <p>Our team of qualified doctors and specialists are dedicated to your well-being.</p>
          </div>
        </div>
                <div className="why-card">
          <div className='icon-div'>
             <FaSyringe className='why-icon' />

          </div>
          <div className="why-content">
            <h4>Modern Facilities</h4>
            <p>We use up-to-date equipment and techniques for accurate diagnosis and effective treatment.</p>
          </div>
        </div>
        <div className="why-card">
          <div className='icon-div'>
             <SiBasicattentiontoken className='why-icon' />

          </div>
          <div className="why-content">
            <h4>Personalized Attention</h4>
            <p>Every patient receives care tailored to their specific needs.</p>
          </div>

        </div>
        <div className="why-card">
          <div className='icon-div'>
             <SiCcleaner className='why-icon' />

          </div>
          <div className='why-content' >
            <h4>Clean & Comfortable Environment</h4>
            <p>We maintain a calm, hygienic, and welcoming atmosphere for all visitors.</p>

          </div>
        </div>


      </div>
    </section>

    <section id='services'>
      <div className='services-intro'>
        <h4>Our Services</h4>
        <h3>Comprehensive Care for Every Stage of Life</h3>
        <p>At oar medical center, we offer a wide range of healthcare services designed to meet your unique needs. From preventive care to advanced diagnostics and treatment, our team is dedicated to keeping you and your family healthy.</p>

      </div>

      <div className="services-grid">
        <div className="services-card">
          <div className="services-img">
            <img src="diabetes.jpg" alt="" />
          </div>

          <div className="services-content">
          <h3>Diabetes Care</h3>

          </div>
        </div>
        <div className="services-card">
          <div className="services-img">
            <img src="child-care.jpg" alt="" />
          </div>
          <div className="services-content">
          <h3>Child Care</h3>

          </div>

        </div>
        <div className="services-card">
          <div className="services-img">
            <img src="radiography.jpg" alt="" />

          </div>
          <div className="services-content">
            <h3>Radiography</h3>

          </div>

        </div>

        <div className="services-card">
          <div className="services-img">
            <img src="surgery.jpg" alt="" />
          </div>

          <div className="services-content">
            <h3>Surgery Department</h3>

          </div>

        </div>
        <div className="services-card">
          <div className="services-img">
            <img src="diagnostic.jpg" alt="" />
          </div>

          <div className="services-content">
            <h3>Lab Diagnostic</h3>

          </div>

        </div>

        <div className="services-card">
          <div className="services-img">
            <img src="consult.jpg" alt="" />
          </div>
          <div className='services-content'>
            <h3>Medical Consult</h3>

          </div>

        </div>





      </div>

      <div className='services-button'>
        <button>Show All</button>

      </div>
    </section>

    <section id="doctors">
      <div className="doctors-intro-grid">
        <div className="doctors-intro">
          <h4>Our Doctors</h4>
          <h3>Experienced. Compassionate. Dedicated to Your Health.</h3>
          <p>At oar Medical Center, our team of qualified and experienced doctors is committed to providing exceptional healthcare with compassion and expertise.
Each member of our medical staff brings years of experience, advanced training, and a deep dedication to patient well-being.

We believe that great care starts with great people — professionals who listen, understand, and deliver personalized treatment you can trust.</p>
<strong className='strong'>Meet the experts who make your health their mission.</strong>

<div className="doctors-btn">
  <button className="appointment">Book An Appointment</button>
  <button className='contact-us'>Show Doctors</button>
</div>
        </div>

        <div className='doctors-intro-img'>
          <img src="doctors-intro.jpg" alt="" />

        </div>
      </div>

      <div className="doctors-carousel">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="doctor-card">
            <div className="doctor-img">
            <img src="doctor7.jpg" alt="" className="doctor-i" />

            </div>
            <div className="doctor-info">
              <h2>Dr. abcde efg</h2>
              <h4>Chief Surgeon</h4>
              <p> 10 years experience and 2000+ work hours</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="doctor-card">
            <div className="doctor-img">
            <img src="doctor1.jpg" alt="" className="doctor-i" />

            </div>
                        <div className="doctor-info">
              <h2>Dr. abcde efg</h2>
              <h4>Chief Surgeon</h4>
              <p> 10 years experience and 2000+ work hours</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="doctor-card">
            <div className="doctor-img">
            <img src="doctor2.jpg" alt="" className="doctor-i" />

            </div>
                        <div className="doctor-info">
              <h2>Dr. abcde efg</h2>
              <h4>Chief Surgeon</h4>
              <p> 10 years experience and 2000+ work hours</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="doctor-card">
            <div className="doctor-img">
            <img src="doctor3.jpg" alt="" className="doctor-i" />

            </div>
                        <div className="doctor-info">
              <h2>Dr. abcde efg</h2>
              <h4>Chief Surgeon</h4>
              <p> 10 years experience and 2000+ work hours</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="doctor-card">
            <div className="doctor-img">
            <img src="doctor4.jpg" alt="" className="doctor-i" />

            </div>
                        <div className="doctor-info">
              <h2>Dr. abcde efg</h2>
              <h4>Chief Surgeon</h4>
              <p> 10 years experience and 2000+ work hours</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="doctor-card">
            <div className="doctor-img">
            <img src="doctor4.jpg" alt="" className="doctor-i" />

            </div>
                        <div className="doctor-info">
              <h2>Dr. abcde efg</h2>
              <h4>Chief Surgeon</h4>
              <p> 10 years experience and 2000+ work hours</p>
            </div>

          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="doctor-card">
            <div className="doctor-img">
            <img src="doctor5.jpg" alt="" className="doctor-i" />

            </div>
                        <div className="doctor-info">
              <h2>Dr. abcde efg</h2>
              <h4>Chief Surgeon</h4>
              <p> 10 years experience and 2000+ work hours</p>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="doctor-card">
            <div className="doctor-img">
            <img src="doctor6.jpg" alt="" className="doctor-i" />

            </div>
                        <div className="doctor-info">
              <h2>Dr. abcde efg</h2>
              <h4>Chief Surgeon</h4>
              <p> 10 years experience and 2000+ work hours</p>
            </div>

          </div>
        </SwiperSlide>

      </Swiper>

      </div>
    </section>

    <section id="testimonial">
      <div className="testimonial-intro">
        <h4>Our Reviews</h4>
        <h3>What Our Patients Say</h3>
        <p>At OAR Medical Clinic, our patients are at the heart of everything we do.
Here’s what some of them have to say about their experience with our team.</p>
      </div>
      <div className='testimonial-grid'>
        <div className="testimonial-card">
          <div className="testimonial-info">
            <p>“The doctors here truly care about their patients. I was treated with kindness and professionalism from start to finish. I highly recommend OAR Medical Clinic to anyone seeking quality healthcare.”</p>

          </div>

          <div className='profile'>
            <div className="profile-img">
              <img src="surgery.jpg" alt="testimonial-img" />
            </div>
            <div className="profile-content">
              <h4>Mr. Ayobami</h4>
              <p>Medical Assistant</p>
            </div>

          </div>
        </div>
        <div className="testimonial-card middle">
          <div className="testimonial-info">
            <p>“From the receptionist to the nurses and doctors, everyone was so welcoming and attentive. They made me feel comfortable and confident about my treatment.”</p>

          </div>

          <div className='profile'>
            <div className="profile-img">
              <img src="surgery.jpg" alt="testimonial-img" />
            </div>
            <div className="profile-content">
              <h4>Mr. Ayobami</h4>
              <p>Medical Assistant</p>
            </div>

          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-info">
            <p>“The clinic is spotless and equipped with modern facilities. I received my results quickly, and the staff explained everything clearly.”</p>

          </div>

          <div className='profile'>
          <div className="profile-img">
          <img src="surgery.jpg" alt="testimonial-img" />
          </div>

            <div className="profile-content">
              <h4>Mr. Ayobami</h4>
              <p>Medical Assistant</p>
            </div>


          </div>

          </div>

          </div>

    </section>

    <section id='contact'>
      <div className="contact-intro">
        <h3>Fill Out The Form To Sign Up</h3>
        <p>At OAR Medical Clinic, your health and comfort come first.
Whether you have a question, need medical advice, or want to book an appointment — we’re just a message away.</p>
      </div>

            <div className="contact-grid">
        <div data-aos = "fade-right" className="contact-form">
          <div className="form-intro">
            <h4>Get In Touch with Us</h4> 

          </div>
          <div className="name">
          <input placeholder="First Name" type="text" />
          <input placeholder="Last Name" type="text" />
          </div>
          <input placeholder="Pick A Date" type="date" />
          <input placeholder="Email" type="email" />
          <textarea cols={15} rows={10} placeholder="Send Us A Message" name="" id=""></textarea>
          <input className="submit" type="submit" />

        </div>

        <div data-aos = "fade-left" className="contact-details">
          <div className="contact-details-intro">
          <h4>Contact Details</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsam aperiam dignissimos cupiditate provident doloribus. Doloribus quas deleniti laudantium, a commodi harum ullam excepturi. Cumque sapiente aliquam ad numquam nemo! </p>

          </div>

          <div className="contact-details-icons">
            <div className="icon-details-div">
              <div className="icon-div">
               <FaLocationDot className="icons"/>

              </div>
               <div className="contact-details-content">
               <h4>Address</h4>
               <p>61z Abimbola Awoliyi Estate,lagos</p>

               </div>

            </div>
                        <div className="icon-details-div">
              <div className="icon-div">
               <FaPhone className="icons"/>

              </div>
               <div className="contact-details-content">
               <h4>Phone</h4>
               <p>09113097228</p>

               </div>

            </div>
            <div className="icon-details-div">
              <div className="icon-div">
               <FaClock className="icons"/>

              </div>
               <div className="contact-details-content">
               <h4>Availability</h4>
               <p>Mon-Fri 8:00am - 5:30pm</p>

               </div>

            </div>
            <div className="icon-details-div">
              <div className="icon-div">
               <MdEmail className="icons"/>

              </div>
              <div className="contact-details-content">
               <h4>Email</h4>
               <p>chukwuwetaluprayet@hmail.com</p>

              </div>


            </div>


          </div>
        </div>



      </div>


    </section>
    <footer class="footer">
  <div class="footer-container">
    <div class="footer-col">
      <img src="oar.png" alt="" />
      <p>
        Delivering spotless spaces with care, precision, and eco-friendly cleaning
        solutions. Trusted by homes and businesses across the city.
      </p>
    </div>

    <div class="footer-col">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h3>Contact Us</h3>
      <ul>
        <li>📞 +234 812 345 6789</li>
        <li>📧 support@mendoscleaning.com</li>
        <li>📍 Lagos, Nigeria</li>
      </ul>
    </div>

    <div class="footer-col">
      <h3>Follow Us</h3>
      <div class="socials">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    © <span id="year"></span> Mendos Cleaning Limited. All rights reserved.
  </div>
</footer>


    </>
  )
}

export default App
