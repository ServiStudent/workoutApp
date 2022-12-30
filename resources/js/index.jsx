import ReactDOM from "react-dom/client";
import React from 'react';
import App from './components/App';

if (document.getElementById('workoutApp')) {
    const Index = ReactDOM.createRoot(document.getElementById("workoutApp"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
