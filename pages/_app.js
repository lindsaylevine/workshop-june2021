// pages/_app.js
import React from 'react';
import NextApp from 'next/app';
import { CartProvider } from 'use-shopping-cart';

import { ThemeProvider, BaseStyles } from 'theme-ui';
import theme from '../theme';

import '../styles/globals.css';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CartProvider
          mode='payment'
          cartMode='checkout-session'
          stripe={process.env.NEXT_PUBLIC_STRIPE_API_KEY}
          billingAddressCollection={false}
          successUrl='https://stripe.com'
          cancelUrl='https://twitter.com/dayhaysoos'
          currency='USD'>
          <BaseStyles>
            <Component {...pageProps} />
          </BaseStyles>
        </CartProvider>
      </ThemeProvider>
    );
  }
}
