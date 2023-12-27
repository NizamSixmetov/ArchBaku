import React from 'react';
import AboutUs from '../../Components/AboutUs';
// import Button from '../../Components/ButtonUniversal/Button';
import Cap from '../../Components/Cap';
import Header from '../../Components/Header/index';
import HomeNews from '../../Components/HomeNews';
import HomeProjects from '../../Components/HomeProjects';
import HomeServices from '../../Components/HomeServices';
import HomeTechnic from '../../Components/HomeTechnic';
import Empoyees from '../../Components/Employees';
import ContactHome from '../../Components/ContactHome';
import HomeMap from '../../Components/HomeMap';
import Footer from '../../Components/Footer';


const Home = () => {
    return (
        <div>
            <Header />
            <Cap />
            <AboutUs />
            <HomeProjects />
            <HomeServices />
            <HomeTechnic />
            <HomeNews />
            <Empoyees />
            <ContactHome />
            <HomeMap />
            <Footer />
        </div>
    )
};

export default Home;