import './App.css';
import { ReactNavbar } from "react-responsive-animate-navbar";
import logo from './components/images/logo.png';
import Intro from './components/Home/Intro';
import Albums from './components/Home/Albums';
import Biography from './components/Home/Biography';
import Contact from './components/Home/Contact';
import Newsletter from './components/Home/Newsletter';
import Schedule from './components/Home/Schedule';
import Tickets from './components/Home/Tickets';
import Footer from './components/Home/Footer';

function App() {
  return (
    <div className="app">
      <ReactNavbar
        // color="rgb(25, 25, 25)"
        logo={logo}
        menu={[
          { name: "HOME", to: "#" },
          { name: "TICKETS", to: "#tickets" },
          { name: "BIOGRAPHY", to: "#biography" },
          { name: "SCHEDULE", to: "#schedule" },
          { name: "ALBUMS", to: "#albums" },
          { name: "CONTACT", to: "#contact" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/nazeh-taha/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/nazeh200/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/nazeh_taha/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://nazehtaha.herokuapp.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />
      <Intro id="home" />
      <Tickets id="tickets" />
      <Biography id="biography" />
      <Schedule id="schedule" />
      <Albums id="albums" />
      <Contact id="contact" />
      <Newsletter id="newsletter" />
      <Footer id="footer" />
      
    </div>
  );
}

export default App;
