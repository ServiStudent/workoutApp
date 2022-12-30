import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';

function Table() {
    const [workoutList, setWorkoutList] = useState([]);

    // Get workout list.
    const getWorkoutList = () => {
        axios.get('/get/workout/list').then(function(response){
            setWorkoutList(response.data);
        });
    }

    useEffect(() => {
        getWorkoutList();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {workoutList.map((workout ,i) =>
                                <tr>
                                    <th scope="row">{i}</th>
                                    <td>{workout.workout_name}</td>
                                    <td>{workout.workout_description}</td>
                                    <td>@mdo</td>
                                </tr>)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;

