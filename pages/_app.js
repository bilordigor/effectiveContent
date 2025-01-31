//import '../styles/globals.css'
import React from 'react';
import Head from "next/head";
import PropTypes from 'prop-types';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'mobx-react'
import { useStore } from '../store'
//import 'fontsource-roboto';
import Context from '../store'
import { inject, observer } from 'mobx-react'
import CssBaseline from '@material-ui/core/CssBaseline';

import "../styles/globals.css"


import '../styles/styles.css';
import '@react-page/editor/lib/index.css';
// import plugin css. We recommend to do that
// where you import the plugin itself,
// but there is a problem currently preventing us from do so,
// but that only applies to this example project
// see https://github.com/vercel/next.js/issues/19717
import '@react-page/plugins-background/lib/index.css';
import '@react-page/plugins-html5-video/lib/index.css';
import '@react-page/plugins-spacer/lib/index.css';
import '@react-page/plugins-video/lib/index.css';
import '@react-page/plugins-image/lib/index.css';
import '@react-page/plugins-slate/lib/index.css';
import 'katex/dist/katex.min.css';


const MyApp = (observer(({ Component, pageProps }) => {

  const store = useStore(pageProps.initialState)
  // let dark = store.settingsNew.darkTheme

  // const theme = createMuiTheme({
  //   palette: {
  //     mode: dark ? 'dark' : 'light'
  //   }
  // })

  // const dark = false

  // const theme = createMuiTheme({
  //   palette: {
  //     mode: dark ? 'dark' : 'light'
  //   },
  //   main: {
  //     palette: {
  //       main: {
  //         main: dark ? '#3f50b5' : '#3f50b5',
  //         background: dark ? '#121212' : '#fafafa',
  //       },
  //       header: {
  //         main: dark ? '#373737' : '#3f50b5',
  //         secondary: dark ? '#3f50b5' : '#3f50b5',
  //         text: dark ? '#e0e0e0' : '#424242',
  //         icon: dark ? '#e0e0e0' : '#424242',
  //         background: dark ? '#373737' : '#3f50b5',
  //         border: dark ? '#9e9e9e' : '#e0e0e0',
  //       },
  //       navbar: {
  //         main: dark ? '#323232' : '#eeeeee',
  //         secondary: dark ? '#3f50b5' : '#3f50b5',
  //         text: dark ? '#e0e0e0' : '#424242',
  //         icon: dark ? '#e0e0e0' : '#424242',
  //         iconMenu: dark ? '#e0e0e0' : '#e0e0e0',
  //         background: dark ? '#323232' : '#eeeeee',
  //         border: dark ? '#9e9e9e' : '#e0e0e0',
  //       },
  //       content: {
  //         main: dark ? '#2c2c2c' : '#f5f5f5',
  //         secondary: dark ? '#3f50b5' : '#3f50b5',
  //         text: dark ? '#e0e0e0' : '#424242',
  //         reverseText: dark ? '#424242' : '#e0e0e0',
  //         icon: dark ? '#e0e0e0' : '#424242',
  //         background: dark ? '#2c2c2c' : '#eeeeee',
  //         border: dark ? '#9e9e9e' : '#e0e0e0',
  //       },
  //       buttons: {
  //         main: dark ? '#212121' : '#f5f5f5',
  //         secondary: dark ? '#3f50b5' : '#3f50b5',
  //         text: dark ? '#e0e0e0' : '#424242',
  //         icon: dark ? '#e0e0e0' : '#424242',
  //         background: dark ? '#212121' : '#9e9e9e',
  //       },
  //       textaria: {
  //         main: dark ? '#212121' : '#f5f5f5',
  //         text: dark ? '#e0e0e0' : '#424242',
  //         icon: dark ? '#e0e0e0' : '#424242',
  //         secondary: dark ? '#3f50b5' : '#3f50b5',
  //         background: dark ? '#36393f' : '##bdbdbd',
  //       },
  //       help: {
  //         red: dark ? '#b71c1c' : '#e57373',
  //         redbackground: dark ? 'rgb(183, 28, 28, .2)' : 'rgb(183, 28, 28, .2)',
  //         redbutton: dark ? 'rgb(183, 28, 28, .8)' : 'rgb(183, 28, 28, .8)',
  //         green: dark ? '#357a38' : '#4caf50',
  //       }
  //     }
  //   }

  //});


  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        {/* <title>
          Ξ Effect
        </title> */}
        <meta name="Keywords" content="Образованиие, Эффект, Кси Эффект, Xi Effect, Effect" />
        <meta name="viewport" content="width=device-width, initial-scale=0.7, maximum-scale=3.2" />
        <meta
          name="description"
          content="Всё, что нужно для вашего Образования."
        />
        {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
      </Head>
      <Provider store={store}>
        {/* <ThemeProvider theme={theme}> */}

          {/* <MenuLayout> */}
          <CssBaseline />
          <Component {...pageProps} />
          {/* </MenuLayout> */}
        {/* </ThemeProvider> */}
      </Provider>
    </>

  )
}))

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};