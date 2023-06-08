import React from 'react';
import MainPageNavigation from '../../components/mainPageNavigation';
import HomeComponent from '../../components/homeComponent';
import NewsComponent from '../../components/newsComponent';
import ContactComponent from '../../components/contactComponent';

const MainPage = () => {

    return (
        <>
        <MainPageNavigation />                    
        <HomeComponent />       
        <NewsComponent />        
        <ContactComponent />
        </>
    );
};

export default MainPage;