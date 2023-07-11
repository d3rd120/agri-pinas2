import React from 'react';
import MainPageNavigation from '../../components/mainPageNavigation';
import HomeComponent from '../../components/homeComponent';
import PostComponent from '../../components/postComponent';
import ContactComponent from '../../components/contactComponent';
import AboutComponent from '../../components/aboutComponent';
import { useTranslation } from 'react-i18next';

const MainPage = () => {

    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };
    

    return (
        <>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fil')}>Filipino</button>
        <MainPageNavigation />                    
        <HomeComponent />  
        <AboutComponent />     
        <PostComponent />        
        <ContactComponent />       
        </>
    );
};

export default MainPage;