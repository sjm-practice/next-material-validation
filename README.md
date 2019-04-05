# Setup Notes

## TODO / Potential setup improvements, optimizations
* Roboto, serve as local font instead of external link in head
  * examples how to do so...
  * https://stackoverflow.com/questions/40378320/how-to-include-roboto-font-in-webpack-build-for-material-ui
  * https://github.com/zeit/next.js/issues/512
  * https://www.maketecheasier.com/use-google-roboto-font-everywhere/
  * see file: _document.js ()
* (TBD) SSR - compare what _app.js does in styled-components to material-ui examples
  * I think the styled-components example may do more / be more effective, by crawling all pages / components collecting styles / css using getInitialProps
  * the material-ui example only reads from getPageContext ??? (maybe not necessary - need more understanding)
