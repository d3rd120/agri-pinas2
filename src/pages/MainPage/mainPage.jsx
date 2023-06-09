import React from 'react';
import MainPageNavigation from '../../components/mainPageNavigation';
import HomeComponent from '../../components/homeComponent';
import PostsComponent from '../../components/postsComponent';
import ContactComponent from '../../components/contactComponent';
import AboutComponent from '../../components/aboutComponent';
const MainPage = () => {

    return (
        <>
        <MainPageNavigation />                    
        <HomeComponent />  
        <AboutComponent />     
        <PostsComponent />        
        <ContactComponent />       
        </>
    );
};

export default MainPage;