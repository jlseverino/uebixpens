import React from 'react'
import { useParams } from 'react-router';
import HeaderViews from '../components/home/HeaderViews'
import HomeFormEditExpend from '../components/home/HomeFormEditExpend';

const HomeEditExpend = () => {

    let {id} = useParams();

    return (
        <>
            <HeaderViews />
            <HomeFormEditExpend id={id} />
        </>
    )
}

export default HomeEditExpend