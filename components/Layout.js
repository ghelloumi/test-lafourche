import Head from 'next/head'
import React from 'react'
import {APP_TITLE} from '../constants'

const Layout = (props) => (
    <>
        <Head>
            <title> {APP_TITLE} </title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main>
            {props.children}
        </main>
    </>
)
export default Layout;