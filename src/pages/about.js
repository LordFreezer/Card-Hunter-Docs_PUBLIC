import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'



const AboutPage = ({ data }) => {

    return (
        <Layout>
            <Head title="About" />
            <h1>About The Team</h1>
            <p> add team info here</p>
            <h1>About The App</h1>
            <p> add app readme here</p>

        </Layout>
    )
}
export default AboutPage

