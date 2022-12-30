import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from './workoutList/Table';
import CreateForm from "./workoutList/CreateForm";

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
               {/*components goes here*/}
                <Table/>
                <CreateForm/>
            </div>
        </div>
    );
}

export default App;

