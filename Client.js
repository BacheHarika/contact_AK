import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamMember from "./TeamMember";
import image1 from "./images/img1.jpeg";
import image2 from "./images/img2.jpeg";
import image3 from "./images/img3.jpeg";
import image4 from "./images/img4.jpeg";
import image5 from "./images/img5.jpeg";
import image6 from "./images/img6.jpg";
import image7 from "./images/img7.jpeg";
import image8 from "./images/img8.jpeg"
import image9 from "./images/img9.jpeg"
import image10 from "./images/img10.jpeg";
import image11 from "./images/img11.jpeg"

import "./Client.css";

function ClientComponent() {

  const teamDetails = [
    {
      id: 1,
      name: "Vindo Kumar K",
      role: "Operation Head, Technical",
      imageSrc:  image2 
    },
    {
      id: 2,
      name: "Naveen",
      role: "Naveen Java Tech stack",
      imageSrc: image10
    },
    {
      id: 3,
      name: "Sudheer",
      role: "Operation Head & Technical Expert",
      imageSrc:  image5 
    }
    , {
      id: 4,
      name: "Mounica",
      role: "Front-End Architecture",
      imageSrc:  image4 
    },
    {
      id: 5,
      name: "Harika",
      role: "Front-End Architecture",
      imageSrc:  image6 
    },
    {
      id: 6,
      name: "Prakash",
      role: "Software Developer",
      imageSrc:  image7 
    },
    {
      id: 7,
      name: "Harish k",
      role: "Ui Developer",
      imageSrc:  image8 
    }, {
      id: 8,
      name: "Harish B",
      role: "Front End Developer",
      imageSrc:  image11 
    },
    {
      id: 9,
      name: "Priya k",
      role: "Front End Developer",
      imageSrc:  image9 
    }
  ]

  const settings = {
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    
  };

  return (

    <div className="container text-dark mt-4">
      <h3 className="text-center">
        <strong style={{ color: "lightgreen" }}>  OUR TEAM</strong>
      </h3>

      <div className="notes mt-3 ">
        <p className="text-dark">
          "Our team specializes in providing comprehensive solutions during
          on-site visits to your location. With over 4 years of hands-on
          experience, our dedicated real-time developers ensure 100% on-time
          delivery, surpassing deadlines and meeting cost expectations. We
          excel in providing doorstep service support, handling
          IT projects 24/7. From academic projects to core IT works, we
          guarantee optimal results. Our team is adept at managing tasks
          cost-effectively, with a commitment to excellence.
          Explore the best places during your visit to our
          location, including
          <span className="text-success">Tadipatri</span>,
          <span className="text-success">Anathapuram</span>,
          <span className="text-success">Guntur</span>,
          <span className="text-success">Nellore</span>,
          <span className="text-success">Vijayawada</span>,
          <span className="text-success">Pulivendula</span>, and
          <span className="text-success">Kadapa</span>. It's great that you offer a
          wide range of expertise in different domains such as
          <span className="text-success">Reactjs</span> ,         <span className="text-success">Python Django</span>,
          <span className="text-success">Java Full stack</span>,
          <span className="text-success">.NET</span>,
          <span className="text-success">Angular</span>,
          <span className="text-success">testing</span>,
          <span className="text-success">MySQL</span>,
          <span className="text-success">SQL</span>,
          <span className="text-success">ML</span>, <span className="text-success">DL</span>
          , and <span className="text-success">R</span>. Offering 24/7 support is also
          a valuable aspect for clients who may need assistance at any time."
        </p>
      </div>

      <Slider {...settings} className="slider">
        {teamDetails.map((card,index) => (
          <TeamMember teamDetails={card} key={card.id}  style={index === 0 ? { marginLeft: '50px' } : {}}/>

        ))}
      </Slider>
    </div>
  );
}

export default ClientComponent;
