import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function CreateForm() {
    const [show, setShow] = useState(false);
    const [workout, setWorkout] = useState({
        name: "",
        description: ""
    });


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createWorkout = () => {
        axios.post('/create/workout', workout)
            .then( response => console.log(response.data));
    };


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Workout Name</Form.Label>
                            <Form.Control type="text" placeholder="" onChange={(event) => {setWorkout({...workout, name: event.target.value})}}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Workout Description</Form.Label>
                            <Form.Control type="text" placeholder="" onChange={(event) => {setWorkout({...workout, description: event.target.value})}}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={createWorkout}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateForm;
