import React from 'react';
import MainLayout from '../../components/MainLayout';
import Hero from '../home/container/Hero';
import Articles from './container/Articles';
import CTA from '../home/container/CTA';

const Homepage = () =>{
    return <MainLayout>
        <Hero/>
        <Articles/>
        <CTA/>
    </MainLayout>;
}

export default Homepage;