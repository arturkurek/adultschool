import ReactDOM from 'react-dom/client';
import { hydrate } from "react-dom";
import App from './App';


// Root element of the whole Reract application
const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    const root = ReactDOM.createRoot(
        rootElement as HTMLElement
    );
    root.render(<App />);
}
