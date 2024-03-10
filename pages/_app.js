import '../styles/globals.css';
import Layout from '@/components/layout/Layout';

import React from 'react'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
