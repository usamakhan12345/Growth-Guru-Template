import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import HomeSection from "./Components/Sections/HomeSection/HomeSection";
import Offer from "./Components/Offer/Offer";
import Support from "./Components/Support/Support";
import Help from "./Components/Help/Help";
import Talent from "./Components/Talent/Talent";
import ReadyToScale from "./Components/ReadytoScale/ReadyToScale";
import Policy from "./Components/Policy/policy";
import Count from "./Components/Count/Count";
import MeetUp from "./Components/MeetUp/MeetUp";
import SimplePricing from "./Components/SimplePricing/SimplePricing";
import Table from "./Components/Table/Table";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";
import { useRef, useState } from "react";
const App = () => {
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const navbarRef = useRef();
  return (
    <div>
      <Navbar />
      <section ref={navbarRef}>
        <HomeSection />
      </section>
      <section>
        <Offer />
      </section>
      <section>
        <Support />
      </section>
      <section>
        <Help />
      </section>
      <section>
        <Talent />
      </section>
      <section>
        <ReadyToScale />
      </section>
      <section>
        <Policy />
      </section>
      <section>
        <Count />
      </section>
      <section>
        <MeetUp />
      </section>
      <section>
        <SimplePricing />
      </section>
      <section>
        <Table />
      </section>
      <section>
        <GetStarted />
      </section>
      <section>
        <MeetUp isGreen={true} />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
