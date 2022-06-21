import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as footerStyles from '../styles/footer.module.scss'
const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
       site{
           siteMetadata{              
                author
                creator
           }
       } 
    }
    `)
    return (
        <footer className={footerStyles.footer}>
            <p><strong>Card Hunter</strong> created by  {data.site.siteMetadata.author}. <strong>Card Hunter Documentation</strong> created by {data.site.siteMetadata.creator}. Copyright 2022</p>
        </footer>
    )
}

export default Footer