import HomeModule from '@/modules/home'
import Head from 'next/head'
import React from 'react'

const Home = () => {
    return (
        <>
            <Head>
                <title>App Name | Home</title>
            </Head>
            <HomeModule/>
        </>
    )
}

export default Home