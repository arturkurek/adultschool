import React from 'react';
import { hydrate, render } from "react-dom";
import App from './App';

// Using React root element without hydrating
// ReactDOM.render(
//     <App />, document.getElementById("root")
// );

// Root element of the whole Reract application
const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
