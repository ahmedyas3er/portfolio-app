import React, {useRef, Component , useEffect} from "react";
import {Container , Row , Col} from 'react-bootstrap';
import { FaMapLocationDot } from "react-icons/fa6";
import { DiYeoman } from "react-icons/di";
import { IoHomeOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import Slider from "react-slick";
import { PiAddressBook } from "react-icons/pi";
import { SlPhone } from "react-icons/sl";
import { SiMinutemailer } from "react-icons/si";
import { IoEarth } from "react-icons/io5";
import 'animate.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from './Footer';





function Home() {
let sliderRef = useRef(null);
const play = () => {
  sliderRef.slickPlay();
};
const pause = () => {
  sliderRef.slickPause();
};

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
};

useEffect(()=> {
  Aos.init({duration: 2000});
},[] );

  return (
    <div>
         {/* ---------------------------------------sec1---------------------------------------------  */}
 <section className='sec1'id="home">
    <Container>
      <Row>
        <Col md={12} sm={12}>
         <h1>Get your way <br/> home worldwide</h1>
         <p>A small river named Duden flows by their place and <br/>supplies it with the necessary regelialia.</p>
         <div class="group">
  <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
    <g>
      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
      ></path>
    </g>
  </svg>
  <input class="input" type="search" placeholder="Search location" />
</div>
        </Col>
      </Row>  
    </Container>
 </section>
 {/* ---------------------------------------sec2---------------------------------------------  */}
<section className='sec2' id="Services">
  <div className='sec2-p1' data-aos="fade-up">
    <h1>Our Services</h1>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
  </div>
<Container>
  <Row>
  <Col lg="3" md="6" sm="12">
      
    <div className='sec2-p2 '  data-aos="fade-up">
    <FaMapLocationDot className='icone' size={100} />
    <h5>Find Places Anywhere in </h5>     <h6> the World</h6> 
    <p>A small river named Duden<br/>   flows by their place and<br/>   supplies it with the necessary <br/>  regelialia.</p>
    </div>
    </Col>
    <Col lg="3" md="6" sm="12">
    <div className='sec2-p3'  data-aos="fade-up">
    <DiYeoman className='icone' size={100} />
    <h5>We have agents</h5>
    <p>A small river named Duden<br/> flows by their place and<br/>   supplies it with the necessary <br/>  regelialia.</p>
    </div>
    </Col>
    <Col lg="3" md="6" sm="12">
    <div className='sec2-p2'  data-aos="fade-up">
    <IoHomeOutline className='icone' size={100} />
    <h5>Buy & Rent Modern in</h5>  <h6> Properties</h6>
    <p>A small river named Duden<br/>   flows by their place and<br/>   supplies it with the necessary <br/>  regelialia.</p>
      </div>
      </Col>
      <Col lg="3" md="6" sm="12">
      <div className='sec2-p3'  data-aos="fade-up">
      <IoWalletOutline className='icone' size={100} />
      <h5>Making Money</h5>
      <p>A small river named Duden<br/>   flows by their place and<br/>   supplies it with the necessary <br/>  regelialia.</p>
      </div>
      
    </Col>
  </Row>
</Container>
</section>

{/* ---------------------------------------sec3---------------------------------------------  */}
<section className='sec3' id="Listing">
<Container>
<div className='sec3-text'>
  <h2>Our Property</h2>
</div>

<Slider ref={slider => (sliderRef = slider)} {...settings}>
       <div>
        <div>
          <div className="divsec3">
           <img src="img/work-1.jpg.webp"/>
           <h4>sale</h4>
          </div>
        </div>
        <div className="divflexy3">
          <div>
            <h5>Fatima Subdivision</h5>
            <h6>$120,000</h6>
            <p>New York</p>
           
          </div>

        </div>
       </div>

       
        <div>
          <div className="divsec3">
           <img src="img/work-2.jpg.webp"/>
           <h4>sale</h4>
        </div>
        <div className="divflexy3">
          <div>
            <h5>Fatima Subdivision</h5>
            <h6>$120,000</h6>
            <p>New York</p>
            
          </div>

        </div>
       </div>

      

       <div>
          <div className="divsec3">
           <img src="img/work-5.jpg.webp"/>
           <h4>sale</h4>
        </div>
        <div className="divflexy3">
          <div>
            <h5>Fatima Subdivision</h5>
            <h6>$120,000</h6>
            <p>New York</p>
    
          </div>

        </div>
       </div>
      </Slider>
    
</Container>
</section>

{/* ---------------------------------------sec4---------------------------------------------  */}

<section className="sec4" id="About">

                 
  <div className="divsec4">
   <div>
<h5 >Choose Your Dream House</h5>
<p>We can manage your dream building A small river named Duden flows by their place</p>
<button class="button2">Search Places</button>
</div>
</div>


</section>
<section>
<Container>
<Row>

  
    <Col lg={6} md={6}  sm={12}>
   
      <div className="divsec4-p2">
    <img src="img/about.jpg.webp"/>
    
    </div>
    </Col>
    <Col lg={6} md={6}  sm={12}>
      <div className="divsec4-p3">
<h5>Stayhome Real Estate <br/> Agency</h5>
<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
<br/> <br/>
Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
<br/> <br/>
A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
<button className="butt2">
  <span>Book</span>
</button>
<button className="butt">
  <span>contact</span>
</button>
</div>
    </Col>

  </Row>
  
</Container>
</section>



{/* ---------------------------------------sec5---------------------------------------------  */}












<section className='sec3' id="Agent">
<div className='sec3-text'>
  <h2>Our Property</h2>
</div>
<div className="slider-container">
<Slider ref={slider => (sliderRef = slider)} {...settings}>
       <div>
        <div>
          <div className="divsec3">
           <img src="img/team-1.jpg (1).webp"/>
           
          </div>
        </div>
        <div className="divflexy3">
          <div>
            <h5> James Stallon</h5>
           
            <p>Listing</p>
           
          </div>

        </div>
       </div>

       
        <div>
          <div className="divsec3">
           <img src="img/team-2.jpg (1).webp"/>
          
        </div>
        <div className="divflexy3">
          <div>
            <h5> James Stallon</h5>
         
            <p>Listingk</p>
            
          </div>

        </div>
       </div>

       <div>
          <div className="divsec3">
           <img src="img/team-3.jpg.webp"/>
          
        </div>
        <div className="divflexy3">
          <div>
            <h5> James Stallon</h5>
         
            <p>Listing</p>
         
          </div>

        </div>
       </div>

       <div>
          <div className="divsec3">
           <img src="img/team-4.jpg.webp"/>
          
        </div>
        <div className="divflexy3">
          <div>
            <h5> James Stallon</h5>
          
            <p>Listing</p>
            
          </div>

        </div>
       </div>

       <div>
          <div className="divsec3">
           <img src="img/team-1.jpg.webp"/>
       
        </div>
        <div className="divflexy3">
          <div>
            <h5> James Stallonn</h5>
            
            <p>Listing</p>
           
          </div>

        </div>
       </div>

       <div>
          <div className="divsec3">
           <img src="img/team-2.jpg.webp"/>
          
        </div>
        <div className="divflexy3">
          <div>
            <h5> James Stallon</h5>
            
            <p>Listing</p>
    
          </div>

        </div>
       </div>
      </Slider>
    </div>

</section>


{/* ---------------------------------------sec6---------------------------------------------  */}
<section className="sec6">

                 
  <div className="divsec6">
   <div>
<h5>Choose Your House for Only $120,000</h5>
<p>Far far away, behind the word mountains, far from the countries <br/>Vokalia and Consonantia, there live the blind texts.


</p>
<button class="buttonn2">Search Places</button>
</div>
</div>


</section>


{/* ---------------------------------------sec7---------------------------------------------  */}

<section className="sec7" id="Contact">


  <div className="divsec7">
<h6>CONTACT</h6>
<h2>Contact Me</h2>
<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

  </div>


<Container>
  <Row>
<Col lg={6} md={6} sm={12}>
  <div className="divflexy7">
  <PiAddressBook className='icone2' size={30}/>
<h5>Address</h5>
<p>198 West 21th Street, Suite 721 New York NY 10016</p>
  </div>

  <div className="divflexy7">
  <SlPhone className='icone2' size={25} />
<h5>Contact Number</h5>
<h6>+ 1235 2355 98</h6>
  </div>

  <div className="divflexy7">
  <SiMinutemailer className='icone2' size={25}/>
<h5>Email Address</h5>
<h6>ahmedyas3er5@gmail.com</h6>
  </div>

  <div className="divflexy7">
  <IoEarth className='icone2' size={30} />
<h5>Website</h5>
<h6>ahmedyas3er5@gmail.com</h6>
  </div>
</Col>
  


<Col lg={6} md={6} sm={12}>
  <div className="divinput">
<div class="input-container">
  <input placeholder="Name" class="input-field" type="text"/>
  <label for="input-field" class="input-label">Enter Name</label>
  <span class="input-highlight"></span>
</div>


<div class="input-container">
  <input placeholder="your email" class="input-field" type="text"/>
  <label for="input-field" class="input-label">Enter Email</label>
  <span class="input-highlight"></span>
</div>

<div class="input-container">
  <input placeholder="subject" class="input-field" type="text"/>
  <label for="input-field" class="input-label">Enter subject</label>
  <span class="input-highlight"></span>
</div>


<div class="input-container">
  <input placeholder="comment" class="input-field" type="text"/>
  <label for="input-field" class="input-label">Enter comment</label>
  <span class="input-highlight"></span>
</div>
</div>
</Col>
  </Row>
</Container>
</section>
<Footer />
    </div>
   
  )
}

export default Home
