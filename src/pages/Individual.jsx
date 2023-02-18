import React from 'react';
import Newbar from '../components/Navbar';
import Ind_Consultation from '../components/Ind_Consultation';
import Schedule2 from '../components/Schedule2';
import Footer from '../components/Footer';


export default function Individual() {
  return (
    <div>
      <Newbar />
      <Ind_Consultation />
      <Schedule2 />
      <Footer />
    </div>
  );
}
