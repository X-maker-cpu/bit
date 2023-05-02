import { Box, Typography } from '@mui/material'
import Head from 'next/head';
import React from 'react'

const MyAccount = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Login Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Typography variant="h1">My Account</Typography>
      </Box>
    </>
  );
}

export default MyAccount;