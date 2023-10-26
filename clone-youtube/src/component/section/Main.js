import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import Search from './Search'

const Main = (props) => {
    return (
        <HelmetProvider>
            <Helmet 
                titleTemplate="%s | Webs Youtube" 
                defaultTitle="Webs Youtube" 
                defer={false}
            >
                {props.title && <title>{props.title}</title>}
                <meta name="description" content={props.description} />
            </Helmet>
            <main id='main' role='main'>
                <Search />
                {props.children}
            </main>
        </HelmetProvider>
    )
}

export default Main