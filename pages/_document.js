/* eslint-disable react/no-danger */
import React from "react";
import PropTypes from "prop-types";
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server"; // eslint-disable-line import/no-extraneous-dependencies

class MyDocument extends Document {
  render() {
    const { pageContext } = this.props;

    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta
            name="theme-color"
            content={pageContext ? pageContext.theme.palette.primary.main : null}
          />
          <link rel="shortcut icon" href="/static/favicon.png" />
          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          /> */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @font-face {
                font-family: 'Roboto';
                font-weight: 300;
                src: url('/static/fonts/Roboto-Light-webfont.woff') format('woff');
              }

              @font-face {
                font-family: 'Roboto';
                font-weight: 400;
                src: url('/static/fonts/Roboto-Regular-webfont.woff') format('woff');
              }

              @font-face {
                font-family: 'Roboto';
                font-weight: 500;
                src: url('/static/fonts/Roboto-Medium-webfont.woff') format('woff');
              }
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  let pageContext;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext; // eslint-disable-line prefer-destructuring, react/destructuring-assignment
      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      pageContext: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    };

    return WrappedComponent;
  });

  let css;
  // It might be undefined, e.g. after an error.
  if (pageContext) {
    css = pageContext.sheetsRegistry.toString();
  }

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: css }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default MyDocument;
